import React from "react";

import Layout from "../lib/Layout";
import TextEditor from "../components/TextEditor";

const HomePage = () => {
  return (
    <div>
      <Layout middle={<TextEditor />} />
    </div>
  );
};

export default HomePage;
