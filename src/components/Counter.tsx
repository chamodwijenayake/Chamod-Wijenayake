import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'motion/react';

interface CounterProps {
  value: string;
  duration?: number;
}

export const Counter: React.FC<CounterProps> = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix (e.g., "212+" -> { target: 212, suffix: "+" })
  // Also handles commas like "1,200"
  const cleanValue = value.replace(/,/g, '');
  const target = parseInt(cleanValue.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9,]/g, '');
  const hasComma = value.includes(',');

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  const formattedValue = hasComma 
    ? displayValue.toLocaleString() 
    : displayValue.toString();

  return <span ref={ref}>{formattedValue}{suffix}</span>;
};
