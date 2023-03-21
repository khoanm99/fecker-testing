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
  width?: number;
  height?: number;
  src?: string;
  alt?: string;
}
