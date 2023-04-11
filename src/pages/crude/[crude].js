import Graphbar from "@/Components/Graphbar/Graphbar";
import Pane from "@/Components/Pane/Pane";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function Crude() {
  const router = useRouter();
  const path = router.query.crude;

  return (
    <>
      <Graphbar path={path} />
    </>
  );
}

export default Crude;
