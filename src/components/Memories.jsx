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
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
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
      className="text-3xl font-bold text-center text-blue-600 mb-12"
    >
      Our Memorable Moments
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'First Graduation Ceremony',
          description: 'A day to remember as we celebrated our first batch of graduates.',
          imageUrl: 'https://via.placeholder.com/400?text=Graduation+Ceremony',
        },
        {
          title: 'Aviation Day Event',
          description: 'A fun-filled day with various activities and aviation enthusiasts.',
          imageUrl: 'https://via.placeholder.com/400?text=Aviation+Day',
        },
        {
          title: 'Guest Lecture by Industry Expert',
          description: 'An insightful session with an aviation industry expert.',
          imageUrl: 'https://via.placeholder.com/400?text=Guest+Lecture',
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
