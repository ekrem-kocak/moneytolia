import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const localState = localStorage.getItem('@@STATE');
  var loggedIn: boolean;

  if (localState) loggedIn = JSON.parse(localState).Auth.loggedIn;
  else loggedIn = false;

  if (!loggedIn) {
    inject(Router).navigate(['/auth']);
  }
  return loggedIn;
};
