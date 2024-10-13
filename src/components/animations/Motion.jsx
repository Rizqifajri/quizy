import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Motion = ({ variants, custom, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });

  return (
    <motion.span
      ref={ref}
      variants={variants}
      animate={isInView ? 'animate' : 'initial'}
      initial={'initial'}
      custom={custom}
    >
      {children}
    </motion.span>
  );
};

export default Motion;