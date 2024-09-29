import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ onCoursesClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu
  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Image instead of text */}
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

        {/* Hamburger Menu Icon - Changes to X when opened */}
        <motion.div
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            // X icon when menu is open
            <div className="w-8 h-0.5 white relative">
              <div className="absolute w-full h-0.5 bg-blue-600 rotate-45"></div>
              <div className="absolute w-full h-0.5 bg-blue-600 -rotate-45 "></div>
            </div>
          ) : (
            // Hamburger menu when closed
            <div className="space-y-2 cursor-pointer">
              <div className="w-8 h-0.5 bg-blue-600"></div>
              <div className="w-8 h-0.5 bg-blue-600"></div>
              <div className="w-8 h-0.5 bg-blue-600"></div>
            </div>
          )}
        </motion.div>

        {/* Navigation Links - Hidden on small screens */}
        <ul
          className={`flex-col sm:flex sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 absolute sm:static left-0 top-full w-full sm:w-auto sm:items-center transition-all duration-500 ease-in-out bg-white sm:bg-transparent sm:translate-x-0 ${
            isOpen ? 'translate-x-0' : 'translate-x-full sm:flex'
          }`}
        >
          {['Home', 'About Us', 'Courses', 'Memories'].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={
                  item === 'Home'
                    ? '#'
                    : item === 'Courses'
                    ? "#courses"
                    : `#${item.toLowerCase().replace(' ', '-')}`
                }
                className="text-gray-700 hover:text-blue-600 block px-4 py-2"
                onClick={(item === 'Courses') ? () => { handleMenuClose(); onCoursesClick(); } : handleMenuClose} // Close the menu and handle Courses click
              >
                {item}
              </a>
            </motion.li>
          ))}
          {/* Contact Us button inside the hamburger menu */}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="#contact"
              className="block text-white bg-blue-600 px-3 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleMenuClose} // Close the menu on "Contact Us" click
            >
              Contact Us
            </motion.a>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
