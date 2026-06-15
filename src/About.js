import React from "react";
import ReactDom from "react-dom/client";
import sagar1 from "./Images/sagar1.jpg";
import git from "./Images/git.png";
import loc from "./Images/loc.png";
import fly from "./Images/fly.png";
import fgma from "./Images/fgma.png";
import Pic from "./Images/Pic.png";
import js from "./Images/js.png";
// import Vector from "./Images/Vector.png";
import Group from "./Images/Group.png";
import nt from "./Images/nt.png";
// import icon-nodejs from "./Images/icon-nodejs.png";
import sj from "./Images/sj.png";
import ex from "./Images/ex.png";
import mt from "./Images/mt.png";
import post from "./Images/post.png";
import mango from "./Images/mango.png";
import sas from "./Images/sas.png";
import line from "./Images/line.png";
import fig from "./Images/fig.png";
import cy from "./Images/cy.png";
import yes from "./Images/yes.png";
function About(){
    return(<>
    {/* <h1>i am about</h1> */}
    
   <div className="container">
    <div className="left">
<h1 className="hi">Hi, I’m Sagar 👋</h1>
<br/>
<p>I'm a full stack developer (React.js & Node.js) with a 
    focus on creating (and occasionally designing) exceptional digital 
    experiences that are fast, accessible, visually appealing, and responsive.
    Even though I have been creating web applications for over 7 years, I still 
    love it as if it was something new.

</p>
<br/>
<br/>
 <img src={loc} alt="simple" className="simple4"/> 
<br/>
<h4 className="loca">Ahmedabad, India</h4>
<br/>
<h4 className="loca1">Available for new projects</h4>
<br/>
<br/>


<div className="first">
 <img src={git} alt="simple" className="simple2"/>
  <img src={fly} alt="simple" className="simple5"/>
   <img src={fgma} alt="simple" className="simple6"/>
</div>


    </div>
<div className="right">
 <img src={sagar1} alt="simple" className="simple3"/> 
</div>

   </div>

<div className="about">
    <button className="me">About me</button>
</div>


<div className="cursor">
    <div className="cursorleft">
<img src={Pic} alt="simple" className="curleft"/>
    </div>
    <div className="cursorright">
        <h2>Curious about me? Here you have it:</h2>
        <br/><br/>
        <p>I'm a passionate, self-proclaimed designer who
             specializes in full stack development (React.js & Node.js). 
             I am very enthusiastic about bringing the technical and visual 
             aspects of digital products to life. User experience, pixel perfect design,
              and writing clear, readable, 
            highly performant code matters to me.<br/><br/>

            I began my journey as a web developer in 2015,
             and since then, I've continued to grow and evolve as a 
             developer, taking on new challenges and learning the latest 
             technologies along the way. Now, in my early thirties, 7 years 
             after starting my web development journey, I'm building cutting-
             edge web applications using modern technologies such as Next.js, 
             TypeScript, Nestjs
            , Tailwindcss, Supabase and much more.<br/>
<br/>
            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
            <br/><br/>
            When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.

            <br/><br/>
            Finally, some quick bits about me.
            <br/><br/>

        </p>


       <ul>
        <li>B.E. in Computer Engineering</li><br/>
<li>
    Full time freelancer
</li>
<li className="avid">Avid learner</li>
<br/>

<li className="asp">Aspiring indie hacker</li>
       </ul>


<br/>
<p>One last thing, I'm available for freelance work, 
    so feel free to reach out and say hello! I promise I don't bite 😉</p>
        
    </div>
</div>

<div className="aboutt">
    <button className="mee">Skills</button><br/><br/>
    <p className="sk">The skills, tools and technologies I am really good at:</p>
</div>


<div className="java">
    <div>
        <img src={js} alt="simple" className="jss"/>
        <p className="script">Javascript</p>

    </div>


    {/* <div> */}
        {/* <img src={Vector} alt="simple" className="jss1"/>  */}
        {/* <h1 className="ts">TS</h1>
        <p className="script1">Typescript</p>

    </div> */}
    <div>
        <img src={Group} alt="simple" className="jss2"/>
        <p className="script2">React</p>

    </div>


    <div>
        <img src={Group} alt="simple" className="jss2"/>
        <p className="script2">React</p>

    </div>


    <div>
        <img src={nt} alt="simple" className="jss3"/>
        <p className="script3">Next.js</p>

    </div>

    <div>
        <img src={sj} alt="simple" className="jss4"/>
        <p className="script4">Node.js</p>

    </div>

     <div>
        <img src={ex} alt="simple" className="jss5"/>
        <p className="script5">Express.js</p>

    </div> 

      <div>
        <img src={mt} alt="simple" className="jss6"/>
        <p className="script6">Nest.js</p>

    </div>

     <div>
        <img src={mt} alt="simple" className="jss6"/>
        <p className="script6">Nest.js</p>

    </div>
</div>




<div className="java">
    <div>
        <img src={post} alt="simple" className="jss"/>
        <p className="script">PostgreSQL</p>

    </div> 


     <div>
        <img src={mango} alt="simple" className="mangoo"/>
         <h1 className="ts">TS</h1> 
         <p className="mango1">MongoDB</p>

    </div> 
    


    <div>
        <img src={sas} alt="simple" className="jss2"/>
        <p className="sas1">Sass/Scss</p>

    </div> 


    <div>
        <img src={line} alt="simple" className="jss3"/>
        <p className="line1">Tailwindcss</p>

    </div>

    <div>
        <img src={fig} alt="simple" className="jss4"/>
        <p className="script4">Figma</p>

    </div> 

     <div>
        <img src={cy} alt="simple" className="jss5"/>
        <p className="script5">Cypress</p>

    </div>

     <div>
        <img src={yes} alt="simple" className="jss6"/>
        <h1 className="yes1">s</h1>
        <p className="yes2">Nest.js</p>

    </div>

      <div>
        <img src={mt} alt="simple" className="jss6"/>
        <p className="script6">Nest.js</p>

    </div>
</div> 

    </>);
}
export default About;    
