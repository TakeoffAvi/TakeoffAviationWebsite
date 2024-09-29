// Memories.js
import React from 'react';
import { motion } from 'framer-motion';

const MemoryCard = ({ title, description, imageUrl }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <img src={imageUrl} alt={title} className="w-full h-80 object-cover"/>
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const Memories = () => (
  <section id="memories" className="container mx-auto px-4 py-16">
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold text-center text-blue-600 mb-12 mt-12"
    >
      Our Memorable Moments
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        {
          title: 'Indigo Graduation Ceremony',
          description: 'Graduation day at Indigo Airways',
          imageUrl: `${process.env.PUBLIC_URL}/images/m1.jpg`,
        },
        {
          title: 'Seminar Conducted',
          description: 'Conducted a seminar for soft skill enhancement.',
          imageUrl: `${process.env.PUBLIC_URL}/images/m3.jpg`,
        },
        {
          title: 'Placement at AirIndia',
          description: 'An alumni now flying with Air India. ',
          imageUrl: `${process.env.PUBLIC_URL}/images/m4.jpg`,
        },
        {
          title: 'Placement at Qatar Airways',
          description: 'Another Alumni is now flying across countries with Qatar Airways.',
          imageUrl: `${process.env.PUBLIC_URL}/images/m5.jpg`,
        },
        {
          title: 'Placement at Akasa Airways',
          description: "Another Alumni has joined Akasa Airways with help of Ggautami Bbandary Ma'am.",
          imageUrl: `${process.env.PUBLIC_URL}/images/m6.jpg`,
        },
        {
          title: 'Placement at Spice-Jet Airways',
          description: "Another Alumni has joined Spice-Jet Airways on their journey to the skies.",
          imageUrl: `${process.env.PUBLIC_URL}/images/m7.jpg`,
        },
      ].map((memory, index) => (
        <MemoryCard
          key={index}
          title={memory.title}
          description={memory.description}
          imageUrl={memory.imageUrl}
        />
      ))}
    </div>
  </section>
);

export default Memories;
