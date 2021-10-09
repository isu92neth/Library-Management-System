import React from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

const Books = ({ catalog }) => {
  const upCatalog = [
    ...catalog,
    {
      author: "isuru",
      burrowedDate: "",
      burrowedMemeberID: "",
      id: "3",
      isAvailable: true,
      title: "react",
    },
  ];

  const handleTableRowClick = (id) => {
    console.log(id);
  };
  return (
    <FluidContainer>
      <Table
        data={upCatalog}
        handleRowClick={handleTableRowClick}
        instruction="Click row to view book!"
      />
    </FluidContainer>
  );
};

export default Books;
