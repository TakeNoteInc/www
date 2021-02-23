import React from "react";

import HomeDashBoard from "../components/HomeDashBoard";

import "../styles/homepage.css";

const HomePage = (props) => {
  return (
    <div className="page-container home-page">
      <HomeDashBoard {...props} />
    </div>
  );
};

export default HomePage;
