import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CreateCampaign } from '../../actions/campaign.action';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss'],
})
export class NewCampaignComponent {
  form: FormGroup;

  constructor(private store: Store) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      point: new FormControl(0, Validators.required),
      date: new FormControl(
        formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
        Validators.required
      ),
    });
  }

  submit() {
    this.store.dispatch(
      new CreateCampaign({ ...this.form.value, id: uuidv4() })
    );
  }
}
