import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

import Graph from "@/Components/PaneContent/Graph";
import { getCrudeData } from "@/utils/apiCalls";
import { structureFeedstockData } from "@/utils/structureData";
import { crudeStructure } from "@/menuLists/crudeList";
import Periodic from "@/Components/PaneContent/Periodic";
import LoadingGraph from "@/Components/Loading/LoadingGraph";

export default function GraphDisplay() {
  const [data, setData] = useState({});
  const router = useRouter();

  const { displayValues, callValues } = structureFeedstockData(
    crudeStructure,
    "Naphtha"
  );

  const [isLoading, setIsLoading] = useState(true);
  const [periodicTime, setPeriodicTime] = useState("Monthly");
  const [selectedCountry, setSelectedCountry] = useState(displayValues[0]);

  useEffect(() => {
    getCrudeData(
      "Naphtha",
      callValues[displayValues.indexOf(selectedCountry)],
      periodicTime,
      setData,
      setIsLoading,
      selectedCountry
    );
  }, [periodicTime, selectedCountry]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedCountry((prev) =>
        prev === displayValues[0] ? displayValues[1] : displayValues[0]
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingGraph />
      ) : (
        <Box sx={{ width: "100%", cursor: "pointer" }}>
          <Typography
            sx={{
              fontSize: "1.25rem",
              textTransform: "uppercase",
              textAlign: "center",
              borderBottom: "1px solid #dee2e6",
              margin: "1em",
              fontWeight: "bold",
              fontFamily: "arial",

              background: "hsla(2, 78%, 54%, 1)",
              background:
                "linear-gradient(135deg, hsla(2, 78%, 54%, 1) 0%, hsla(0, 100%, 89%, 1) 100%)",
              background:
                "-moz-linear-gradient(90deg, hsla(2, 78%, 54%, 1) 0%, hsla(0, 100%, 89%, 1) 100%)",
              background:
                "-webkit-linear-gradient(90deg, hsla(2, 78%, 54%, 1) 0%, hsla(0, 100%, 89%, 1) 100%)",
              filter:
                "progid: DXImageTransform.Microsoft.gradient( startColorstr='#E5322D', endColorstr='#ffc8c8', GradientType=1 )",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              backgroundClip: "text",
              "-moz-background-clip": "text",
              "-moz-text-fill-color": "transparent",
            }}
          >
            Naphtha
          </Typography>
          <Graph data={data} onClick={() => router.push("/crude")} small />
          <Periodic
            periodicTime={periodicTime}
            setPeriodicTime={setPeriodicTime}
          />
        </Box>
      )}
    </>
  );
}
