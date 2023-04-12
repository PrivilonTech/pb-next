import Graphbar from "@/Components/Graphbar/Graphbar";
import Pane from "@/Components/Pane/Pane";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { naptha, propylene, ethylene, pta, vcm, steryne } from "@/data";

function Crude() {
  const router = useRouter();
  const path = router.query.crude;

  let data = naptha;

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
      <Graphbar path={path} data={data} />
    </>
  );
}

export default Crude;
