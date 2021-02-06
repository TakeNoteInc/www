import React from "react";

/*
import { Button } from "@material-ui/core";
function TimelineElement(props) {
  return (
    <div
      className={
        props.number == props.chosen
          ? "TimelineElement Chosen"
          : "TimelineElement"
      }
    >
      <Button fullWidth variant="outlined" color="inherit">
        Week {props.number}
      </Button>
    </div>
  );
}
*/

const WeekTab = (props) => {
  const { weeks, setWeekIndex } = props;
  return (
    <div>
      {weeks.map((w, idx) => (
        <p key={idx} onClick={() => setWeekIndex(idx)}>
          week #{idx}
        </p>
      ))}
    </div>
  );
};

export default WeekTab;
