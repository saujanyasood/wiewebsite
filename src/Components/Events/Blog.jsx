import React from "react";
import Button from "./Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Blog.scss";

function Blog({ image, content, subTitle, variants, animate }) {
  return (
    <div
      className="blog-container"
      // variants={variants}
      // animate={animate}
    >
      <div className="image">
        <img src={image} alt="Blog" />
      </div>
      <div className="content">
        <div className="title">
          <h3>{content}</h3>
        </div>
        <div className="subTitle">
          <p>{subTitle}</p>
        </div>
        <a
          href="https://bit.ly/ieee-techweek22"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            content="Register"
            color="inverse"
            icon={<HiOutlineArrowNarrowRight />}
          />
        </a>
      </div>
    </div>
  );
}

export default Blog;
