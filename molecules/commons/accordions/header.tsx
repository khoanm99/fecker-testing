import Plus from '@/atoms/svg/plus';
import Text from '@/atoms/typo/text';
import { rePosition } from '@/utils/rePosition';
import { useRef } from 'react';

const AccordionHeader = ({
  title,
  index,
  expanded,
  setExpand,
  isHaveContent = true
}: {
  title: string;
  index: number;
  expanded: number;
  setExpand: Function;
  isHaveContent?: boolean;
}) => {
  const isOpen = index === expanded;
  const refContent = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (isHaveContent) {
      setExpand(isOpen ? -1 : index);
      if (refContent.current)
        rePosition({ scrollItem: refContent.current, spaceTop: 100 });
    }
  };

  return (
    <div
      className={`relative flex cursor-pointer items-center pt-3 pb-4 transition-colors duration-500 hover:text-primary`}
      onClick={() => handleClick()}
      ref={refContent}
    >
      <Text
        size={`numberList`}
        content={`${index < 10 ? '0' + (index + 1) : index}`}
      />
      <Text
        content={title}
        size={`listDropDown`}
        className={`pl-[30px] pr-14 lg:pl-[20px]`}
      />
      {isHaveContent && (
        <Plus
          className={`absolute right-0 h-[32px] w-[32px] cursor-pointer transition-all duration-500 ease-out ${
            isOpen ? 'rotate-[225deg]' : `rotate-0`
          } `}
        />
      )}
    </div>
  );
};

export default AccordionHeader;
