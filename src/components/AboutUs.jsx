import React from 'react';
import { motion } from 'framer-motion';
import { AlignCenter } from 'lucide-react';

// Inline styles for the About Us section
const styles = {
  section: {
    padding: '4rem 1rem', // Padding for the section
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  textContainer: {
    flex: '1 1 40%', // Flexbox properties for responsive design
    paddingRight: '2rem',
    marginTop:"2rem",
    marginBottom: '2rem',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#3B82F6', // Tailwind's blue-700
    marginBottom: '1rem',
    marginLeft: '2rem',
    marginRight:'3rem'
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#4B5563', // Tailwind's gray-700
    marginBottom: '1rem',
    marginLeft: '2rem',
    marginRight:'3rem'
  },
  paragraph: {
    fontSize: '1.125rem',
    color: '#4B5563', // Tailwind's gray-600
    lineHeight: '1.5',
    marginBottom: '1.5rem',
    marginLeft: '2rem',
    marginRight:'3rem'
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
    fontSize: '1.125rem',
    marginLeft: '2rem',
    marginRight:'3rem'
  },
  imageContainer: {
    flex: '1 1 50%',
    marginTop:"1.5rem"
  },
  image: {
    borderRadius: '0.5rem', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow effect
    width: '100%',
    height: 'auto',
  },
  svg: {
    width: '1.25rem',
    height: '1.25rem',
    marginRight: '0.5rem',
    color: '#10B981', // Tailwind's green-500
  }
};

// AboutUs component
const AboutUs = () => (
  <section id="about-us" style={styles.section}>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={styles.textContainer}
    >
      <h2 style={styles.heading} >WELCOME TO TAKE OFF AVIATION ACADEMY</h2>
      <h3 style={styles.subheading}>YOUR GATEWAY TO A SKY-HIGH CAREER!</h3>
      <p style={styles.paragraph}>
      Takeoff Aviation Academy is a premier institution providing specialized aviation training for careers in air hostess services, flight purser roles, ticketing and reservation management, and customer relations. We offer industry-focused programs designed to prepare students for global aviation opportunities, emphasizing service excellence, leadership skills, and customer service expertise.
      </p>
      <p style={styles.paragraph}>
      Our courses include Air Hostess Training, Flight Purser Training, and Ticketing & Reservation Management, along with Customer Relations & Personality Development to enhance communication and professional growth. With expert instructors and modern facilities, Takeoff Aviation Academy ensures students are equipped to excel in the fast-paced aviation industry.
      </p>
      <p style={styles.paragraph}>
      <a href="#contact"><u><b>Join us</b></u></a> and launch your career with one of the best aviation academies in India, offering top-tier training for the aviation industry.
      </p>
      <ul style={styles.list}>
        {[
          'Professional Teachers',
          'Certified Programs',
          'Quality Research',
          'Broad Capabilities',
          'Trusted Expertise',
          'High Integrity',
          'Best Courses Offered',
          'Proven Track Record',
        ].map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ display: 'flex', alignItems: 'center', color: '#4B5563' }}
          >
            <svg style={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* Right Section: Image */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={styles.imageContainer}
    >
      <div className="box">
        <motion.img
          src={`${process.env.PUBLIC_URL}/images/about.jpg`} // Path to your image in the public folder
          alt="About Takeoff Aviation"
          style={styles.image}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  </section>
);

export default AboutUs;
