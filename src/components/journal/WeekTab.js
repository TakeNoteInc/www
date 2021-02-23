import React from "react";

// Button classes
const inactiveBtn = "weeks-nav-btn";
const activeBtn = "weeks-nav-btn active";

const WeekTab = (props) => {
  const { weeks, setWeekIndex, weekIndex } = props;

  return (
    <div className="weeks-navbar">
      {weeks.map((w, idx) => {
        // Determine if button is active
        let btnClass = weekIndex === idx ? activeBtn : inactiveBtn;
        return (
          <div className="row" key={idx}>
            <div className={btnClass} onClick={() => setWeekIndex(idx)}>
              <p>Week {idx + 1}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeekTab;
