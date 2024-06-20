import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import bootstrap from "../assets/bootstrap.jpg";
import tailwind from "../assets/tailwind.jpg";
import react from "../assets/react.jpg";
import git from "../assets/git.jpg";
import netlify from "../assets/netlify.jpg";
import express from "../assets/express.jpg";
import nodejs from "../assets/nodejs.jpg";
import mongodb from "../assets/mongodb.jpg";
import firebase from "../assets/firebase.jpg";
import js from "../assets/js.jpg";
import image from "../assets/image6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const skillsData = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Tailwind", icon: tailwind },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "MongoDB", icon: mongodb },
  { name: "Node.js", icon: nodejs },
  { name: "Express.js", icon: express },
  { name: "Firebase", icon: firebase },
  { name: "Git", icon: git },
  { name: "Netlify", icon: netlify },
];

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h2 className="text-5xl text-center mt-8 font-bold">
          MY <span className="text-primary">SKILLS</span>
        </h2>
        <hr className=" border border-spacing-5 h-2 w-96 mt-4 bg-blue-500 mx-auto" ></hr>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-10 text-black">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            data-aos="flip-right"
            className="relative flex flex-col items-center justify-center rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
              width: "300px",
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="object-cover rounded-md shadow-2xl"
              style={{
                height: "128px",
                width: "128px",
                boxShadow: "0px 4px 10px rgb(96, 235, 230)",
              }}
            />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-black bg-opacity-30 p-4 text-center text-white backdrop-blur">
              <h2 className="md:text-2xl font-bold">{skill.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
