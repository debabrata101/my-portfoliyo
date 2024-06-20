import { useLocation } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import profileImage from "../assets/debu.png";
import Image from "../assets/image7.jpg";
import Image_home from "../assets/contact.png";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from "react-hot-toast";

const Contuct = () => {
  const location = useLocation();
  const isHomePath = location.pathname === "/";

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

   await emailjs
      .sendForm("service_u5hyeaf", "template_qauhecv", form.current, {
        publicKey: "z__8XyNY7x6JnB7Pk",
      })
      .then(
        () => {
            toast.success('Send Mail Successful!')
            form.reset();
        },
        (error) => {
            toast.error("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div>
        <h2 className="text-5xl text-center   mt-8 font-bold ">
          CONTACT <span className="text-primary">WITH ME</span>
        </h2>
        <hr className=" border border-spacing-5 h-2 w-96 mt-4 bg-blue-500 mx-auto" ></hr>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center p-6 space-y-6 md:space-y-0 md:space-x-6">
        {isHomePath ? (
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              src={Image_home}
              alt="Descriptive Alt Text"
              className="w-full h-auto object-cover"
            />
          </div>
        ) : (
          <div
            className="bg-cover  bg-center rounded-lg shadow-2xl p-6 text-white flex flex-col items-center"
            style={{
              backgroundImage: `url(${Image})`,
              boxShadow: "0px 4px 10px rgb(96, 235, 230)",
            }}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4"
              style={{
                boxShadow: "0px 4px 30px rgb(96, 235, 230)",
              }}
            />
            <div className=" bg-black bg-opacity-40 p-4   justify-items-center text-center">
              <h2 className="text-2xl font-bold mb-2">Debabrata Das</h2>
              <p className="flex items-center mb-1">
                <FaEnvelope className="mr-2" /> debabratacmt@gmail.com
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2" /> 01883139929
              </p>
            </div>
          </div>
        )}
        <div className="w-full h-1/2 md:w-1/2 bg-indigo-400 rounded-lg  shadow-lg p-6 ">
          <form ref={form} onSubmit={sendEmail}
            className="space-y-4"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="user_name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="user_email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contuct;
