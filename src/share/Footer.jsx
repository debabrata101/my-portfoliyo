import {  AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import image3 from '../assets/LOGO.png';

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
        <img
          src={image3}
          alt="Footer Background"
          className="w-8 h-8 rounded-full"
        />
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.linkedin.com/in/debabrata-das-75a649229/">
          <AiFillLinkedin className="text-blue-500 hover:text-blue-600" size={25} />
        </a>
        <a href="https://www.facebook.com/DebabrataDas101/">
          <AiFillFacebook className="text-blue-500 hover:text-blue-600" size={25} />
        </a>
        <a href="#">
          <AiFillInstagram className="text-rose-500 hover:text-rose-600" size={25} />
        </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
