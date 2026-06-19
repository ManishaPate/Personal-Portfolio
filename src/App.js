// import logo from './logo.svg';
import "./App.css";
import react from "react";
// import { Home } from '@mui/icons-material';
// import AboutMeSection from ".components/AboutMeSection";
import HeroSection from "./components/HeroSection";
import sagar1 from "./Images/sagar1.jpg";
import loc from "./Images/loc.png";
import AboutMeSection from "./components/AboutMeSection";
import NavbarSection from "./components/NavbarSection";
import SkillSection from "./components/SkillSection";
import ExSection from "./components/ExSection";
import WorkSection from "./components/WorkSection";
import TestiSection from "./components/TestiSection";
import FooterSection from "./components/FooterSection";


function App() {
  // const [page, setPage] = useState("home");
  return (
    <>
      {/* <nav className="navbar">
        {/* <div className="logo"> */}
          {/* <h2>SS/</h2> */}
          {/* <h2> <SS /></h2>  */}
        {/* </div> */}

        {/* <ul className="nav-links">
          <li>
            <a href="#" onClick={() => setPage("home")}>
              About
            </a>
          </li> */}
          {/* <li>
            <a href="#" onClick={() => setPage("home")}>
              Work
            </a>
          </li>  */}
          {/* <li><a href='#' onClick={()=>setPage("home")}>Home</a></li> */}
          {/* <li>
            <a href="#">Testimonials</a>
          </li> */}
          {/* <li><a href='#' onClick={()=>setPage("home")}>Home</a></li> */}
          {/* <li>
            <a href="#">Contact</a>
          </li> */}
          {/* <li><a href='#' onClick={()=>setPage("home")}>Home</a></li> */}
          {/* <li><a href='#'>About</a></li> */}
        {/* </ul>
        <img src={loc} alt="simple" className="dh1" /> */}
{/* 
        <button className="btn">Download cv</button>
        <button class="menu-icon">☰</button>
      </nav> */}
      {/* {page === "home" && <HeroSection />}
      {page === "home" && <AboutMeSection />} */}


      <NavbarSection/>
      <HeroSection />

      <AboutMeSection />
      <SkillSection/>
      <ExSection/>
      <WorkSection/>
      <TestiSection/>
      <FooterSection/>
      

    </>
  );
}

export default App;
