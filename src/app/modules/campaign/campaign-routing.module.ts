import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignLayoutComponent } from './components/campaign-layout.component';

const routes: Routes = [{ path: '', component: CampaignLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignRoutingModule {}
