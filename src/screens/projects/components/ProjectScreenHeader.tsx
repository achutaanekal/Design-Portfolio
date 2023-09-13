import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import ProjectCloseButton from './ProjectCloseButton';

const ProjectScreenHeader = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious();
    if (previous < latest && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      className="sticky w-full top-0 h-[50px] lg:h-[70px] bg-background-main z-50 flex  px-[16px] lg:px-[80px]"
    >
      <div className="container relative border-b border-border-main">
        <ProjectCloseButton />
      </div>
    </motion.div>
  );
};

export default ProjectScreenHeader;
