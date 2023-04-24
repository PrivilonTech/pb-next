import React from "react";

import Graphbar from "@/Components/Graphbar/Graphbar";

import { usa } from "../../dummyData/globalBazaarData";
import globalBazaarList from "../../menuLists/globalBazaarList";

function index() {
  return (
    <>
      {
        <Graphbar
          path="usa"
          data={usa}
          sideBarList={globalBazaarList}
          page="global-bazaar"
        />
      }
    </>
  );
}

export default index;
