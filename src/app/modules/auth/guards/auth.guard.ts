import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../models/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const loggedIn: boolean = (
    JSON.parse(localStorage.getItem('@@STATE')!).Auth as Auth.State
  ).loggedIn;
  if (!loggedIn) {
    inject(Router).navigate(['/auth']);
  }
  return loggedIn;
};
