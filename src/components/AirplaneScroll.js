// AirplaneScroll.js
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Plane } from 'lucide-react';

const AirplaneScroll = () => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['10vh', '80vh']); // Adjust the start and end positions as needed

  return (
    <motion.div
      className="airplane"
      style={{
        y, // Bind the vertical position to the scroll
      }}
    >
      <Plane className="airplane-icon" />
    </motion.div>
  );
};

export default AirplaneScroll;
