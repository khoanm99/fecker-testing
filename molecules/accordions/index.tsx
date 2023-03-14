import Plus from '@/atoms/Svg/plus';
import Text from '@/atoms/Typo/text';
import { IAccordion } from '@/model/molecules/accordions';
import { AnimatePresence, motion } from 'framer-motion';
import { MouseEvent, useState } from 'react';

const Accordion = ({ list }: IAccordion) => {
  const renderHeader = ({
    title,
    index,
    expanded,
    setExpand
  }: {
    title: string;
    index: number;
    expanded: false | number;
    setExpand: Function;
  }) => {
    const isOpen = index === expanded;
    const scrollToOpenSection = (
      e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) => {
      e.preventDefault();
      const scrollItem = document.getElementById(`accordion-${index}`);
      if (scrollItem) {
        setTimeout(() => {
          window.scrollTo({
            top:
              scrollItem.getBoundingClientRect().top -
              document.body.getBoundingClientRect().top -
              30,
            left: 0,
            behavior: 'smooth'
          });
        }, 500);
      }
    };

    return (
      <div className={`relative flex items-center pt-3 pb-4`}>
        <div className={`pr-3 lg:pr-5`}>
          <Text
            size={`number`}
            title={`${index < 10 ? '0' + (index + 1) : index}`}
            cls={`text-black`}
          />
        </div>
        <Text title={title} size={`listFormularMenu`} />
        <div
          className={`absolute right-0 cursor-pointer`}
          onClick={e => {
            setExpand(isOpen ? false : index);
            scrollToOpenSection(e);
          }}
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

  const renderDetail = ({
    index,
    data,
    isOpen
  }: {
    index: number;
    data: any;
    isOpen: false | number;
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

  const [expanded, setExpand] = useState<false | number>(false);

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
                renderHeader({
                  title: item.title,
                  expanded,
                  setExpand,
                  index: key
                })}
              {item.item &&
                renderDetail({ data: item.item, isOpen: expanded, index: key })}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Accordion;
