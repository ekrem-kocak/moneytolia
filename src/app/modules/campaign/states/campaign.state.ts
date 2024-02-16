import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Campaign } from '../models/campaign';
import { CAMPAIGN_DEFAULT as defaults } from '../defaults/campaign.default';
import {
  CreateCampaign,
  DeleteCampaign,
  SetCampaignPoint,
  SetSelectedCampaignForUpdate,
  UpdateCampaign,
} from '../actions/campaign.action';
import { MessageService } from 'primeng/api';

@State<Campaign.State>({
  name: 'Campaign',
  defaults,
})
@Injectable()
export class CampaignState {
  constructor(private messageService: MessageService) {}

  @Selector()
  static getItems({ items }: Campaign.State) {
    return items;
  }

  @Selector()
  static getSelectedItem({ selectedItem }: Campaign.State) {
    return selectedItem;
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

    this.messageService.add({
      severity: 'success',
      summary: 'Yeni Kampanya Oluşturuldu.',
    });
  }

  @Action(SetSelectedCampaignForUpdate)
  setSelectedCampaignForUpdate(
    { getState, patchState }: StateContext<Campaign.State>,
    { campaignId }: SetSelectedCampaignForUpdate
  ) {
    const selectedCampaign = campaignId
      ? getState().items.find((i) => i.id === campaignId)
      : null;

    patchState({
      selectedItem: selectedCampaign || null,
    });
  }

  @Action(UpdateCampaign)
  updateCampaign(
    { getState, patchState }: StateContext<Campaign.State>,
    { campaign }: UpdateCampaign
  ) {
    const state = getState();

    patchState({
      items: [...state.items.map((i) => (i.id === campaign.id ? campaign : i))],
    });

    this.messageService.add({
      severity: 'success',
      summary: 'Güncelleme İşlemi Başarılı!',
    });
  }

  @Action(DeleteCampaign)
  deleteCampaign(
    { getState, patchState }: StateContext<Campaign.State>,
    { campaignId }: DeleteCampaign
  ) {
    const state = getState();
    const selectedItem = state.items.find((i) => i.id === campaignId);

    patchState({
      items: [...state.items.filter((i) => i.id !== campaignId)],
    });

    this.messageService.add({
      severity: 'error',
      summary: 'Silme İşlemi Başarılı!',
      detail: `${selectedItem?.title} Kampanyası Silindi.`,
    });
  }

  @Action(SetCampaignPoint)
  setCampaignPoint(
    ctx: StateContext<Campaign.State>,
    { campaignId, isIncrease }: SetCampaignPoint
  ) {
    const state = ctx.getState();

    const selectedItem = state.items.find((i) => i.id === campaignId);

    const updatedItems = state.items.map((i) => {
      if (i.id === campaignId)
        return { ...i, point: isIncrease ? i.point + 1 : i.point - 1 };
      else return i;
    });

    ctx.patchState({
      items: updatedItems,
    });

    this.messageService.add({
      severity: 'info',
      summary: `Puan Değiştirildi.`,
      detail: `${selectedItem?.title} Kampanyasının Yeni Puanı ${
        selectedItem?.point! + (isIncrease ? +1 : -1)
      }`,
    });
  }
}
