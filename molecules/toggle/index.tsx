import Toggle from '@/atoms/toggle';
import Text from '@/atoms/typo/text';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  content: {
    left?: string;
    right?: string;
  };
  className?: string;
  state?: Function;
}
const ToggleWithText = ({ content, className, state }: IProps) => {
  const [active, setActive] = useState<boolean>(false);
  const defaultCls = 'flex items-center justify-center space-x-6';
  return (
    <>
      {content && (
        <div className={twMerge(defaultCls, className)}>
          {content.left && (
            <Text
              size={`bodyText`}
              content={content.left}
              onClick={() => {
                setActive(false);
                state && state(false);
              }}
              className={`cursor-pointer`}
            />
          )}
          <Toggle
            active={active}
            onClick={() => {
              setActive(!active);
              state && state(!active);
            }}
            className={`cursor-pointer`}
          />
          {content.right && (
            <Text
              size={`bodyText`}
              content={content.right}
              onClick={() => {
                setActive(true);
                state && state(true);
              }}
              className={`cursor-pointer`}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ToggleWithText;
