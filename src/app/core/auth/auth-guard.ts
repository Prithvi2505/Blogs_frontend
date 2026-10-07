import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './auth';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(Auth).isLoggedIn() || inject(Router).createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url },
  });
};
