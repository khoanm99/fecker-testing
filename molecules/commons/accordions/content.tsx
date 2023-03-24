import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

const AccordionContent = ({
  index,
  expanded,
  children
}: {
  index: number;
  expanded: number;
  children: ReactNode;
}) => {
  const isExpanded = index === expanded;
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
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AccordionContent;
