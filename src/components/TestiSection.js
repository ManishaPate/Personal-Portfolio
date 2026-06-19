import React from "react";
import con from "../Images/con.png";

function TestiSection(){
    return(<>

<div className="main">
    <div>
<button className="test">Testimonials</button>
<p className="nice">Nice things people have said about me:</p>
</div>





<div className="tsti">
    <div className="tsti1"> 
        <img src={con} alt="simple" className="con" /><br/><br/>
    <p className="job">“Job well done! I am really impressed. He is very very good 
        at what he does:) I would recommend Manisha
        and will rehire in the future for Frontend development.”</p>
        <br/>
        <h3 className="john"><b>John Doe</b></h3>
        {/* <br/> */}
        <p className="xyz">Founder - xyz.com</p>
    </div>

 <div className="tsti1"> 
        <img src={con} alt="simple" className="con" /><br/><br/>
    <p className="job">“Great guy, highly recommended for any 
        COMPLEX front-end development job! His skills are top-notch and he will
         be an amazing addition to any team.”</p>
        <br/>
        <h3 className="john"><b>John Doe</b></h3>
        {/* <br/> */}
        <p className="xyz">Founder - abc.com</p>
    </div>


 <div className="tsti1"> 
        <img src={con} alt="simple" className="con" /><br/><br/>
    <p className="job">“Manisha was extremely easy and pleasant to 
        work with and he truly cares about the project being a success. 
        Manisha has a high level of knowledge and was able to work on 
         MERN stack application without any issues.”</p>
        <br/>
        <h3 className="john"><b>John Doe</b></h3>
        {/* <br/> */}
        <p className="xyz">Freelancer</p>
    </div>
</div>
</div>

    {/* <h1>i am testi</h1> */}
    </>);
}
export default TestiSection;