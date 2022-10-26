import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";



function Hi() {
  return  <div>
  <i>
    {" "}
    <center>
      {" "}
      <h1 className="Name">CV_RESUME</h1>
      <h2 className="Name">SYED IBTIHAJ ALI</h2>
    </center>{" "}
    <center><h2 className="buddy">ADDRESS</h2>
    <p className="ok">
      Gulistan-e-Johar <br />
      Karachi <br />
      +923208876144 <br />
      ibtihaj.ali51@gmail.com <br />
    </p></center>
  </i>
  <center><h3 className="buddy">SKILLS</h3>
  <p className="ok"> Creative Thinking/Decision Making/Problem Solving/Team Work/Good Learning/Computer Typing/Gaining Knowledge/Ms Office
  </p></center>
  <center><h3 className="buddy">CAREER OBJECTIVE</h3>
  <p className="ok">
    
    My goal is to become associated with a company where I can utilize my
    skills and gain furthere experience while enhancing the company's
    productivity and reputation. Work and learn that contribute best for the
    growth of the organization by continue developing and sharing my skill
    ability.
    
  </p></center>
  <center> <h3 className="buddy">Experience</h3>
  <p className="ok">
    3 Months of Experience in International Call Center(If Logics) in Duct
    Cleaning Campaign.{" "}
  </p></center>
  <center><h3 className="buddy">PERSONAL INFORMATION</h3>
  <p className="ok">
    Date of Birth: 28-November-2003 <br />
    NATIONALITY: PAKISTANI <br />
    MARTIAL STATUS: UNMARRIED <br />
    Religion: Islam <br />
    Gender: Male
  </p></center>
  <br />
  <center><h3 className="buddy">Education</h3>
  <p className="ok">
    MATRICULATION, BSEK,Iqbal Public School <br />
    Computer 2020
    <br />
    Intermediate , SRE-MAJEED College <br />
    Pre-engineering 2022 <br />
  </p></center>
</div>
;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));