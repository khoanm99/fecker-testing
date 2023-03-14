import clsx from 'clsx';
import { ElementType, memo, ReactNode } from 'react';

interface Props {
  renderAs: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  cls?: string;
  title: string;
  children?: ReactNode;
}

const Heading = ({
  renderAs = 'h1',
  cls = '',
  title = '',
  children
}: Props) => {
  const Element = renderAs;
  const clsH2 = 'text-4.5xl xl:text-7.5xl';
  const clsH1 = 'text-4.5xl xl:text-9.5xl';
  const clsDefault = 'font-medium';

  return (
    <Element
      className={clsx(
        clsDefault,
        { [clsH1]: renderAs === 'h1' },
        { [clsH2]: renderAs === 'h2' },
        cls
      )}
    >
      {title != '' && title}
      {children && <>{children}</>}
    </Element>
  );
};

export default memo(Heading);
