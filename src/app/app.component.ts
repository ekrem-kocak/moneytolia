import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <p-toast
      [breakpoints]="{ '576px': { width: '95%', right: '0' } }"
    ></p-toast>
  `,
})
export class AppComponent {}
