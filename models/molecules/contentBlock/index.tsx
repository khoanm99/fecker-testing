import { ComponentTextBlockTextBlock, Maybe } from '@/graphql/generated';
import { IButtonLink, ITextBlock } from '@/models/common';

export interface IContentBlock {
  textBlockData: Maybe<ComponentTextBlockTextBlock>;
  state?: 'layout-left' | 'layout-right';
  index?: number;
}
