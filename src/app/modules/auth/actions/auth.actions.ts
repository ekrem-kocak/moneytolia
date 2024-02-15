import { Auth } from '../models/auth';

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public model: Auth.Model) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
  constructor() {}
}
