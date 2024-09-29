import React, { useState, useEffect } from 'react';

const FacultySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const facultyMembers = [
    {
      name: "Ggautami Bbandary",
      title: "Founder",
      intro: "Senior Cabin Crew Member with 17 years of experience in domestic and international airlines, specializing in exceptional customer service and safety management.",
      image: "/images/staff2.jpg" // Image path
    },
    {
      name: "Talat Fazal Surve",
      title: "Center Head",
      intro: "Electrical Engineer with an International Teaching Diploma from the Asian College of Teachers & Training, UK. Certified in web design, proficient in computer skills, and experienced in Salesforce CRM, with over 16 years in the industry.",
      image: "/images/staff.jpg" // Image path
    }
  ];

  return (
    <section className={`faculty-section bg-gray-100 py-20 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 animate-fadeIn">Our Experienced Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {facultyMembers.map((faculty, index) => (
            <div 
              key={index} 
              className="faculty-card bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 hover:bg-blue-50 animate-fadeInUp"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden group">
                <div className="w-48 h-48 mx-auto mt-4 rounded-full overflow-hidden border-4 border-blue-600">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name} 
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-blue-800">{faculty.name}</h3>
                <h4 className="text-lg font-medium mb-3 text-gray-600">{faculty.title}</h4>
                <p className="text-gray-700">{faculty.intro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
