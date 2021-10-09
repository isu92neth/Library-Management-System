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
  return (
    <FluidContainer>
      <Table data={catalog} />
    </FluidContainer>
  );
};

export default Books;
