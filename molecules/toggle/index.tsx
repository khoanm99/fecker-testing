import Toggle from '@/atoms/toggle';
import Text from '@/atoms/Typo/text';
import { useState } from 'react';

interface IProps {
  content: {
    left?: string;
    right?: string;
  };
}
const ToggleWithText = ({ content }: IProps) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      {content && (
        <div className={`flex items-center justify-center space-x-6`}>
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
