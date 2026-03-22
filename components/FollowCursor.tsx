"use client"

import { motion, useMotionValue, useSpring } from 'framer-motion';

const FollowCursorDiv = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = {
    damping: 10,
    stiffness: 400,
  };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  return (
    <motion.div
      style={{
        width: 50,
        height: 50,
        background: 'blue',
        borderRadius: '50%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999,
        pointerEvents: 'none',
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
};

export default FollowCursorDiv;
