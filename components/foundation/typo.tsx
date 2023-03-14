import { ElementType, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  renderAs?: ElementType;
  cls?: string;
  title: string;
  children?: ReactNode;
}

const Typo = ({ renderAs = 'div', cls = '', title = '', children }: Props) => {
  const Element = renderAs;
  return (
    <Element className={twMerge(cls)}>
      {title != '' && <span dangerouslySetInnerHTML={{ __html: title }}></span>}
      {children && <>{children}</>}
    </Element>
  );
};

export default Typo;
