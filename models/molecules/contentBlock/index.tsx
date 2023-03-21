import { IButtonLink, ITextBlock } from '@/models/common';

export interface IContentBlock extends ITextBlock {
  buttonLink?: IButtonLink;
  state?: 'layout-left' | 'layout-right';
  index?: number;
}
