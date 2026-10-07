import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { Auth } from './auth';

describe('Auth', () => {
  let service: Auth;

  beforeEach(() => {
    localStorage.removeItem('blogs_access_token');
    localStorage.removeItem('blogs_user');
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    });
    service = TestBed.inject(Auth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('clears an expired token and user from storage', () => {
    TestBed.resetTestingModule();
    const payload = btoa(JSON.stringify({ exp: Math.floor(Date.now() / 1000) - 1 }));
    localStorage.setItem('blogs_access_token', `e30.${payload}.signature`);
    localStorage.setItem('blogs_user', JSON.stringify({ id: 1, name: 'User', email: 'user@example.com' }));

    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    });
    service = TestBed.inject(Auth);

    expect(service.isLoggedIn()).toBe(false);
    expect(service.getAccessToken()).toBeNull();
    expect(localStorage.getItem('blogs_access_token')).toBeNull();
    expect(localStorage.getItem('blogs_user')).toBeNull();
  });

  it('persists the access token and user after login for refreshes', () => {
    const accessToken = `e30.${btoa(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + 3600 }))}.signature`;
    const user = { id: 1, name: 'User', email: 'user@example.com', bio: null, role: 'admin' as const };

    service.login({ email: user.email, password: 'password' }).subscribe();
    TestBed.inject(HttpTestingController).expectOne('http://localhost:8000/auth/login').flush({
      access_token: accessToken,
      token_type: 'bearer',
      user,
    });

    expect(localStorage.getItem('blogs_access_token')).toBe(accessToken);
    expect(JSON.parse(localStorage.getItem('blogs_user') ?? 'null')).toEqual(user);
    service.logout();
  });
});
