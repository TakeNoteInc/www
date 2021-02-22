import React from "react";

const WeekTab = (props) => {
  const { weeks, setWeekIndex } = props;
  return (
    <div>
      {weeks.map((w, idx) => (
        <div key={idx}>
          <button onClick={() => setWeekIndex(idx)}>week #{idx}</button>
        </div>
      ))}
    </div>
  );
};

export default WeekTab;
