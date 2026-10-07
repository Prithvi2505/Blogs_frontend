import { isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { API_URL } from '../api';

interface LoginResponse {
	access_token: string;
	token_type: string;
	user: AuthUser;
}

export type UserRole = 'reader' | 'author' | 'admin';

export interface AuthUser {
	id: number;
	name: string;
	email: string;
	bio: string | null;
	role: UserRole;
}

export interface UserProfileUpdate {
	name: string;
	bio: string | null;
}

interface LoginCredentials {
	email: string;
	password: string;
}

interface RegistrationData {
	name: string;
	email: string;
	password: string;
	role: 'reader' | 'author';
}

@Injectable({ providedIn: 'root' })
export class Auth {
	private readonly http = inject(HttpClient);
	private readonly router = inject(Router);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly token = signal(this.readToken());
	private readonly currentUser = signal<AuthUser | null>(this.token() ? this.readUser() : null);
	private expiryTimer: ReturnType<typeof setTimeout> | undefined;

	readonly isLoggedIn = computed(() => Boolean(this.token()));
	readonly user = this.currentUser.asReadonly();

	constructor() {
		this.scheduleTokenExpiry(this.token());
	}

	login(credentials: LoginCredentials): Observable<LoginResponse> {
		return this.http.post<LoginResponse>(`${API_URL}/auth/login`, credentials).pipe(
			tap(response => this.saveToken(response.access_token, response.user)),
		);
	}

	register(data: RegistrationData): Observable<{ id: number; name: string; email: string; role: UserRole }> {
		return this.http.post<{ id: number; name: string; email: string; role: UserRole }>(
			`${API_URL}/auth/register`, data,
		);
	}

	getProfile(): Observable<AuthUser> {
		return this.http.get<AuthUser>(`${API_URL}/auth/me`).pipe(
			tap(user => this.saveUser(user)),
		);
	}

	updateProfile(profile: UserProfileUpdate): Observable<AuthUser> {
		return this.http.patch<AuthUser>(`${API_URL}/auth/me`, profile).pipe(
			tap(user => this.saveUser(user)),
		);
	}

	logout(): void {
		if (this.expiryTimer) clearTimeout(this.expiryTimer);
		this.expiryTimer = undefined;
		this.token.set(null);
		this.currentUser.set(null);
		this.clearStoredAuth();
	}

	getAccessToken(): string | null {
		const token = this.token();
		if (!this.isTokenValid(token)) {
			this.logout();
			return null;
		}
		return token;
	}

	canEdit(createdBy: number): boolean {
		const user = this.currentUser();
		return user?.role === 'author' && user.id === createdBy;
	}

	canDeleteBlog(createdBy: number): boolean {
		const user = this.currentUser();
		return user?.role === 'admin' || (user?.role === 'author' && user.id === createdBy);
	}

	canManageVisibility(createdBy: number): boolean {
		return this.canDeleteBlog(createdBy);
	}

	canComment(): boolean {
		const role = this.currentUser()?.role;
		return role === 'reader' || role === 'author';
	}

	canEditComment(userId: number): boolean {
		const user = this.currentUser();
		return user?.role === 'author' && user.id === userId;
	}

	canDeleteComment(userId: number): boolean {
		const user = this.currentUser();
		return user?.role === 'admin' || ((user?.role === 'reader' || user?.role === 'author') && user.id === userId);
	}

	private readToken(): string | null {
		if (!isPlatformBrowser(this.platformId)) return null;
		const token = localStorage.getItem('blogs_access_token');
		if (!this.isTokenValid(token)) {
			this.clearStoredAuth();
			return null;
		}
		return token;
	}

	private readUser(): AuthUser | null {
		if (!isPlatformBrowser(this.platformId)) return null;
		const storedUser = localStorage.getItem('blogs_user');
		return storedUser ? JSON.parse(storedUser) as AuthUser : null;
	}

	private saveToken(token: string, user: AuthUser): void {
		if (!this.isTokenValid(token)) {
			this.logout();
			return;
		}
		this.token.set(token);
		if (isPlatformBrowser(this.platformId)) {
			localStorage.setItem('blogs_access_token', token);
		}
		this.saveUser(user);
		this.scheduleTokenExpiry(token);
	}

	private saveUser(user: AuthUser): void {
		this.currentUser.set(user);
		if (isPlatformBrowser(this.platformId)) {
			localStorage.setItem('blogs_user', JSON.stringify(user));
		}
	}

	private isTokenValid(token: string | null): boolean {
		if (!token) return false;
		try {
			const payload = token.split('.')[1];
			if (!payload) return false;
			const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
			const expiration = (JSON.parse(decoded) as { exp?: unknown }).exp;
			return typeof expiration === 'number' && expiration * 1000 > Date.now();
		} catch {
			return false;
		}
	}

	private scheduleTokenExpiry(token: string | null): void {
		if (this.expiryTimer) clearTimeout(this.expiryTimer);
		this.expiryTimer = undefined;
		if (!isPlatformBrowser(this.platformId) || !token) return;

		const payload = token.split('.')[1];
		if (!payload) return;
		const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
		const expiration = (JSON.parse(decoded) as { exp: number }).exp * 1000;
		const delay = Math.max(0, expiration - Date.now());
		this.expiryTimer = setTimeout(() => {
			if (this.isTokenValid(this.token())) this.scheduleTokenExpiry(this.token());
			else {
				this.logout();
				void this.router.navigate(['/']);
			}
		}, Math.min(delay, 2_147_483_647));
	}

	private clearStoredAuth(): void {
		if (!isPlatformBrowser(this.platformId)) return;
		localStorage.removeItem('blogs_access_token');
		localStorage.removeItem('blogs_user');
	}
}
