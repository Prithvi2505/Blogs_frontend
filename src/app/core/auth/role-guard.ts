import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, UserRole } from './auth';

export const roleGuard: CanActivateFn = route => {
	const auth = inject(Auth);
	const router = inject(Router);
	if (!auth.isLoggedIn()) {
		return router.createUrlTree(['/blogs']);
	}

	const allowedRoles = route.data['roles'] as UserRole[];
	const user = auth.user();
	return user !== null && (allowedRoles ?? []).includes(user.role)
		? true
		: router.createUrlTree(['/blogs']);
};
