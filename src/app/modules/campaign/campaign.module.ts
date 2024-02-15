import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { DenemeComponent } from './components/deneme.component';

@NgModule({
  declarations: [DenemeComponent],
  imports: [CommonModule, CampaignRoutingModule],
})
export class CampaignModule {}
