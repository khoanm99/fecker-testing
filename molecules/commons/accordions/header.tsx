import Plus from '@/atoms/Svg/plus';
import Text from '@/atoms/Typo/text';
import { rePosition } from '@/utils/rePosition';
import { useRef } from 'react';

const AccordionHeader = ({
  title,
  index,
  expanded,
  setExpand
}: {
  title: string;
  index: number;
  expanded: number;
  setExpand: Function;
}) => {
  const isOpen = index === expanded;
  const refContent = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setExpand(isOpen ? -1 : index);
    if (refContent.current) rePosition({ scrollItem: refContent.current });
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
        className={`pr-3 lg:pr-5`}
      />
      <Text content={title} size={`listDropDown`} />
      <Plus
        className={`absolute right-0 h-[32px] w-[32px] cursor-pointer transition-all duration-500 ease-out ${
          isOpen ? 'rotate-[225deg]' : `rotate-0`
        } `}
      />
    </div>
  );
};

export default AccordionHeader;
