import React from "react";

import Graphbar from "@/Components/Graphbar/Graphbar";

import { usa } from "../../globalBazaarData";
import globalBazaarList from "../../../menuLists/globalBazaarList";

function index() {
  return (
    <>
      {
        <Graphbar
          path="usa"
          data={usa}
          sideBarList={globalBazaarList}
          category="global-bazaar"
        />
      }
    </>
  );
}

export default index;
