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
              width: "100%",
              fontSize: "1.25rem",
              textTransform: "uppercase",
              textAlign: "center",
              borderBottom: "1px solid #dee2e6",
              margin: "1em",
              fontWeight: "bold",
              fontFamily: "arial",
              color: "#ef6b67",
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
