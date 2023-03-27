import Typo from '@/components/foundation/typo';
import { Items } from '@/types';
import { ElementType, HTMLAttributes, memo, ReactNode } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<ReactElement> {
  renderAs?: ElementType;
  size?:
    | 'bodyText'
    | 'bodyTextSmall'
    | 'listDropDown'
    | 'numberList'
    | 'numberHome'
    | 'textOnPicture'
    | 'menuLink'
    | 'menuHeadline'
    | 'menu'
    | 'toggleDesc'
    | 'btn';
  className?: string;
  content: string;
  children?: ReactNode;
}

const Text = ({
  renderAs = 'div',
  size = 'bodyText',
  className = '',
  content = '',
  children,
  ...props
}: Props) => {
  const defaultCls = 'font-primary leading-normal';
  const listSize: Items = {
    bodyText: 'text-[16px] font-extralight lg:text-[20px]',
    bodyTextSmall: 'text-[14px] font-extralight lg:text-[16px]',
    listDropDown: 'text-[25px] font-extralight lg:text-[35px]',
    numberList: 'text-[20px] font-bold uppercase',
    numberHome: 'text-[12px] font-bold uppercase lg:text-[20px]',
    textOnPicture:
      'text-[20px] font-bold leading-tight uppercase lg:text-[30px]',
    menuLink:
      'text-[16px] font-extrabold transition-color duration-500 uppercase',
    menuHeadline:
      'text-[30px] font-extrabold transition-color duration-500 uppercase',
    menu: 'text-[20px] font-light uppercase',
    toggleDesc: 'text-[16px] font-extralight uppercase lg:text-[30px]',
    btn: 'text-[16px] font-semibold lg:text-[20px]'
  };

  return (
    <Typo
      {...props}
      title={content}
      renderAs={renderAs}
      cls={twMerge(defaultCls, listSize[size], className)}
      className={`text-x text-3x `}
    >
      {children}
    </Typo>
  );
};

export default memo(Text);
