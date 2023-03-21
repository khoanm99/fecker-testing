import { ComponentBasicTextBlock, Maybe } from '@/graphql/generated';
import { IButtonLink, ITextBlock } from '@/models/common';

export interface IContentBlock {
  textBlockData: Maybe<ComponentBasicTextBlock>;
  state?: 'layout-left' | 'layout-right';
  index?: number;
}
