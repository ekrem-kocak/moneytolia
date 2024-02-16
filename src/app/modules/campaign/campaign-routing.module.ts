import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignLayoutComponent } from './components/campaign-layout.component';
import { NewCampaignComponent } from './components/new-campaign/new-campaign.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { newCampaignResolver } from './resolvers/new-campaign.resolver';

const routes: Routes = [
  {
    path: '',
    component: CampaignLayoutComponent,
    children: [
      { path: '', component: CampaignListComponent },
      {
        path: 'new-campaign',
        component: NewCampaignComponent,
        resolve: { n: newCampaignResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignRoutingModule {}
