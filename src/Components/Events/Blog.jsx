import React from "react";
import Button from "./Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Blog.scss";

function Blog({ image, title, subTitle, variants, animate }) {
  return (
    <motion.div
      className="blog-container"
      variants={variants}
      animate={animate}
    >
      <div className="image">
        <img src={image} alt="Blog" />
      </div>
      <div className="content">
        <div className="title">
          <h3>{title}</h3>
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
    </motion.div>
  );
}

export default Blog;
