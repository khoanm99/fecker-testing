import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const Container = ({
  layout,
  className,
  children
}: {
  layout: 'grid' | 'full';
  className?: string;
  children: ReactNode;
}) => {
  const defaultCls = `py-[30px] lg:py-[100px] max-w-[1920px] mx-[auto]`;
  const gridCls = `${
    layout === 'grid' ? 'px-[20px] lg:px-[40px] xl:px-[75px]' : ''
  }`;
  const fullCls = `${layout === 'full' ? '' : ''}`;

  return (
    <div className={twMerge(defaultCls, gridCls, fullCls, className)}>
      {children}
    </div>
  );
};

export default Container;
