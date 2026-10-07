import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_URL } from '../../../core/api';
import { Blog, BlogLikeResponse } from '../../../Models/blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
	private readonly http = inject(HttpClient);

	getAll(): Observable<Blog[]> {
		return this.http.get<Blog[]>(`${API_URL}/blogs`).pipe(
			tap(blogs => console.log('[BlogService] GET /blogs response:', blogs)),
		);
	}

	getMine(): Observable<Blog[]> {
		return this.http.get<Blog[]>(`${API_URL}/blogs/me`);
	}

	getById(id: number): Observable<Blog> {
		return this.http.get<Blog>(`${API_URL}/blogs/${id}`);
	}

	create(title: string, description: string, tags: string[]): Observable<Blog> {
		return this.http.post<Blog>(`${API_URL}/blogs`, { title, description, tags });
	}

	update(id: number, title: string, description: string, tags: string[]): Observable<Blog> {
		return this.http.put<Blog>(`${API_URL}/blogs/${id}`, { title, description, tags });
	}

	updateVisibility(id: number, isPublic: boolean): Observable<Blog> {
		return this.http.put<Blog>(`${API_URL}/blogs/${id}/visibility`, { is_public: isPublic });
	}

	like(id: number): Observable<BlogLikeResponse> {
		return this.http.put<BlogLikeResponse>(`${API_URL}/blogs/${id}/like`, null);
	}

	unlike(id: number): Observable<BlogLikeResponse> {
		return this.http.delete<BlogLikeResponse>(`${API_URL}/blogs/${id}/like`);
	}

	delete(id: number): Observable<void> {
		return this.http.delete<void>(`${API_URL}/blogs/${id}`);
	}
}
