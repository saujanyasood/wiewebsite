import React from "react";
import "./About.css";
import woman from "./woman.png";
import "./blobz.css"

function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <img className="woman" src={woman} alt="woman" />
        <div class="tk-blob">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                <path d="M539.8 137.6c98.3 70 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.9 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
            </svg>
        </div>
      </div>
      <div className="right">
        <div className="textContainer">
          <h1>About us</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse rhoncus efficitur lacus, vitae malesuada erat pellentesque nec. 
          Etiam tempor tempor neque, et finibus justo sodales id. 
          Phasellus eu finibus massa, eu ultricies elit. 
          Donec a sodales mi, ut scelerisque neque. 
          Fusce ornare felis at dignissim efficitur. 
          Curabitur tempus ligula augue. Donec non egestas turpis. 
          Proin ut pharetra dolor. Proin sit amet arcu fringilla, condimentum arcu ut, 
          interdum ante. Integer vitae.
          </p>
        </div>
      </div>
      Timeline
    </div>
  );
}

export default About;
