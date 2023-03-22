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
}
const ToggleWithText = ({ content, className }: IProps) => {
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
              }}
              className={`cursor-pointer`}
            />
          )}
          <Toggle
            active={active}
            onClick={() => {
              setActive(!active);
            }}
            className={`cursor-pointer`}
          />
          {content.right && (
            <Text
              size={`bodyText`}
              content={content.right}
              onClick={() => {
                setActive(true);
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
