import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Login } from './actions/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  form: FormGroup;

  showPassword: boolean = false;

  constructor(private store: Store) {
    this.form = new FormGroup({
      username: new FormControl('ekremkocak', Validators.required),
      password: new FormControl('ekremkocak', Validators.required),
    });
  }

  login() {
    this.store.dispatch(new Login(this.form.value));
  }
}
