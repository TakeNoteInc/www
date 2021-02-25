import React, { useState } from "react";
import { connect } from "react-redux";

const Search = (props) => {
  const [state, setState] = useState({ search: "", results: [] });
  const onChange = (e) => {
    setState({ search: e.target.value });
  };

  /*
   <div className="search-results">
        {state.results.length > 0
          ? state.results.map((r, idx) => {
              return (
                <div className="search-item" key={idx}>
                  <p>{r}</p>
                </div>
              );
            })
          : null}
      </div>
  */

  return (
    <div className="search-container">
      <div className="row search">
        <input
          onChange={onChange}
          value={state.search}
          placeholder="search entries"
        />
        <div className="standard-btn">Go</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let entries = [];
  for (var i = 0; i < state.weeksData.weeks.length; i++) {
    entries.push(state.weeksData.weeks[i].entries);
  }
  return { entries };
};

export default connect(mapStateToProps)(Search);
