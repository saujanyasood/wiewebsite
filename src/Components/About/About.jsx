import React from "react";


import woman1 from "./woman1.png";
import woman2 from "./woman2.png";
import "./About.css";
function About() {
  return (
    <div class="container-fluid" id="about">
      <div className="row">
      <div className="woman-img col-lg-6"> <img
              src={woman1}
              alt="woman1"
              class="woman-img"
              
            />
         </div>
      <div className="col-lg-6"> <h3 class="mt-3">WIE IEEE DTU</h3>
            <h1>About Us</h1>
            <div class="about-rule"></div>
            <p>
              IEEE Women in Engineering (WIE) is a global network of IEEE
              members and volunteers dedicated to promoting women engineers and
              scientists, and inspiring girls around the world to follow their
              academic interests in a career in engineering and science.
            </p>
          </div>


</div>
<div className="row"><div className="col-lg-6"> <h3 class="mt-3">IEEE WIE Strives to</h3>
            <p>
              Provide assistance with the formation of new IEEE WIE Affinity
              Groups and support ongoing activities. Recognize the outstanding
              achievements of women in electrical and electronics engineering
              through IEEE Awards nominations. Organize workshops at major
              technical conferences to enhance networking and to promote
              membership in IEEE WIE. 
            </p></div><div className="col-lg-6">   <img
              src={woman2}
              alt="woman1"
              class="woman-img2"
              
            /></div></div>
      </div>
  
  );
}

export default About;