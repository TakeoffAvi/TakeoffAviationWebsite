import React from 'react';
import { motion } from 'framer-motion';
import './hero.css'; // Assuming your main CSS styles are here

const Hero = () => (
  <section className="top">

    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="hero-title"
    >
      <b>Positive Training With Positive Results</b>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="hero-description"
    >
      "We believe in turning passion into precision. Through positive training and dedication, 
      we empower aviators to confidently soar above challenges and achieve excellence. 
      Your journey to success begins here, where skill meets opportunity."
    </motion.p>

  </section>
);

export default Hero;
