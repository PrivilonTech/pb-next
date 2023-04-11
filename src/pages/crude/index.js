import React from "react";
import Pane from "@/Components/Pane/Pane";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Graphbar from "@/Components/Graphbar/Graphbar";

function index() {
  const router = useRouter();
  const path = router.query.crude;
  return (
    <>
      <Graphbar />
    </>
  );
}

export default index;
