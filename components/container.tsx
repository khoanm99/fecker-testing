import { useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

const Container = ({
  layout,
  id,
  className,
  usingAnimation = true,
  children
}: {
  layout: 'grid' | 'full';
  id?: string;
  className?: string;
  usingAnimation?: boolean;
  children: ReactNode;
}) => {
  const defaultCls = `py-[30px] lg:py-[100px] max-w-[1920px] mx-[auto]`;
  const gridCls = `${
    layout === 'grid' ? 'px-[20px] lg:px-[40px] xl:px-[75px]' : ''
  }`;
  const fullCls = `${layout === 'full' ? '' : ''}`;
  const refContainer = useRef<HTMLDivElement>(null);
  const isInView = useInView(refContainer, { once: true });
  const style = {
    transform: isInView ? 'none' : `translateY(200px)`,
    opacity: isInView ? 1 : 0,
    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
  };
  return (
    <div
      id={id}
      ref={refContainer}
      className={twMerge(defaultCls, gridCls, fullCls, className)}
      style={isInView ? style : {}}
    >
      {children}
    </div>
  );
};

export default Container;
