import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailedCourses from './DetailedCourses'; // The page to show detailed course info


const Aviation = () => {
  return (
    <Router>
      <div>
      <h1 className="text-4xl text-center py-8">Aviation Courses Overview</h1>
        <Routes>
          <Route path="/course/:id" element={<DetailedCourses />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Aviation;
