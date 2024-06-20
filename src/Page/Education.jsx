import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import image3 from "../assets/edbg.jpg";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const educationData = [
    {
      institution: "Chittagong Polytechnic Institute",
      degree: "Diploma in Engineering",
      cgpa: "3.16 Out Of 4.0",
      passing: "2023",
      location: "Chittagong, Bangladesh",
    },
    {
      institution: "Sadek Mostan (R.) High School",
      degree: "Secondary School Certificate",
      cgpa: "3.94 Out Of 5.0",
      passing: "2019",
      location: "Sittakunda, Chittagong, Bangladesh",
    },
  ];

  return (
    <div
      className="mb-8"
     
    >
      <div>
        <h2 className="text-5xl text-center mt-8 mb-6 font-bold">
          MY <span className="text-primary">EDUCATION</span>
        </h2>
        <hr className=" border border-spacing-5 h-2 w-96 mt-4 bg-blue-500 mx-auto" ></hr>
      </div>
      <VerticalTimeline
          className="custom-vertical-timeline"
      lineColor={'rgb(96, 235, 230)'}>
        {educationData.map((education, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            contentStyle={{
              background: `url(${image3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0px 4px 10px rgb(96, 235, 230)",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(0, 0, 0, 0.7)" }}
            dateClassName="text-black"
            date={education.passing}
            iconStyle={{
              background: "rgb(96, 235, 230)",
              height: "25px",
              width: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<div style={{ fontSize: "24px" }}>🎓</div>}
          >
            <div className="relative z-10 text-white text-center w-full bg-white bg-opacity-10 p-4 backdrop-blur">
              <h3 className="vertical-timeline-element-title text-xl font-bold">
                {education.degree}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-100 mb-2">
                {education.institution}
              </h4>
              <p className="text-gray-300 mb-2">CGPA: {education.cgpa}</p>
              <p className="text-gray-300 ">Passing: {education.passing}</p>
              <p className="text-gray-300">{education.location}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
