import {
  ComponentTextBlockTextBlock,
  Maybe,
  UploadFile
} from '@/graphql/generated';
import { HTMLAttributes } from 'react';

export interface KeyPair<K, V> {
  value: V;
  key: K;
}

export type Items = {
  [key: string]: string;
};

export interface IPostType {
  slug?: string;
  title: string;
  date?: string;
  coverImage?: string;
  excerpt?: string;
  ogImage?: {
    url: string;
  };
  content: string;
}

export type updateState<T> = (_newState: T) => void;

export interface IAppState {
  curLang: string;
  isSticky: boolean;
  // isFormOpen: boolean;
  isMenuOpen: boolean;
  skippedToContent: boolean;
}
export interface IAppStateChange {
  curLang?: string;
  isSticky?: boolean;
  isFormOpen?: boolean;
  isMenuOpen?: boolean;
  skippedToContent?: boolean;
}

export interface IAppContext extends IAppState {
  updateState: updateState<IAppStateChange>;
}

export interface IMouseState {
  cursorVariant: string;
  cursorText: string;
}

export interface ILatLngCMS {
  attributes?: {
    lat?: number;
    lng?: number;
    content?: string;
    phone?: string;
    email?: string;
  };
}
export interface IContentBlock {
  textBlockData: Maybe<ComponentTextBlockTextBlock>;
  state?: 'layout-left' | 'layout-right';
  index?: number;
}

export type ISiteImage = {
  title?: string;
  description?: string;
  image?: Maybe<UploadFile>;
  variant?: 'green' | 'black';
  sharp?: 'fill' | 'auto';
};

export interface IClassName {
  className?: string;
  color?: string;
  pathCls?: string;
}

export type SVGProps = HTMLAttributes<HTMLOrSVGElement> & IClassName;
