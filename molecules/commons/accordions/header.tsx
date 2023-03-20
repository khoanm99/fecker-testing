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
    <div className={`relative flex items-center pt-3 pb-4`} ref={refContent}>
      <Text
        size={`numberList`}
        content={`${index < 10 ? '0' + (index + 1) : index}`}
        className={`pr-3 text-black lg:pr-5`}
      />
      <Text content={title} size={`listDropDown`} />
      <Plus
        onClick={() => handleClick()}
        className={`absolute right-0 h-[32px] w-[32px] cursor-pointer [&_line]:origin-center [&_line]:transition-all [&_line]:duration-500 ${
          isOpen
            ? '[&_line:first-child]:opacity-0 [&_line:last-child]:rotate-90'
            : ``
        } `}
      />
    </div>
  );
};

export default AccordionHeader;
