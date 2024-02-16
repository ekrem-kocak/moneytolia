import { Component } from '@angular/core';

@Component({
  selector: 'app-deneme',
  template: `
    <div>
      <app-navbar></app-navbar>

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-auto col-12 p-0">
            <app-sidebar></app-sidebar>
          </div>
          <div class="col py-2">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CampaignLayoutComponent {}
