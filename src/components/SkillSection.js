import React from "react";
import js from "../Images/js.png";
// import Vector from "../Images/vector.png";
import Group from "../Images/Group.png";
import nt from "../Images/nt.png";
import sj from "../Images/sj.png";
import ex from "../Images/ex.png";
import mt from "../Images/mt.png";
import ts from "../Images/ts.jpg";
import la from "../Images/la.png";
import mango from "../Images/mango.png";
import sas from "../Images/sas.png";
import line from "../Images/line.png";
import fig from "../Images/fig.png";
import cy from "../Images/cy.png";
import yes from "../Images/yes.png";
import git from "../Images/git.png";
import he from "../Images/he.png";
import post from "../Images/post.png";

function SkillSection(){
    return(<>
    {/* <h1>i am skill</h1> */}

     <div className="aboutt">
        <button className="mee">Skills</button>
        <br />
        <br />
        <p className="sk">
          The skills, tools and technologies I am really good at:
        </p>
      </div>

      <div className="java">
        <div>
          <img src={js} alt="simple" className="jss" />
          <p className="script">Javascript</p>
        </div>

         <div> 
         <img src={ts} alt="simple" className="jss1"/>  
         {/* <h1 className="ts">TS</h1> */}
        <p className="script1">Typescript</p>

    </div> 
        <div>
          <img src={Group} alt="simple" className="jss2" />
          <p className="script2">React</p>
        </div>

        <div className="nt">
          <img src={nt} alt="simple" className="jss2" />
          <p className="script2">Next.js</p>
        </div>

        <div className="sj">
          <img src={sj} alt="simple" className="jss3" />
          <p className="script3">Node.js</p>
        </div>

        <div>
          <img src={ex} alt="simple" className="jss4" />
          <p className="script4">Express.js</p>
        </div>

        <div>
          <img src={mt} alt="simple" className="jss5" />
          <p className="script5">Nest.js</p>
        </div>

        <div>
          <img src={la} alt="simple" className="jss6" />
          <p className="script6">Socket.io</p>
        </div>

       
      </div>









      
      <div className="java">
        <div>
          <img src={post} alt="simple" className="jss" />
          <p className="script">MongoDB</p>
        </div>

         <div> 
         <img src={mango} alt="simple" className="jss1"/>  
         {/* <h1 className="ts">TS</h1> */}
        <p className="script1">Sass/Scss</p>

    </div> 
        <div>
          <img src={sas} alt="simple" className="jss2" />
          <p className="script2">Tailwindcss</p>
        </div>

        <div>
          <img src={line} alt="simple" className="jss2" />
          <p className="script2">Figma</p>
        </div>

        <div>
          <img src={fig} alt="simple" className="jss3" />
          <p className="script3">Cypress</p>
        </div>

        <div>
          <img src={cy} alt="simple" className="jss4" />
          <p className="script4">Storybook</p>
        </div>

        <div>
          <img src={yes} alt="simple" className="jss5" />
          <p className="script5">Nest.js</p>
        </div>

        <div>
          <img src={he} alt="simple" className="jss6" />
          <p className="script6">Socket.io</p>
        </div>

       
      </div>

      {/* <div className="java">
        <div>
          <img src={post} alt="simple" className="jss" />
          <p className="script">PostgreSQL</p>
        </div>

        <div>
          <img src={mango} alt="simple" className="mangoo" />
          <h1 className="ts">TS</h1>
          <p className="mango1">MongoDB</p>
        </div>

        <div>
          <img src={sas} alt="simple" className="jss2" />
          <p className="sas1">Sass/Scss</p>
        </div>

        <div>
          <img src={line} alt="simple" className="jss3" />
          <p className="line1">Tailwindcss</p>
        </div> 
        
         <div>
          <img src={fig} alt="simple" className="jss4" />
          <p className="script4">Figma</p>
        </div>

         <div>
          <img src={cy} alt="simple" className="jss5" />
          <p className="script5">Cypress</p>
        </div> 

         <div>
          <img src={yes} alt="simple" className="jss6" />
          <h1 className="yes1">s</h1>
          <p className="yes2">Nest.js</p>
        </div> 

        <div>
          <img src={mt} alt="simple" className="jss6" />
          <p className="script6">Nest.js</p>
        </div>
      </div>  */}
    </>);
}
export default SkillSection;