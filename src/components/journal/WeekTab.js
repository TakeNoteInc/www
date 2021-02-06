import React from "react";
import TimelineElement from "./TimelineElement.js";

const WeekTab = (props) => {
  const { weeks, setWeekIndex, activeWeek} = props;
  return (
    <div className = "Timeline">
      {weeks.map((w, idx) => (
        <ul> 
          <li onClick={() => setWeekIndex(idx)} key={idx}>
            <TimelineElement number = {idx} chosen = {activeWeek}/> 
          </li>
        </ul>
      ))}
    </div>
  );
};

export default WeekTab;
