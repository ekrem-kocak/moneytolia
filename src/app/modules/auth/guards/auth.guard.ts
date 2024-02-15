import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from '../states/auth.state';

export const authGuard: CanActivateFn = (route, state) => {
  const loggedIn = inject(Store).selectSnapshot(AuthState.loggedIn);
  if (!loggedIn) {
    inject(Router).navigate(['/']);
  }
  return loggedIn;
};
