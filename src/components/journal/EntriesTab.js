import React from "react";

const EntriesTab = (props) => {
  const { entries, addEntry, setEntryIndex } = props;
  return (
    <div>
      {entries.map((e, idx) => (
        <p onClick={() => setEntryIndex(idx)} key={idx}>
          entry #{idx}
        </p>
      ))}
      <button
        onClick={() => {
          addEntry({
            created: "today",
            update: "yesterday",
            content: "stuff",
          });
        }}
      >
        Add Entry
      </button>
    </div>
  );
};

export default EntriesTab;
