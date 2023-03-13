import { IKeyString } from '@/Model/common';
import { ElementType, memo, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  renderAs?: ElementType;
  size?:
    | 'h1'
    | 'h2'
    | 'listFormularMenu'
    | 'descBig'
    | 'descSmall'
    | 'text'
    | 'textSmall'
    | 'number'
    | 'btn';
  cls?: string;
  title: string;
  children?: ReactNode;
}

const Typo = ({
  renderAs = 'div',
  size = 'text',
  cls = '',
  title = '',
  children
}: Props) => {
  const Element = renderAs;
  const listSize: IKeyString = {
    h1: 'font-baskervville italic lg:text-[80px] lg:leading-normal uppercase',
    h2: 'font-baskervville lg:text-[45px] lg:leading-normal',
    listFormularMenu: 'font-extralight lg:text-[35px] lg:leading-normal',
    descBig: 'font-extralight lg:text-3xl lg:leading-normal ',
    descSmall: 'font-medium lg:text-base lg:leading-normal ',
    text: 'font-extralight lg:text-xl lg:leading-normal ',
    textSmall: 'lg:text-base lg:leading-normal font-extralight',
    number: 'font-bold text-primary lg:text-xl lg:leading-normal ',
    btn: 'font-light lg:text-xl lg:leading-8 '
  };

  return (
    <Element className={twMerge(listSize[size], cls)}>
      {title != '' && <span dangerouslySetInnerHTML={{ __html: title }}></span>}
      {children && <>{children}</>}
      <div className="leading font-baskervville text-3xl  text-xl font-bold font-medium"></div>
    </Element>
  );
};

export default memo(Typo);
