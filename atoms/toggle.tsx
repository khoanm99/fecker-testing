import { HTMLAttributes } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<HTMLDivElement> {
  active: boolean;
  className?: string;
}
const Toggle = ({ active = false, className = '', ...props }: Props) => {
  return (
    <div {...props} className={twMerge(className)}>
      <span
        className={`relative block h-[24px] w-[60px] rounded-full bg-primary lg:h-[44px] lg:w-[110px]`}
      >
        <span
          className={`transition-left transition-right absolute top-1/2 block h-[22px] w-[22px] -translate-y-1/2 rounded-full bg-white duration-300 lg:h-[40px] lg:w-[40px] ${
            active
              ? 'translate-x-[35px] lg:translate-x-[67px]'
              : 'translate-x-[3px] '
          }`}
        />
      </span>
    </div>
  );
};

export default Toggle;
