import React from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

import Pane from "@/Components/Pane/Pane";
import Graphbar from "@/Components/Graphbar/Graphbar";

import { naptha } from "@/dummyData/data";
import crudeList from "../../menuLists/crudeList";

function index() {
  return (
    <>
      <Graphbar
        path="naptha"
        data={naptha}
        sideBarList={crudeList}
        page="crude"
      />
    </>
  );
}

export default index;
