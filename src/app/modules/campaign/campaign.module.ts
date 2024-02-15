import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CampaignLayoutComponent } from './components/campaign-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [CampaignLayoutComponent, NavbarComponent, SidebarComponent],
  imports: [CommonModule, CampaignRoutingModule],
})
export class CampaignModule {}
