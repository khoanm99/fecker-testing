import Plus from '@/atoms/Svg/plus';
import Text from '@/atoms/Typo/text';
import { IAccordion } from '@/Model/organisms';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
    return (
      <div className={`relative flex items-center pt-3 pb-4`}>
        <div className={`lg:pr-5`}>
          <Text
            size={`number`}
            title={`${index < 10 ? '0' + (index + 1) : index}`}
            cls={`text-black`}
          />
        </div>
        <Text title={title} size={`listFormularMenu`} />
        <div
          className={`absolute right-0 cursor-pointer transition-transform duration-500 ${
            expanded ? ' rotate-180' : 'rotate-0'
          }`}
          onClick={() => {
            setExpand(expanded ? false : index);
          }}
        >
          <Plus className={`h-[32px] w-[32px]`} />
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
        <motion.div
          key={'content'}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
            visibility: isExpanded ? 'visible' : 'hidden'
          }}
          transition={{ duration: 0.5 }}
        >
          <div dangerouslySetInnerHTML={{ __html: data }} />
        </motion.div>
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
