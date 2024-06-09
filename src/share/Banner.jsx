/* eslint-disable react/no-unescaped-entities */
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <div
      className=" img flex items-center justify-center bg-cover bg-center min-h-screen p-6 shadow-lg"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?t=st=1717790557~exp=1717794157~hmac=95862f2b2a2a22a87e994f876f27fa206bbcaf73498ad8cc3605785c7007d664&w=1380')",
      }}
    >
      <div className="bg-black bg-opacity-80 p-8 rounded-lg text-center shadow-2xl  text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          It's <span className="text-blue-400">Debabrata</span>
        </h1>
        <div className="text-2xl md:text-4xl mb-6">
          <Typewriter
            options={{
              strings: [
                "I'm a Web Developer",
                "MERN & Full-Stack Developer",
                "Front-End Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="max-w-xl mx-auto font-bold mb-6">
          I'm a passionate developer skilled in building modern web
          applications.
        </p>
        <div className="flex justify-center mt-5">
          <a
            href="https://www.facebook.com/DebabrataDas101/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className="min-w-[3rem] min-h-[3rem] text-blue-400 hover:text-blue-600 mb-4 mr-10"></FaFacebookSquare>
          </a>
          <a
            href="https://github.com/debabrata101"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="min-w-[3rem] min-h-[3rem] text-blue-400 hover:text-blue-600 mb-4 mr-10"></BsGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/debabrata-das-75a649229/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="min-w-[3rem] min-h-[3rem] text-blue-400 hover:text-blue-600 mb-4"></BsLinkedin>
          </a>
        </div>
        <a
          href="/path/to/your/resume.pdf"
          download
          className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Banner;
