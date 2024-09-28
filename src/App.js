// App.js
import React, { useEffect, useState, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Courses from './components/AviationCourses';
import Memories from './components/Memories';
import Contact from './components/Contact'; // Contact component
import Footer from './components/Footer';
import AirplaneScroll from './components/AirplaneScroll';

import './App.css'; // Main CSS

const App = () => {
  const [modalOpen, setModalOpen] = useState(false); // Initially closed
  const [hasShownModal, setHasShownModal] = useState(false); // State to track if modal has been shown

  const contactRef = useRef(null); // Reference for the contact section

  // Show modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownModal) {
        setModalOpen(true); // Open the modal after 5 seconds
        setHasShownModal(true); // Mark that the modal has been shown
      }
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [hasShownModal]);

  // Function to handle confirmation
  const handleConfirm = () => {
    setModalOpen(false); // Close the modal
    contactRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the contact section
  };

  // Function to close the modal without confirming
  const handleClose = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div>
      <AirplaneScroll /> {/* Airplane scroll animation */}
      <Navigation />
      <Hero />
      <AboutUs />
      <Courses />
      <Memories />

      {/* Contact Section with ref */}
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />

      {/* Modal Dialog for Contact Prompt */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* Cross (X) to close the modal */}
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
