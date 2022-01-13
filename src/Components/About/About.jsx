import React from "react";
import women from "./woman.png";
import w1 from "./w1.png";
import w2 from "./w2.png";
import women2 from "./wonen2.png";
import "./About.css";
function About() {
  return (
    <div id="about">
      <div class="container">
        <div class="row">
          <div class="col">
            <img
              src={women}
              class="mt-3"
              style={{ height: "350px", width: "auto" }}
            />
          </div>
          <div class="col">
            <h5 class="mt-3">WIE IEEE DTU</h5>
            <h1>About Us</h1>
            <p>
              IEEE Women in Engineering (WIE) is a global network of IEEE
              members and volunteers dedicated to promoting women engineers and
              scientists, and inspiring girls around the world to follow their
              academic interests in a career in engineering and science.
            </p>

            <div className="row">
              <div className="col text-center">
                <img src={w1} style={{ height: "50px", width: "50px" }} />
                <br /> <h5>Pledge</h5>
                <p>
                  Work towards gender-diversified panels at all IEEE meetings,
                  conferences, and events
                </p>
              </div>
              <div className="col text-center">
                {" "}
                <img src={w2} style={{ height: "50px", width: "50px" }} />
                <br />
                <h5>Mission & Vision</h5>{" "}
                <p>
                  Facilitate the recruitment and retention of women in technical
                  disciplines globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <h5 class="mt-3">IEEE WIE Strives to</h5>
            <p>
              Provide assistance with the formation of new IEEE WIE Affinity
              Groups and support ongoing activities. Recognize the outstanding
              achievements of women in electrical and electronics engineering
              through IEEE Awards nominations. Organize workshops at major
              technical conferences to enhance networking and to promote
              membership in IEEE WIE. Advocate women in leadership roles in IEEE
              governance and career advancement for women in the profession.
            </p>
          </div>
          <div class="col">
            <img
              src={women2}
              class="mt-5"
              style={{ height: "200px", width: "600px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
