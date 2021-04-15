import React from "react";

import "./styles/layout.css";

const Layout = (props) => {
  const { middle, left, right } = props;
  return (
    <div className="layout">
      <div className="left">{left}</div>
      <div className="middle">{middle}</div>
      <div className="right">{right}</div>
    </div>
  );
};

export default Layout;
