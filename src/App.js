// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
// import { Home } from '@mui/icons-material';
import About from "./About";
// import Work from "./Work";
import sagar1 from "./Images/sagar1.jpg";
import loc from "./Images/loc.png";

function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2>SS/</h2>
          {/* <h2> <SS /></h2>  */}
        </div>

        <ul className="nav-links">
          <li>
            <a href="#" onClick={() => setPage("home")}>
              About
            </a>
          </li>
          <li>
            <a href="#"> Work</a>
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
        <img src={loc} alt="simple" className="dh1" />

        <button className="btn">Download cv</button>
        <button class="menu-icon">☰</button>
      </nav>
      {page === "home" && <About />}
      {/* {page === "about" && <work/>} */}
    </>
  );
}

export default App;
