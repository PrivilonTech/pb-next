import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import { crudeList, crudeStructure } from "@/menuLists/crudeList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import Graph from "@/Components/PaneContent/Graph";
import Periodic from "@/Components/PaneContent/Periodic";
import PaneFooter from "@/Components/PaneContent/PaneFooter";
import { getCrudeData } from "@/utils/apiCalls";
import { structureFeedstockData } from "@/utils/structureData";

function Crude() {
  const router = useRouter();
  const path = router.query.crude;

  const [periodicTime, setPeriodicTime] = useState("Monthly");

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { displayValues, callValues } = structureFeedstockData(
    crudeStructure,
    path
  );
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    if (path) {
      setSelectedCountry(displayValues[0]);
    }
  }, [path]);

  useEffect(() => {
    if (path) {
      getCrudeData(
        path,
        callValues[displayValues.indexOf(selectedCountry)],
        periodicTime,
        setData,
        setIsLoading,
        selectedCountry
      );
    }
  }, [periodicTime, path, selectedCountry]);

  const BodyContent = (
    <>
      <>
        {isLoading ? (
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "50vh",
            }}
          >
            <ClipLoader color="#C31815" size={30} />
          </Box>
        ) : (
          <>
            <Graph data={data} />
            <Periodic
              periodicTime={periodicTime}
              setPeriodicTime={setPeriodicTime}
            />
            <PaneFooter />
          </>
        )}
      </>
    </>
  );

  return (
    <>
      <PaneContentLayout
        title="Crude"
        list={crudeList}
        page="crude"
        path={path}
        mainContent={BodyContent}
        dropdown={path}
        dropdownData={displayValues}
        selectedOption={selectedCountry}
        setSelectedOption={setSelectedCountry}
      />
    </>
  );
}

export default Crude;
