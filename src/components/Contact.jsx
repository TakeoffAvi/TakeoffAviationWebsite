import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPhone } from '@fortawesome/free-solid-svg-icons';

const countries = [
  { name: 'United States', code: '+1', minLength: 10, maxLength: 10 },
  { name: 'India', code: '+91', minLength: 10, maxLength: 10 },
  { name: 'United Kingdom', code: '+44', minLength: 10, maxLength: 11 },
  { name: 'Australia', code: '+61', minLength: 9, maxLength: 9 },
  // Add more countries as needed
];

const Contact = () => {
  const [ThankYou, setThankModalOpen] = useState(false);
  const form = useRef();
  const [status, setStatus] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState(countries[0].code); // Default to first country code
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const phoneRegex = /^[0-9]{10}$/;
  

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for valid email

  const sendEmail = (e) => {
    e.preventDefault();

    const selectedCountry = countries.find(
      (country) => country.code === countryCode
    );

    // Validate phone number length
    if (
      phoneNumber.length < selectedCountry.minLength ||
      phoneNumber.length > selectedCountry.maxLength
    ) {
      setError(
        `Phone number must be between ${selectedCountry.minLength} and ${selectedCountry.maxLength} digits for ${selectedCountry.name}.`
      );
      return;
    }

    // Validate email
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    emailjs
      .sendForm('service_smi3syt', 'template_0afjbke', form.current, {
        publicKey: 'LBUvr8oEm1c7_2Xt7',
      })
      .then(
        () => {
          setStatus('Message Sent!');
          form.current.reset();
          setPhoneNumber('');
          setCountryCode(countries[0].code); // Reset to default country code
          setEmail(''); // Reset email state
          setError(''); // Clear any error
        },
        (error) => {
          setStatus(`Failed to send: ${error.text}`);
        }
      );
  };

  const validateForm = () => {
    

    // Reset error state
    setError('');

    if (
      phoneNumber.length < 10
    ) {
      setError(
        `Phone number must be between 10`
      );

      return false;
    }


    return true;
  };

  const validatePhoneNumber = () => {
    // Check if the phone number matches the pattern
    if (!phoneRegex.test(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number.');
      return false;
    }
    setError(''); // Clear the error if valid
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Validate phone number before proceeding
    if (!validatePhoneNumber()) return;

    // If valid, proceed with form submission (e.g., sending the email)
    console.log('Form submitted successfully!');

    // You can call the email sending logic here (like emailjs)
    form.current.reset(); // Reset the form
    setThankModalOpen(true);
  };
  // const handleButtonClick = (e) => {
  //   e.preventDefault();
  //   if (!validateForm()) return;
  //   setThankModalOpen(true);
  // };

  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
          >
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Get In Touch With Us</h2>
            <p className="text-gray-600 mb-6">
              Give us a call or drop a WhatsApp message anytime, we endeavor to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
            </p>
            <div className="mb-4">
              <strong className="text-gray-700">Location:</strong> EAST POINT MALL, OFFICE NO 10, 2ND FLOOR, SG BARVE MARG, JAGRUTI NAGAR, KURLA EAST MUMBAI, MAHARASHTRA 400024
            </div>
            <div className="mb-4">
              {/* <strong className="text-gray-700">Phone Number:</strong> <a  href="https://wa.me/918928334024" className="text-blue-600 underline"> +91 89283 34024</a> */}
              <strong className="text-gray-700">Phone Number:</strong> <a  href="tel:7291014269" className="text-blue-600 underline"> +91 72910 14269</a>
            </div>
            <div className="mb-4">
              <strong className="text-gray-700">Email Us:</strong> ggautami.bbandary@takeoff-aviation.in
            </div>
            {/* Google Maps Embed */}
            <div className="mb-4">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0135113364525!2d72.8902135749636!3d19.065313746118878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef22c4e3f9f%3A0x6c7f82873f1a47ed!2sEast%20Point%20Mall%2C%20SG%20Barve%20Marg%2C%20Jagruti%20Nagar%2C%20Kurla%20East%2C%20Mumbai%2C%20Maharashtra%20400024!5e0!3m2!1sen!2sin!4v1695297351707!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=EAST+POINT+MALL,+SHOP+NO+10,+SG+BARVE+MARG,+JAGRUTI+NAGAR,+KURLA+EAST+MUMBAI,+MAHARASHTRA+400024" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Open in Google Maps
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 px-4"
          >
            <form
            ref={form}
            className="bg-white rounded-lg shadow-md p-6"
            method="post"
            action="https://form.digitalsochmedia.com/thanku.php"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
             <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Please fill the form below and we'll get in touch with you.</h2> {/* Centered heading */}
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
              required
            />
            <input

              type="text"
              className="form-control"
              name="mobile"
              onChange={(e) => setPhoneNumber(e.target.value)}
              pattern="[0-9]{10}"
              autoComplete="off"
              maxLength="10"
              // onKeyPress={isNumber}
              placeholder="Enter Mobile Number"
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "1rem",
              }}
              required
            />
            {/* Display error message if validation fails */}
            {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
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
              required
            />
            <input
              type="hidden"
              name="clientMailID"
              value="takeoffaviation99@gmail.com"
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
              onClick={handleSubmit}
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
          </motion.div>
        </div>
      </div>
      <a href="tel:+7291014269" class="float" target="_blank">
      <img src={`${process.env.PUBLIC_URL}/images/whats_app.png`} />
      </a>

  {/* Thank You Modal */}
  {ThankYou && (
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
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "10px",
              textAlign: "center",
              maxWidth: "400px",
            }}
          >
            <h1 className="text-2xl font-bold text-blue-600">Thank You!</h1>
            <p className="text-gray-600">We will get back to you shortly.</p>
            <button
              onClick={() => setThankModalOpen(false)}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>

    
  );
};

