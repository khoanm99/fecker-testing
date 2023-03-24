import { ReactNode } from 'react';

const Container = ({
  layout,
  children
}: {
  layout: string;
  children: ReactNode;
}) => {
  return <div className={''}>{children}</div>;
};

export default Container;
