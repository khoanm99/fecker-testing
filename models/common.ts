import { UploadFile } from '@/graphql/generated';
import { Maybe } from 'graphql/jsutils/Maybe';
import { HTMLAttributes } from 'react';

export interface IKeyString {
  [key: string]: string;
}

export interface IClassName {
  className?: string;
  color?: string;
}

export type SVGProps = HTMLAttributes<HTMLOrSVGElement> & IClassName;

export interface IImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface IButtonLink {
  title: string;
  url: string;
}

export type ISeo = {
  title: string;
  description: string;
};
export type ITextBlock = {
  id?: string;
  title: string;
  description: string;
  image?: IImage;
};

export type ISiteImage = {
  title?: string;
  description?: string;
  image?: Maybe<UploadFile>;
  variant?: 'green' | 'black';
  layout?: 'layout-landscape' | 'layout-portrait';
};
