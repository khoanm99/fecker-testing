import clsx from 'clsx';
import { ElementType, memo, ReactNode } from 'react';

interface Props {
  renderAs: 'p' | 'div' | 'span';
  cls?: string;
  content: string;
  children?: ReactNode;
}

const Text = ({
  renderAs = 'div',
  cls = '',
  content = '',
  children
}: Props) => {
  const Element = renderAs;
  const clsDefault = 'font-medium';

  return (
    <Element className={clsx(clsDefault, cls)}>
      {content != '' && content}
      {children && <>{children}</>}
    </Element>
  );
};

export default memo(Text);
