import Text from '@/atoms/Typo/text';
import { AnimatePresence, motion } from 'framer-motion';

const AccordionContent = ({
  index,
  data,
  expanded
}: {
  index: number;
  data: any;
  expanded: number;
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
          <Text content={data} size={`bodyText`} className={`pb-4`} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AccordionContent;
