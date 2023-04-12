import Typo from '@/components/foundation/typo';
import { Items } from '@/types';
import clsx from 'clsx';
import { HTMLAttributes, memo } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<ReactElement> {
  renderAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  variant?: 'hover-green' | 'hover-white' | '';
  title: string;
}

const Heading = ({
  renderAs = 'h1',
  size = 'h1',
  className = '',
  variant = '',
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
      cls={twMerge(
        clsx(
          defaultCls,
          listSize[size],
          {
            ' hover:text-primary': variant == 'hover-green',
            ' hover:text-white': variant == 'hover-white'
          },
          className
        )
      )}
    />
  );
};

export default memo(Heading);
