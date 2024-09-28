import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Ticket, MessageCircle } from 'lucide-react';

const CourseCard = ({ icon: Icon, title, description, details, isActive, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isActive ? 20 : 0 }}
      animate={{ opacity: 1, x: isActive ? 0 : 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow ${isActive ? 'w-82' : 'w-70'}`}
      onClick={onClick}
    >
      <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-blue-600 hover:underline" aria-label={`Learn more about ${title}`}>
        {isActive ? 'Show Less' : 'Learn More →'}
      </button>

      {isActive && (
        <div className="mt-4 text-left">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Details:</h4>
          <p className="text-gray-700 mb-2">{details.description}</p>
          <h4 className="text-lg font-bold text-gray-800">Benefits:</h4>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            {details.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <h4 className="text-lg font-bold text-gray-800">Future Salary Package:</h4>
          <p className="text-gray-700">{details.salary}</p>
          
          <motion.a
            href="#contact"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 ml-20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More Details
          </motion.a>
        </div>
      )}
    </motion.div>
  );
};

const DetailedCourses = () => {
  const [activeCourseId, setActiveCourseId] = useState(null);

  const courses = [
    {
      id: 'air-hostesses',
      icon: Users,
      title: 'Air Hostesses',
      description: 'Training for aspiring air hostesses, focusing on service excellence.',
      details: {
        description: 'Our Air Hostess course is designed to train you in exceptional service...',
        benefits: [
          'Comprehensive training in in-flight service excellence',
          'Grooming and presentation skills',
          'Safety protocols and emergency management',
          'Career opportunities with leading airlines',
        ],
        salary: '₹4 to ₹6 Lakhs per annum depending on experience and airlines.',
      },
    },
    {
      id: 'flight-pursers',
      icon: Star,
      title: 'Flight Pursers',
      description: 'Comprehensive training for flight pursers, including leadership skills.',
      details: {
        description: 'Pursue leadership in the aviation industry with our Flight Pursers course...',
        benefits: [
          'Advanced training in leadership and team management',
          'Customer service and interpersonal skills',
          'Handling in-flight emergencies and coordination',
          'Opportunities in domestic and international airlines',
        ],
        salary: '₹5 to ₹8 Lakhs per annum for experienced professionals.',
      },
    },
    {
      id: 'ticketing-reservation',
      icon: Ticket,
      title: 'Ticketing & Reservation',
      description: 'Learn the essentials of ticketing systems and reservation management.',
      details: {
        description: 'Master the art of booking and managing reservations with our Ticketing & Reservation course...',
        benefits: [
          'Understanding ticketing systems and software',
          'Managing bookings, cancellations, and queries',
          'Knowledge of airline codes and regulations',
          'Jobs in ticketing, reservation, and airport management',
        ],
        salary: '₹3 to ₹5 Lakhs per annum depending on location and airline.',
      },
    },
    {
      id: 'customer-relations',
      icon: MessageCircle,
      title: 'Customer Relations & Personality Development',
      description: 'Enhance skills in communication and relationship management alongside personal development.',
      details: {
        description: 'Enhance your interpersonal skills and develop a professional persona...',
        benefits: [
          'Enhance communication and interpersonal skills',
          'Developing a confident and professional personality',
          'Problem-solving and conflict management',
          'Careers in customer service, hospitality, and aviation',
        ],
        salary: '₹3.5 to ₹6 Lakhs per annum in various customer service roles.',
      },
    },
  ];

  const handleCourseClick = (id) => {
    setActiveCourseId(activeCourseId === id ? null : id); // Toggle the course details
  };

  return (
    <section id="aviation-courses" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-blue-600 mb-12"
        >
          Take OFF Aviation Academy - Aviation Courses
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
              isActive={activeCourseId === course.id}
              onClick={() => handleCourseClick(course.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedCourses;
