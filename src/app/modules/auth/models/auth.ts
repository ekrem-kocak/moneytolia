export namespace Auth {
  export interface State {
    loggedIn: boolean;
    username: string;
    password: string;
  }
  export interface Model {
    username: string;
    password: string;
  }
}
