import React, { useState } from "react";

import Table from "../../../components/Table";
import { FluidContainer } from "../../../components/CommonComponents";

import Member from "./Member";

const Members = ({ catalog }) => {
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  const handleTableRowClick = (id) => {
    setSelectedMemberId(id);
  };

  const handleMemberViewBackClick = () => {
    setSelectedMemberId(null);
  };

  return selectedMemberId === null ? (
    <FluidContainer>
      <Table
        data={catalog}
        handleRowClick={handleTableRowClick}
        instruction="Click row to view member!"
      />
    </FluidContainer>
  ) : (
    <Member id={selectedMemberId} handleBackClick={handleMemberViewBackClick} />
  );
};

export default Members;
