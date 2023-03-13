import clsx from 'clsx';
import { ElementType, memo, ReactNode } from 'react';

interface Props {
  renderAs: ElementType;
  cls?: string;
  title: string;
  children?: ReactNode;
}

const Heading = ({
  renderAs = 'div',
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
      {title != '' && <span dangerouslySetInnerHTML={{ __html: title }}></span>}
      {children && <>{children}</>}
    </Element>
  );
};

export default memo(Heading);
