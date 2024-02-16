import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetSelectedCampaignForUpdate } from '../actions/campaign.action';

export const newCampaignResolver: ResolveFn<boolean> = (route, state) => {
  return inject(Store).dispatch(new SetSelectedCampaignForUpdate(null));
};
