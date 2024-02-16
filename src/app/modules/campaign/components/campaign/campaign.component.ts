import { Component, Input } from '@angular/core';
import { Campaign } from '../../models/campaign';
import { Store } from '@ngxs/store';
import {
  DeleteCampaign,
  SetCampaignPoint,
  SetSelectedCampaignForUpdate,
} from '../../actions/campaign.action';
import { DialogService } from 'primeng/dynamicdialog';
import { NewCampaignComponent } from '../new-campaign/new-campaign.component';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
})
export class CampaignComponent {
  @Input() campaign: Campaign.Model | undefined;

  constructor(private store: Store, public dialogService: DialogService) {}

  setPoint(id: string, isIncrease: boolean) {
    this.store.dispatch(new SetCampaignPoint(id, isIncrease));
  }

  deleteCampaign(id: string) {
    this.store.dispatch(new DeleteCampaign(id));
  }

  updateCampaign(id: string) {
    this.store.dispatch(new SetSelectedCampaignForUpdate(id));
    this.dialogService.open(NewCampaignComponent, {
      width: '50%',
    });
  }
}
