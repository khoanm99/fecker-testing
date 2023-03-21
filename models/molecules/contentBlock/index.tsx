import { IButtonLink, IImage } from '@/models/common';

export interface IContentBlock {
  title?: string;
  description?: string;
  image?: IImage;
  buttonLink?: IButtonLink;
  state: 'left' | 'right';
  index?: number;
}
