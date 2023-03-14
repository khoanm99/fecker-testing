import Plus from '@/atoms/Svg/plus';
import Text from '@/atoms/Typo/text';
import { IAccordion } from '@/models/molecules/accordions';
import { rePosition } from '@/utils/rePosition';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';

const Accordion = ({ list }: IAccordion) => {
  const RenderHeader = ({
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
        <div className={`pr-3 lg:pr-5`}>
          <Text
            size={`number`}
            content={`${index < 10 ? '0' + (index + 1) : index}`}
            cls={`text-black`}
          />
        </div>
        <Text content={title} size={`listFormularMenu`} />
        <div
          className={`absolute right-0 cursor-pointer`}
          onClick={() => handleClick()}
        >
          <Plus
            className={`h-[32px] w-[32px] [&_line]:origin-center [&_line]:transition-all [&_line]:duration-500 ${
              isOpen
                ? '[&_line:first-child]:opacity-0 [&_line:last-child]:rotate-90'
                : ``
            } `}
          />
        </div>
      </div>
    );
  };

  const RenderDetail = ({
    index,
    data,
    isOpen
  }: {
    index: number;
    data: any;
    isOpen: number;
  }) => {
    const isExpanded = index === isOpen;
    return (
      <>
        <AnimatePresence initial={false}>
          <motion.div
            key="content"
            animate={{
              height: isExpanded ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden`}
          >
            <div
              dangerouslySetInnerHTML={{ __html: data }}
              className={`pb-4`}
            />
          </motion.div>
        </AnimatePresence>
      </>
    );
  };

  const [expanded, setExpand] = useState<number>(-1);

  return (
    <>
      {list && list.length > 0 && (
        <div>
          {list.map((item, key) => (
            <div
              key={key}
              className={`border-b-[1px] border-solid border-black first-of-type:border-t-[1px]`}
              id={`accordion-${key}`}
            >
              {item.title &&
                RenderHeader({
                  title: item.title,
                  expanded,
                  setExpand,
                  index: key
                })}
              {item.item &&
                RenderDetail({ data: item.item, isOpen: expanded, index: key })}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Accordion;
