import { Component } from '@angular/core';

@Component({
  selector: 'app-deneme',
  template: `
    <div>
      <app-navbar></app-navbar>

      <div class="container-fluid">
        <div class="row">
          <div class="col-auto p-0">
            <app-sidebar></app-sidebar>
          </div>
          <div class="col-auto flex-grow-1">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CampaignLayoutComponent {}
