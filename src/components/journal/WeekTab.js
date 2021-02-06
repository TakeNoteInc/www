import React from "react";

const WeekTab = (props) => {
  const { weeks, setWeekIndex } = props;
  return (
    <div>
      {weeks.map((w, idx) => (
        <p onClick={() => setWeekIndex(idx)} key={idx}>
          week #{idx}
        </p>
      ))}
    </div>
  );
};

export default WeekTab;