export default Contact;



// <form ref={form} onSubmit={sendEmail} className="bg-white rounded-lg shadow-md p-6">
// <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Please fill the form below and we'll get in touch with you.</h2> {/* Centered heading */}
//   <input
//     type="text"
//     name="from_name"
//     placeholder="Your Name"
//     required
//     className="w-full mb-4 p-2 border border-gray-300 rounded"
//   />
//   <input
//     type="email"
//     name="from_email"
//     placeholder="Email Address"
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//     required
//     className="w-full mb-4 p-2 border border-gray-300 rounded"
//   />
//   <div className="flex mb-4">
//     <select
//       name="country_code"
//       value={countryCode}
//       onChange={(e) => setCountryCode(e.target.value)}
//       className="w-1/3 mb-0 p-2 border border-gray-300 rounded mr-2"
//     >
//       {countries.map((country) => (
//         <option key={country.code} value={country.code}>
//           {country.name} ({country.code})
//         </option>
//       ))}
//     </select>
//     <input
//       type="tel"
//       name="user_phone"
//       placeholder="Phone Number"
//       value={phoneNumber}
//       onChange={(e) => setPhoneNumber(e.target.value)}
//       required
//       className="w-2/3 mb-0 p-2 border border-gray-300 rounded"
//     />
//   </div>
//   {error && <p className="text-red-500">{error}</p>}
//   <input
//     type="text"
//     name="subject"
//     placeholder="Your Subject"
//     className="w-full mb-4 p-2 border border-gray-300 rounded"
//   />
//   <textarea
//     name="message"
//     placeholder="Your Message"
//     rows="5"
//     required
//     className="w-full mb-4 p-2 border border-gray-300 rounded"
//   ></textarea>
//   <motion.button
//     type="submit"
//     className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//   >
//     Submit
//   </motion.button>
//   {status && <p className="mt-4 text-green-600">{status}</p>}
// </form>