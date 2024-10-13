import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { textReveal } from '../../lib/variants';
import { cn } from '../../lib/utils';

export const TextReveal = ({ variants, className, text = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      animate={isInView ? 'animate' : 'initial'}
      initial={'initial'}
    >
      {text.split(' ').map((word, index) => (
        <motion.span key={index} className="inline-block">
          {word.split('').map((char, index) => (
            <motion.span
              key={index}
              className={cn('inline-block', className)}
              variants={variants ? variants : textReveal}
              custom={index}
            >
              {char}
            </motion.span>
          ))}
          <span>&nbsp;</span>
        </motion.span>
      ))}
    </motion.span>
  );
};