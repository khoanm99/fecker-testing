import { ElementType, HTMLAttributes, ReactNode } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<ReactElement> {
  renderAs?: ElementType;
  cls?: string;
  title: string;
  children?: ReactNode;
}

const Typo = ({
  renderAs = 'div',
  cls = '',
  title = '',
  children,
  ...props
}: Props) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={twMerge(cls)}
      dangerouslySetInnerHTML={{ __html: title }}
    >
      {children && <>{children}</>}
    </Element>
  );
};

export default Typo;
