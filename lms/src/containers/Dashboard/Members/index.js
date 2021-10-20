import React from "react";

import Table from "../../../components/Table";
import { FluidContainer } from "../../../components/CommonComponents";

const Members = ({ catalog }) => {
  const upCatalog = [
    ...catalog,
    {
      id: "4",
      nic: "955685553V",
      firstName: "Kau",
      lastName: "Maheeka",
      contactNumber: "077-2335648",
      address: "No. 33/87, 2nd Lane, Manikhinne, Kandy",
    },
  ];
  return (
    <FluidContainer>
      <Table data={upCatalog} />
    </FluidContainer>
  );
};

export default Members;
