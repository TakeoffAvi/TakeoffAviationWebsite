import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon from react-icons

const Navigation = ({ onCoursesClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu
  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    // Digital Soch Commit
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
            alt="Aviation logo"
            className="h-10" // Adjust the height as needed
          />
        </motion.div>

        <motion.div
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <div className="w-8 h-0.5 white relative">
              <div className="absolute w-full h-0.5 bg-blue-600 rotate-45"></div>
              <div className="absolute w-full h-0.5 bg-blue-600 -rotate-45 "></div>
            </div>
          ) : (
            <div className="space-y-2 cursor-pointer">
              <div className="w-8 h-0.5 bg-blue-600"></div>
              <div className="w-8 h-0.5 bg-blue-600"></div>
              <div className="w-8 h-0.5 bg-blue-600"></div>
            </div>
          )}
        </motion.div>

        <ul
          className={`flex-col sm:flex sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 absolute sm:static left-0 top-full w-full sm:w-auto sm:items-center transition-all duration-500 ease-in-out bg-white sm:bg-transparent sm:translate-x-0 ${
            isOpen ? 'translate-x-0' : 'translate-x-full sm:flex'
          }`}
        >
          {['Home', 'About Us', 'Courses', 'Faculty', 'Memories'].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-blue-600 block px-4 py-2"
                onClick={(item === 'Courses') ? () => { handleMenuClose(); onCoursesClick(); } : handleMenuClose}
              >
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-2" // Add space between the buttons
          >
            <motion.a
              href="#contact"
              className="block text-white bg-blue-600 px-3 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMenuClose}
            >
              Contact Us
            </motion.a>
            <motion.a
              href="https://wa.me/918928334024" // Replace with the owner's WhatsApp number
              className="text-green-500 hover:text-green-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleMenuClose}
            >
              <FaWhatsapp size={24} /> {/* Adjust size as needed */}
            </motion.a>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
