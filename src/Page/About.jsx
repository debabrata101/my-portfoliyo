import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "animate.css";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <>
      <div>
        <h2 className="text-5xl text-center mt-8 font-bold font-pacifico">
          Know About <span className="text-primary">Me</span>
        </h2>
     <hr className=" border border-spacing-5 h-2 w-96 mt-4 bg-blue-500 mx-auto" ></hr>
      </div>
      <div className="flex justify-around  items-center">
        <div className=" mt-10 mr-10 p-8  md:ml-36 md:w-1/2 m-3 text-balance font-mono text-xl ">
          <h1 className="text-2xl mb-6 font-bold ">
            <TypeAnimation
              sequence={[" Hello!", 1000, "I am Debabrata Das.", 1000]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
            />
          </h1>
          <p  className="text-justify mr-4">
            I am an Diploma student. Currently, I am doing my Diploma in
            CST(Computer Science & Technology) at Chittagong Polytechnic
            Institute. I&apos;m particularly interested in web development as it
            relates to my academics. I&apos;ve been practicing web developing
            for the last six months, and I&apos;m currently enrolled in
            Programming Hero&apos;s complete web development course. I&apos;m
            also taking up other web development skills. For the front end,
            I&apos;ve studied HTML, CSS, Bootstrap, Tailwind, JavaScript, React,
            and React Roter. For the backend, I am proficient in Node.js and
            Express.js. For databases, I frequently use Firebase and Mongodb. I
            am also familiar with utilizing npm, git, GitHub, netlify, 
            and Firebase to deploy my projects.
          </p>
          <br />
          <div className="inline-block ">
            <Link
              to="/education"
              className="group hover:bg-primary bg-gray-200 dark:bg-gray-700 pr-7 duration-300 rounded-full mt-10 flex items-center space-x-2"
            >
              <button className="p-4 bg-primary rounded-full text-xl text-gray-200">
                <FaChevronRight></FaChevronRight>
              </button>
              <button className="dark:text-gray-300 group-hover:text-white font-semibold text-black ">
                My Education
              </button>
            </Link>
          </div>
        </div>

        <div className="">
          <div className="flex justify-center  mb-4 mt-4">
            <ScrollAnimation animateIn="flipInY" duration={0}>
              <img
                src="image1.jpg"
                alt="Image1"
                className="h-40 w-70 object-cover shadow-2xl shadow-slate-500 transition-transform duration-300 transform scale-100 hover:scale-110"
              />
            </ScrollAnimation>
          </div>
          <div className="flex justify-around transform scale-110 gap-6">
            <div>
              <ScrollAnimation animateIn="flipInX" duration={0}>
                <img
                  src="image2.jpg"
                  alt="Image2"
                  className="shadow-2xl shadow-slate-500 h-40 w-70 object-cover transition-transform duration-300 transform scale-100 hover:scale-110"
                />
              </ScrollAnimation>
            </div>
            <div>
              <ScrollAnimation animateIn="flipInX" duration={0}>
                <img
                  src="image3.jpg"
                  alt="Image3"
                  className="shadow-2xl shadow-slate-500 h-40 w-70 object-cover transition-transform duration-300 transform scale-100 hover:scale-110"
                />
              </ScrollAnimation>
            </div>
          </div>
          <div className="flex justify-center mb-4 mt-4">
            <ScrollAnimation animateIn="flipInY" duration={0}>
              <img
                src="image4.jpg"
                alt="Image4"
                className="shadow-2xl shadow-slate-500 h-40 w-70 object-cover transition-transform duration-300 transform scale-100 hover:scale-110"
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
