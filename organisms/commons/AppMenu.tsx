import clsx from 'clsx';
import { motion } from 'framer-motion';
import { memo } from 'react';

const AppMenu = () => {
  const clsDefault = `fixed top-0 left-0 z-[50] h-full w-full bg-lime p-5 md:max-w-[375px] xl:max-w-[480px] rounded-br-[300px]`;
  return (
    <motion.div className={clsx(clsDefault)}>
      <div className="overflow-y-auto h-full">Menu</div>
    </motion.div>
  );
};

export default memo(AppMenu);
