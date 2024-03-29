import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import { data } from "./TimelineData";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="heading">
        <h1>Timeline</h1>
      </div>
      <VerticalTimeline>
        {data.map((game) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#C996CC" }}
              contentArrowStyle={{ borderRight: "7px solid black)" }}
              date={game.date}
              dateClassName="dateStyle"
              iconStyle={{
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <img
                  src={game.img}
                  style={{
                    textAlign: "center",
                  }}
                  alt="icon"
                />
              }
            >
              <h2
                className="vertical-timeline-element-title"
                style={{ marginBottom: "8px" }}
              >
                {game.heading}
              </h2>
              <h4 className="vertical-timeline-element-subtitle">
                {game.description}
              </h4>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
