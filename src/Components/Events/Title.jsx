import React from "react";
import "./Title.scss";

function Title({ title, color, lineCenter = false }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className={`${color} `}>
        <span></span>
      </div>
    </div>
  );
}

export default Title;
