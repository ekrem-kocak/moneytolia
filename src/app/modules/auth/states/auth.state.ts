import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Auth } from '../models/auth';
import { AUTH_DEFAULTS as defaults } from '../defaults/auth.defaults';
import { Login, Logout } from '../actions/auth.actions';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@State<Auth.State>({
  name: 'Auth',
  defaults,
})
@Injectable()
export class AuthState {
  constructor(private messageService: MessageService, private router: Router) {}

  @Selector()
  static loggedIn({ loggedIn }: Auth.State) {
    return loggedIn;
  }

  @Action(Login)
  login(ctx: StateContext<Auth.State>, { model }: Login) {
    const state = ctx.getState();
    if (
      model.username === state.username &&
      model.password === state.password
    ) {
      ctx.patchState({ loggedIn: true });
      this.messageService.add({
        severity: 'success',
        summary: 'Giriş Başarılı!',
        detail: 'Hoş geldiniz.',
      });
      this.router.navigate(['/campaign']);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Kullanıcı adı veya şifre hatalı!',
        detail: 'Lütfen tekrar deneyiniz.',
      });
    }
  }

  @Action(Logout)
  logout({ patchState }: StateContext<Auth.State>) {
    patchState({
      loggedIn: false,
    });
  }
}
