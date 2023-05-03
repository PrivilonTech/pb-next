import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

import Graph from "@/Components/PaneContent/Graph";
import { getCrudeData } from "@/utils/apiCalls";
import { structureFeedstockData } from "@/utils/structureData";
import { crudeStructure } from "@/menuLists/crudeList";
import Periodic from "@/Components/PaneContent/Periodic";

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
    <Box sx={{ width: { xs: "100%", lg: "500px" }, cursor: "pointer" }}>
      <Graph data={data} onClick={() => router.push("/crude")} />
      <Periodic periodicTime={periodicTime} setPeriodicTime={setPeriodicTime} />
    </Box>
  );
}
