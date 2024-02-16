import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CampaignLayoutComponent } from './components/campaign-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewCampaignComponent } from './components/new-campaign/new-campaign.component';
import { SharedModule } from '../shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { CampaignState } from './states/campaign.state';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { CampaignComponent } from './components/campaign/campaign.component';

@NgModule({
  declarations: [
    CampaignLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    NewCampaignComponent,
    CampaignListComponent,
    CampaignComponent,
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    SharedModule,
    NgxsModule.forFeature([CampaignState]),
  ],
})
export class CampaignModule {}
