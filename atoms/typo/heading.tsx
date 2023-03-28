import Typo from '@/components/foundation/typo';
import { Items } from '@/types';
import { HTMLAttributes, memo } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<ReactElement> {
  renderAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  title: string;
}

const Heading = ({
  renderAs = 'h1',
  size = 'h1',
  className = '',
  title = '',
  ...props
}: Props) => {
  const defaultCls = 'font-primary leading-normal';
  const listSize: Items = {
    h1: 'text-[40px] leading-none font-bold uppercase lg:text-[120px]',
    h2: 'text-[20px] font-bold uppercase lg:text-[45px]',
    h3: 'text-[20px] font-extrabold uppercase lg:text-[45px]',
    h4: '',
    h5: '',
    h6: ''
  };

  return (
    <Typo
      {...props}
      title={title}
      renderAs={renderAs}
      cls={twMerge(defaultCls, listSize[size], className)}
    />
  );
};

export default memo(Heading);
