import Banner from "../share/Banner";
import About from "./About";
import Contact from "./Contuct";
import Project from "./Project";
import Skils from "./Skils";


const Home = () => {
  return (
   <div>
    <Banner/>
    <About/>
    <Skils/>
    <Project/>
    <Contact/>
   </div>
  );
};

export default Home;
