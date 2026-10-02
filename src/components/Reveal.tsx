import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface RevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number; // ms
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  distance = 28,
  duration = 0.65,
  ...rest
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      case 'none':
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: duration,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1], // Smooth cubic bezier easing
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
