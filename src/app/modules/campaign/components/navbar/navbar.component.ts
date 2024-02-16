import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from 'src/app/modules/auth/actions/auth.actions';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar shadow-md bg-secondary">
      <div class="container-fluid d-flex">
        <a class="navbar-brand" routerLink="/">
          <img
            src="https://customer.moneytolia.com/assets/images/moneytolia-logo187.svg"
            alt="logo"
          />
        </a>
        <button class="btn btn-light">
          <i (click)="logout()" class="bi bi-door-closed-fill"></i>
        </button>
      </div>
    </nav>
  `,
  styles: [
    `
      nav {
        position: sticky;
        top: 0;
        padding: 24px 44px;
        z-index: 1;
      }

      @media screen and (max-width: 400px) {
        nav {
          padding: 1rem;
        }

        nav img {
          width: 150px;
        }
      }
    `,
  ],
})
export class NavbarComponent {
  constructor(private store: Store) {}

  logout() {
    this.store.dispatch(new Logout());
  }
}
