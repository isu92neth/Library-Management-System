import React from "react";

import Tabs from "../components/Tabs";

const Dashboard = () => {
  const contents = [
    { title: "Books", elements: <h1>Contents of Books!</h1> },
    { title: "Members", elements: <h1>Contents of Members!</h1> },
  ];

  return <Tabs contents={contents} />;
};

export default Dashboard;
