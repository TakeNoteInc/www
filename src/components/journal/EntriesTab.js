import React from "react";

const EntriesTab = (props) => {
  const { entries, setEntryIndex } = props;
  return (
    <div>
      {entries.map((e, idx) => (
        <p onClick={() => setEntryIndex(idx)} key={idx}>
          entry #{idx}
        </p>
      ))}
    </div>
  );
};

export default EntriesTab;
