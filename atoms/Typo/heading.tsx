import Typo from '@/components/foundation/typo';
import { IKeyString } from '@/models/common';
import { memo, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  renderAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'h1' | 'h2';
  cls?: string;
  title: string;
}

const Heading = ({
  renderAs = 'h1',
  size = 'h1',
  cls = '',
  title = ''
}: Props) => {
  const listSize: IKeyString = {
    h1: 'font-secondary italic lg:text-[80px] lg:leading-normal uppercase',
    h2: 'font-secondary lg:text-[45px] lg:leading-normal'
  };

  return (
    <Typo
      title={title}
      renderAs={renderAs}
      cls={twMerge(listSize[size], cls)}
    />
  );
};

export default memo(Heading);
