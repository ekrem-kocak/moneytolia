import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar shadow-md bg-secondary">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">
          <img
            src="https://customer.moneytolia.com/assets/images/moneytolia-logo187.svg"
            alt="logo"
          />
        </a>
      </div>
    </nav>
  `,
  styles: [
    `
      nav {
        position:sticky;
        top:0;
        padding: 24px 44px;
      }
    `,
  ],
})
export class NavbarComponent {}
