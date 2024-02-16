import { Campaign } from '../models/campaign';

export class CreateCampaign {
  static readonly type = '[Campaign] Create Campaign';
  constructor(public model: Campaign.Model) {}
}

export class DeleteCampaign {
  static readonly type = '[Campaign] Delete Campaign';
  constructor(public campaignId: string) {}
}

export class SetSelectedCampaignForUpdate {
  static readonly type = '[Campaign] Set Selected Campaign For Update';
  constructor(public campaignId: string | null) {}
}

export class UpdateCampaign {
  static readonly type = '[Campaign] Update Campaign';
  constructor(public campaign: Campaign.Model) {}
}

export class SetCampaignPoint {
  static readonly type = '[Campaign] Set Campaign Point';
  constructor(public campaignId: string, public isIncrease: boolean) {}
}
