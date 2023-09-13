import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const animations = {
  initial: { opacity: 0.1 },
  animate: { opacity: 1 },
  exit: { opacity: 0.1 },
};

const MainScreenAnimation: FC<IProps> = props => {
  const { children } = props;

  return (
    <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }}>
      {children}
    </motion.div>
  );
};

export default MainScreenAnimation;
