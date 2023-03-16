import Typo from '@/components/foundation/typo';
import { IKeyString } from '@/models/common';
import { HTMLAttributes, memo } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<ReactElement> {
  renderAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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
    h2: 'font-secondary lg:text-[45px] lg:leading-normal',
    h3: '',
    h4: '',
    h5: '',
    h6: ''
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
