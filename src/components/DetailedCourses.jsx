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
      title: 'Air Hostesses Training',
      description: 'Training for aspiring air hostesses, focusing on service excellence.',
      details: {
        description: 'Our Air Hostess Training program provides comprehensive training for those aspiring to become professional air hostesses. This course focuses on developing service excellence, safety protocols, and interpersonal skills essential for delivering exceptional in-flight customer service across various airlines.',
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
      title: 'Flight Pursers Training',
      description: 'Comprehensive training for flight pursers, including leadership skills.',
      details: {
        description: 'The Flight Purser Training program is ideal for individuals aiming to step into supervisory roles within the cabin crew. This course emphasizes leadership, crew management, and operational efficiency, preparing students for flight purser responsibilities in the aviation industry worldwide.',
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
      title: 'Ticketing & Reservation Management',
      description: 'Learn the essentials of ticketing systems and reservation management.',
      details: {
        description: "Learn the ins and outs of ticketing systems and reservation management with our specialized training program. Gain essential knowledge in handling airline reservations, ticket issuance, and customer interaction, skills highly sought after by both domestic and international airlines.",
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
        description: 'Our Customer Relations & Personality Development course helps students enhance their communication, customer handling, and personal presentation skills, vital for aviation customer service roles. This training focuses on relationship management, soft skills, and professional development, perfect for careers in aviation and hospitality.',
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
          className="text-3xl font-bold text-center text-blue-600 mb-12 mt-12"
        >
          Take OFF Aviation Academy - Aviation Courses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-center text-gray-700 mb-12 mt-12 mr-6 ml-6"
        >
        At Takeoff Aviation Academy, we offer a variety of aviation training programs tailored to prepare individuals for dynamic careers in the aviation industry. Our courses are designed to equip students with the necessary skills to succeed in global aviation roles, ranging from in-flight services to ground operations and customer relations.
        </motion.p>


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
