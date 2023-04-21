import React from "react";
import { Box } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

import Pane from "@/Components/Pane/Pane";
import Graphbar from "@/Components/Graphbar/Graphbar";

import { naptha, propylene, ethylene, pta, vcm, steryne } from "@/data";
import crudeList from "../../../sidebarLists/crudeList";

function Crude(response) {
  const router = useRouter();
  const path = router.query.crude;
  console.log(response);

  let data = {};

  if (path === "naptha") {
    data = naptha;
  }
  if (path === "propylene") {
    data = propylene;
  }
  if (path === "ethylene") {
    data = ethylene;
  }
  if (path === "vcm&edc") {
    data = vcm;
  }
  if (path === "steryne") {
    data = steryne;
  }
  if (path === "pta") {
    data = pta;
  }

  return (
    <>
      <Graphbar
        path={path}
        data={data}
        sideBarList={crudeList}
        category="crude"
      />
    </>
  );
}

export default Crude;

export const getServerSideProps = async ({ query }) => {
  console.log(query);
  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/feedstock/${query.crude}`
  );
  console.log(res.data);
  return {
    props: {
      response: res.data,
    },
  };
};
