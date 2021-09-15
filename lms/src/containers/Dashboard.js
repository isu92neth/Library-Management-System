import React, { useState } from "react";

import { Content, Tab, TabContent, Tabs } from "../components/Tabs";

const Dashboard = () => {
  const [active, setActive] = useState(0);

  const handleClick = (event) => {
    const index = parseInt(event.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <Tabs>
      <Tab id={0} onClick={handleClick} active={active === 0}>
        Content 1
      </Tab>
      <Tab id={1} onClick={handleClick} active={active === 1}>
        Content 2
      </Tab>
      <TabContent>
        <Content active={active === 0}>
          <h1>Content 1</h1>
        </Content>
        <Content active={active === 1}>
          <h1>Content 2</h1>
        </Content>
      </TabContent>
    </Tabs>
  );
};

export default Dashboard;
