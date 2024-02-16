import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { CreateCampaign, UpdateCampaign } from '../../actions/campaign.action';

import { v4 as uuidv4 } from 'uuid';
import { CampaignState } from '../../states/campaign.state';
import { Campaign } from '../../models/campaign';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss'],
})
export class NewCampaignComponent {
  form: FormGroup;

  selectedItem: Campaign.Model | null;

  constructor(private store: Store, private dialogService: DialogService) {
    this.selectedItem = this.store.selectSnapshot(
      CampaignState.getSelectedItem
    );

    this.form = new FormGroup({
      id: new FormControl(this.selectedItem?.id || ''),
      title: new FormControl(
        this.selectedItem?.title || '',
        Validators.required
      ),
      description: new FormControl(
        this.selectedItem?.description || '',
        Validators.required
      ),
      point: new FormControl(
        this.selectedItem?.point || 0,
        Validators.required
      ),
      date: new FormControl(
        formatDate(this.selectedItem?.date || Date.now(), 'yyyy-MM-dd', 'en'),
        Validators.required
      ),
    });
  }

  submit() {
    if (this.selectedItem) {
      console.log(this.selectedItem);
      this.store.dispatch(new UpdateCampaign(this.form.value));
      this.dialogService.dialogComponentRefMap.forEach((dialog) => {
        dialog.destroy();
      });
    } else {
      this.store.dispatch(
        new CreateCampaign({ ...this.form.value, id: uuidv4() })
      );
    }
  }
}
