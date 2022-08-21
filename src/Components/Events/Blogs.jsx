import React from "react";
import Blog from "./Blog";
import Title from "./Title";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import BlogImage1 from "./eventsImages/basicprogramming.jpeg";
import BlogImage8 from "./eventsImages/circuits.jpeg";
import BlogImage2 from "./eventsImages/dsa.jpeg";
import BlogImage5 from "./eventsImages/flutter.jpeg";
import BlogImage10 from "./eventsImages/webd.jpeg";
import BlogImage11 from "./eventsImages/WebDevelopment.jpeg";
import BlogImage12 from "./eventsImages/WIExperience.jpeg";
import BlogImage13 from "./eventsImages/WomenInTech.jpeg";
import BlogImage14 from "./eventsImages/iTrack.jpeg";
import BlogImage3 from "./eventsImages/iot.jpeg";
import BlogImage6 from "./eventsImages/ml.jpeg";
import BlogImage9 from "./eventsImages/robotics.jpeg";
import BlogImage4 from "./eventsImages/webd.jpeg";
import "./Blogs.scss";
import { textAnimation, cardAnimation } from "./Animations";

function Blogs() {
  const [element, controls] = useScroll();

  return (
    <div className="blogs-container" id="events" ref={element}>
      <div className="container">
          <Title title="Events" color="pink" lineCenter={true} />
        <div className="blogs">
          <Blog
            image={BlogImage1}
            content="Basic Programming"
            subTitle="A low-level programming language is a programming language that provides little or no abstraction from a computer's instruction set architecture—commands or functions in the language map that are structurally similar to processor's instructions. Generally, this refers to either machine code or assembly language."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage2}
            content="Data Structures and Algorithms"
            subTitle="Data structures are used to hold data while algorithms are used to solve the problem using that data. Data structures and algorithms (DSA) goes through solutions to standard problems in detail and gives you an insight into how efficient it is to use each one of them."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage3}
            content="Internet of Things"
            subTitle="The Internet of Things (IoT) refers to a system of interrelated, internet-connected objects that are able to collect and transfer data over a wireless network without human intervention."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage4}
            content="Web Development"
            subTitle="Web development refers to building, creating, and maintaining websites."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage5}
            content="Flutter"
            subTitle="Flutter is a free and open-source mobile UI framework created by Google. It allows you to create a native mobile application with only one codebase."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage6}
            content="Machine Learning"
            subTitle="Machine learning is the study of computer algorithms that can improve automatically through experience and by the use of data. It is seen as a part of artificial intelligence."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage8}
            content="Circuit Design"
            subTitle="Circuit design is the process of working out the physical form that an electronic circuit will take, the result of the circuit design process is the instructions on how to construct the physical electronic circuit."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage9}
            content="Robotics"
            subTitle="Robotics is an interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage11}
            content="Graphic Design"
            subTitle="Graphic design is the craft of planning and creating visual content to communicate ideas and messages."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage12}
            content="Graphic Design"
            subTitle="Graphic design is the craft of planning and creating visual content to communicate ideas and messages."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage13}
            content="Graphic Design"
            subTitle="Graphic design is the craft of planning and creating visual content to communicate ideas and messages."
            variants={cardAnimation}
            animate={controls}
          />
          <Blog
            image={BlogImage14}
            content="Graphic Design"
            subTitle="Graphic design is the craft of planning and creating visual content to communicate ideas and messages."
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
