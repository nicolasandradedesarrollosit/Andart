import { useRef } from 'react';
import { useInView } from 'motion/react';

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return { ref, isInView };
};
