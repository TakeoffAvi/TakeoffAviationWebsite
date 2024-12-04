import React, { useEffect, useState, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import DetailedCourses from './components/DetailedCourses';
import FacultySection from './components/FacultySection'; // Import the new component
import Memories from './components/Memories';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AirplaneScroll from './components/AirplaneScroll';


import './App.css';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const contactRef = useRef(null);
  const coursesRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownModal) {
        setModalOpen(true);
        setHasShownModal(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [hasShownModal]);

  const handleConfirm = () => {
    setModalOpen(false);
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const scrollToCourses = () => {
    coursesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <AirplaneScroll />
      <Navigation onCoursesClick={scrollToCourses} />
      <Hero />
      <AboutUs />
      <div ref={coursesRef}>
        <DetailedCourses />
      </div>
      <FacultySection /> {/* Add the new FacultySection component here */}
      <Memories />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleClose}>&times;</span>
            <h1 style={{ padding: '10px' }}><b>Get in Touch with Us</b></h1>
            <button
              onClick={handleConfirm}
              style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Click Here
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;