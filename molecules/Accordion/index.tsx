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
      <motion.div
        initial={false}
        animate={{}}
        onClick={() => {
          setExpand(expanded ? false : index);
        }}
      >
        {title}
      </motion.div>
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
        {isExpanded && (
          <motion.div
            key={'content'}
            initial="collapsed"
            animate="open"
            exit={`collapsed`}
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div dangerouslySetInnerHTML={{ __html: data }} />
          </motion.div>
        )}
      </>
    );
  };

  const [expanded, setExpand] = useState<false | number>(0);
  return (
    <>
      {list && list.length > 0 && (
        <div>
          {list.map((item, key) => (
            <div key={key}>
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
