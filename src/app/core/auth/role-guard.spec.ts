import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, provideRouter, Router, RouterStateSnapshot } from '@angular/router';
import { Auth } from './auth';
import { roleGuard } from './role-guard';

describe('roleGuard', () => {
	it('redirects unauthenticated users to all blogs instead of login', () => {
		TestBed.configureTestingModule({
			providers: [
				provideRouter([]),
				{
					provide: Auth,
					useValue: {
						isLoggedIn: () => false,
						user: () => null,
					},
				},
			],
		});

		const route = { data: { roles: ['author'] } } as ActivatedRouteSnapshot;
		const state = { url: '/blogs/me' } as RouterStateSnapshot;
		const result = TestBed.runInInjectionContext(() => roleGuard(route, state));
		const router = TestBed.inject(Router);

		expect(result).toEqual(router.parseUrl('/blogs'));
	});

	it('redirects a logged-in admin to all blogs without logging them out', () => {
		const auth = {
			isLoggedIn: () => true,
			user: () => ({ role: 'admin' }),
			logout: vi.fn(),
		};

		TestBed.configureTestingModule({
			providers: [
				provideRouter([]),
				{ provide: Auth, useValue: auth },
			],
		});

		const route = { data: { roles: ['author'] } } as ActivatedRouteSnapshot;
		const state = { url: '/blogs/me' } as RouterStateSnapshot;
		const result = TestBed.runInInjectionContext(() => roleGuard(route, state));
		const router = TestBed.inject(Router);

		expect(result).toEqual(router.parseUrl('/blogs'));
		expect(auth.logout).not.toHaveBeenCalled();
	});
});
