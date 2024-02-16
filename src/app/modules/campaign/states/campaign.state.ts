import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Campaign } from '../models/campaign';
import { CAMPAIGN_DEFAULT as defaults } from '../defaults/campaign.default';
import {
  CreateCampaign,
  DeleteCampaign,
  SetCampaignPoint,
} from '../actions/campaign.action';

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

  @Action(DeleteCampaign)
  deleteCampaign(
    { getState, patchState }: StateContext<Campaign.State>,
    { campaignId }: DeleteCampaign
  ) {
    const state = getState();

    patchState({
      items: [...state.items.filter((i) => i.id !== campaignId)],
    });
  }

  @Action(SetCampaignPoint)
  setCampaignPoint(
    ctx: StateContext<Campaign.State>,
    { campaignId, isIncrease }: SetCampaignPoint
  ) {
    const state = ctx.getState();

    const updatedItems = state.items.map((i) => {
      if (i.id === campaignId)
        return { ...i, point: isIncrease ? i.point + 1 : i.point - 1 };
      else return i;
    });

    ctx.patchState({
      items: updatedItems,
    });
  }
}
