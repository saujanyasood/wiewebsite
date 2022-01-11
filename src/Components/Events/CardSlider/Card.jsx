import React from "react";
import "./CardSlider.css";
import Button from '@mui/material/Button';

export default function Card(props) {
  return (
    <div className="card">
        <img src={props.img} alt="icon" />
      <h3>{props.title}</h3>
      <div className="button-container">
        <Button variant="contained">Learn More</Button>
      </div>
    </div>
  );
}
