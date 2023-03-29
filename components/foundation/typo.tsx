import { ElementType, HTMLAttributes, ReactNode } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<ReactElement> {
  renderAs?: ElementType;
  cls?: string;
  title?: string;
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
  if (!title)
    return (
      <Element {...props} className={twMerge(cls)}>
        {children && <>{children}</>}
      </Element>
    );
  return (
    <Element {...props} className={twMerge(cls)}>
      <span dangerouslySetInnerHTML={{ __html: title }}></span>
      {children && <>{children}</>}
    </Element>
  );
};

export default Typo;
