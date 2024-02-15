import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Campaign } from '../models/campaign';
import { CAMPAIGN_DEFAULT as defaults } from '../defaults/campaign.default';
import { CreateCampaign } from '../actions/campaign.action';

@State<Campaign.State>({
  name: 'Campaign',
  defaults,
})
@Injectable()
export class CampaignState {
  @Selector()
  static getItems({ items }: Campaign.State) {
    return items;
  }

  @Action(CreateCampaign)
  createCampaign(
    { getState, patchState }: StateContext<Campaign.State>,
    { model }: CreateCampaign
  ) {
    const state = getState();

    patchState({
      items: [...state.items, model],
    });
  }
}
