import React, { useEffect, useState, useRef } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import DetailedCourses from "./components/DetailedCourses";
import FacultySection from "./components/FacultySection"; // Import the new component
import Memories from "./components/Memories";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AirplaneScroll from "./components/AirplaneScroll";

import "./App.css";

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
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasShownModal]);

  const handleClose = () => {
    setModalOpen(false);
  };

  const isNumber = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  const scrollToCourses = () => {
    coursesRef.current.scrollIntoView({ behavior: "smooth" });
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
      <FacultySection />
      <Memories />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />

      {modalOpen && (
  <div
    id="myModal"
    className="modal fade onload_modal"
    role="dialog"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1050,
    }}
  >
    <div
      className="modal-dialog"
      style={{
        maxWidth: "500px",
        // background: "#fff",
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
      }}
    >
      <div
        className="modal-content"
        style={{
          borderRadius: "15px",
        }}
      >
        <div
          className="modal-header"
          style={{
            // padding: "20px",
            backgroundColor: "#ec6c11",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5 style={{ margin: 0 }}>
            <span
              className="fa fa-phone"
              style={{ marginRight: "10px" }}
            ></span>
            Request Callback
          </h5>
          <button
            type="button"
            onClick={handleClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        </div>
        <div
          className="modal-body"
          style={{
            padding: "25px 30px",
          }}
        >
          <form
            method="post"
            action="https://form.digitalsochmedia.com/thanku.php"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Your Name"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "1rem",
              }}
            />
            <input
              type="text"
              className="form-control"
              name="mobile"
              pattern="[0-9]{10}"
              autoComplete="off"
              maxLength="10"
              onKeyPress={isNumber}
              placeholder="Enter Mobile Number"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "1rem",
              }}
            />
            <input
              type="text"
              className="form-control"
              name="msg"
              placeholder="Enter Your Message"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "1rem",
              }}
            />
            <input
              type="hidden"
              name="clientMailID"
              value="zealcarcare@gmail.com"
            />
            <input
              name="website"
              type="hidden"
              value="takeoff-aviation.in/thanku.html"
            />
            <input name="loginID" type="hidden" value="1583" />
            <input name="orderID" type="hidden" value="1742" />
            <button
              type="submit"
              className="btn btn-block"
              style={{
                backgroundColor: "#ec6c11",
                color: "#fff",
                padding: "12px",
                fontSize: "1rem",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              <span className="fa fa-paper-plane"></span> Submit
            </button>
          </form>
        </div>
        <div
          className="modal-footer"
          style={{
            textAlign: "center",
            padding: "10px 20px",
            fontSize: "0.9rem",
            color: "#555",
          }}
        >
          <p style={{ margin: 0 }}>
            Our team will contact you soon. Thank you for reaching out!
          </p>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default App;







// import React, { useEffect, useState, useRef } from 'react';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import AboutUs from './components/AboutUs';
// import DetailedCourses from './components/DetailedCourses';
// import FacultySection from './components/FacultySection'; // Import the new component
// import Memories from './components/Memories';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import AirplaneScroll from './components/AirplaneScroll';


// import './App.css';

// const App = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [hasShownModal, setHasShownModal] = useState(false);
//   const contactRef = useRef(null);
//   const coursesRef = useRef(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (!hasShownModal) {
//         setModalOpen(true);
//         setHasShownModal(true);
//       }
//     }, 15000);

//     return () => clearTimeout(timer);
//   }, [hasShownModal]);

//   const handleConfirm = () => {
//     setModalOpen(false);
//     contactRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleClose = () => {
//     setModalOpen(false);
//   };

//   const scrollToCourses = () => {
//     coursesRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div>
//       <AirplaneScroll />
//       <Navigation onCoursesClick={scrollToCourses} />
//       <Hero />
//       <AboutUs />
//       <div ref={coursesRef}>
//         <DetailedCourses />
//       </div>
//       <FacultySection /> {/* Add the new FacultySection component here */}
//       <Memories />
//       <div ref={contactRef}>
//         <Contact />
//       </div>
//       <Footer />

//       {modalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close-button" onClick={handleClose}>&times;</span>
//             <h1 style={{ padding: '10px' }}><b>Get in Touch with Us</b></h1>
//             <button
//               onClick={handleConfirm}
//               style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
//               Click Here
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
