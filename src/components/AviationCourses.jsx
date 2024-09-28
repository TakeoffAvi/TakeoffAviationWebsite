import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailedCourses from './DetailedCourses'; // The page to show detailed course info
import CoursesList from './CoursesList'; // Main course list page

const Aviation = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CoursesList />} />
          <Route path="/course/:id" element={<DetailedCourses />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Aviation;
