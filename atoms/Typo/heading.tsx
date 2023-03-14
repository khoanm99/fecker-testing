import Typo from '@/components/foundation/typo';
import { IKeyString } from '@/Model/common';
import { memo, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  renderAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'h1' | 'h2';
  cls?: string;
  title: string;
  children?: ReactNode;
}

const Heading = ({
  renderAs = 'h1',
  size = 'h1',
  cls = '',
  title = '',
  children
}: Props) => {
  const listSize: IKeyString = {
    h1: 'font-baskervville italic lg:text-[80px] lg:leading-normal uppercase',
    h2: 'font-baskervville lg:text-[45px] lg:leading-normal'
  };

  return (
    <Typo title={title} renderAs={renderAs} cls={twMerge(listSize[size], cls)}>
      {children}
    </Typo>
  );
};

export default memo(Heading);
