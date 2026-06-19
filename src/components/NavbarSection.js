import React from "react";
import { useState } from "react";
import d1 from "../Images/d1.png";
// import Work from "./Work.js";

function NavbarSection() {
  const [page, setPage] = useState("home");
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2>MP</h2>
          {/* <h2> <SS /></h2>  */}
        </div>

        <ul className="nav-links">
          <li>
            <a href="#" onClick={() => setPage("home")}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPage("work")}>
              Work
            </a>
          </li>
          {/* <li><a href='#' onClick={()=>setPage("home")}>Home</a></li> */}
          <li>
            <a href="#">Testimonials</a>
          </li>
          {/* <li><a href='#' onClick={()=>setPage("home")}>Home</a></li> */}
          <li>
            <a href="#">Contact</a>
          </li>
          {/* <li><a href='#' onClick={()=>setPage("home")}>Home</a></li> */}
          {/* <li><a href='#'>About</a></li> */}
        </ul>
        <img src={d1} alt="simple" className="dh1" />

        <button className="btn">Download cv</button>
        <button class="menu-icon">☰</button>
      </nav>

      {/* {page === "home" && <HeroSection />} */}
      {/* {page === "home" && <AboutMeSection />}  */}
      {/* {page==="work" && <Work/>} */}
    </>
  );
}
export default NavbarSection;
