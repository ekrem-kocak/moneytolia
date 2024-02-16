import { Component, Input } from '@angular/core';
import { Campaign } from '../../models/campaign';
import { Store } from '@ngxs/store';
import {
  DeleteCampaign,
  SetCampaignPoint,
} from '../../actions/campaign.action';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent {
  @Input() campaign: Campaign.Model | undefined;

  constructor(private store: Store) {}

  setPoint(id: string, isIncrease: boolean) {
    this.store.dispatch(new SetCampaignPoint(id, isIncrease));
  }

  deleteCampaign(id: string) {
    this.store.dispatch(new DeleteCampaign(id));
  }
}
