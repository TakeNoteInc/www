import React from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const EntriesTab = (props) => {
  const { entries, setEntryIndex, addEntry } = props;
  //console.log(entries);
  if (entries == null) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  // transform entries map into array of components
  const entryComponents = Object.keys(entries).map((k, index) => {
    return (
      <div key={index} onClick={() => setEntryIndex(index)}>
        <p>Entry #{index}</p>
      </div>
    );
  });

  return (
    <div>
      {entryComponents}
      <button
        onClick={() => {
          console.log("+ Add Entry");
          addEntry();
        }}
      >
        Add Entry
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userData.user,
});

export default connect(mapStateToProps)(EntriesTab);
