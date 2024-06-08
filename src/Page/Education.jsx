
import AOS from 'aos';
import 'aos/dist/aos.css';
import image3 from '../assets/image5.jpg'
import { useEffect } from 'react';
const Education = () => {
    useEffect(() => {
        AOS.init();
    })
  const educationData = [
    {
      institution: "ABC High School",
      degree: "High School Diploma",
      cgpa: "4.0/4.0",
      duration: "2014 - 2018",
      location: "City, Country",
    },
   
  ];

  return (
   
    <div className="container  mx-auto py-8">
    <div>
        <h2 className="text-5xl text-center   mt-8 font-bold ">
          MY <span className="text-primary">EDUCATION</span>
        </h2>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
      {educationData.map((education, index) => (
        <div key={index} className="relative rounded-lg shadow-md p-6">
          <div className="absolute inset-0 bg-cover bg-center bg-opacity-75 " style={{ backgroundImage: `url(${image3})` , boxShadow: '0px 4px 10px rgb(96, 235, 230)' }}></div>
          <div className="relative z-10 text-white text-center  w-full bg-black bg-opacity-30 p-4   backdrop-blur">
            <h2 className="text-xl font-bold mb-2">{education.degree}</h2>
            <p className="text-gray-300 mb-2">{education.institution}</p>
            <p className="text-gray-300 mb-2">{education.duration}</p>
            <p className="text-gray-300 mb-2">CGPA: {education.cgpa}</p>
            <p className="text-gray-300">{education.location}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Education;
