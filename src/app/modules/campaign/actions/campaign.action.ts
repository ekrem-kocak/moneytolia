import { Campaign } from '../models/campaign';

export class CreateCampaign {
  static readonly type = '[Campaign] Create Campaign';
  constructor(public model: Campaign.Model) {}
}
