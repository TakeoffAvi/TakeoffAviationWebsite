import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, name: 'Air Hostesses', description: 'Training for aspiring air hostesses, focusing on service excellence.' },
  { id: 2, name: 'Flight Pursers', description: 'Comprehensive training for flight pursers, including leadership skills.' },
  { id: 3, name: 'Ticketing & Reservation', description: 'Learn the essentials of ticketing systems and reservation management.' },
  { id: 4, name: 'Customer Relations & Personality Development', description: 'Enhance skills in communication and relationship management.' },
];

const CoursesList = () => {
  return (
    <div className="course-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {courses.map(course => (
        <div key={course.id} className="course-card p-6 bg-white rounded shadow hover:shadow-lg transition-shadow ml-36">
          <h2 className="text-xl font-bold">{course.name}</h2>
          <p className="text-gray-600">{course.description}</p>
          <Link to={`/course/${course.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
            Learn More →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
