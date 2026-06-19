import React from "react";
import git from "../Images/git.png";
import fly from "../Images/fly.png";
import fgma from "../Images/fgma.png";
// import email fron "../Images/email.png";

function FooterSection(){
    return(<>

    <button className="get">Get in touch</button>

    <p className="what">What’s next? Feel free to reach out to me if you're looking for a 
        developer, have a query, or simply want to connect.</p>

        <h1 className="reach">Patemanisha1020@gmail.com</h1>
        <h1 className="nine">+91 8767910812</h1>
        <p className="you"> You may also find me on these platforms!</p>


         <div className="fir">
            <img src={git} alt="simple" className="simple2" />
            <img src={fly} alt="simple" className="simple5" />
            <img src={fgma} alt="simple" className="simple6" />
          </div>
    {/* <h1>i am footer</h1> */}
    </>);
}
export default FooterSection;