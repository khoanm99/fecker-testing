import Typo from '@/components/foundation/typo';
import { IKeyString } from '@/models/common';
import { ElementType, memo, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  renderAs?: ElementType;
  size?:
    | 'listFormulaMenu'
    | 'descBig'
    | 'descSmall'
    | 'text'
    | 'textSmall'
    | 'number'
    | 'btn';
  cls?: string;
  content: string;
  children?: ReactNode;
}

const Text = ({
  renderAs = 'div',
  size = 'text',
  cls = '',
  content = '',
  children
}: Props) => {
  const listSize: IKeyString = {
    listFormulaMenu: 'font-extralight lg:text-[35px] lg:leading-normal',
    descBig: 'font-extralight lg:text-3xl lg:leading-normal ',
    descSmall: 'font-medium lg:text-base lg:leading-normal ',
    text: 'font-extralight lg:text-xl lg:leading-normal ',
    textSmall: 'lg:text-base lg:leading-normal font-extralight',
    number: 'font-bold text-primary lg:text-xl lg:leading-normal ',
    btn: 'font-light lg:text-xl lg:leading-8 '
  };

  return (
    <Typo
      title={content}
      renderAs={renderAs}
      cls={twMerge(listSize[size], cls)}
    >
      {children}
    </Typo>
  );
};

export default memo(Text);
