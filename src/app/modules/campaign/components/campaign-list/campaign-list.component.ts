import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { CampaignState } from '../../states/campaign.state';
import { Observable } from 'rxjs';
import { Campaign } from '../../models/campaign';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
})
export class CampaignListComponent {
  @Select(CampaignState.getItems) campaigns$:
    | Observable<Campaign.Model[]>
    | undefined;
}
