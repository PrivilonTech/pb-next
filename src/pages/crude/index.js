import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Box } from "@mui/material";

import { crudeList, crudeStructure } from "../../menuLists/crudeList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import Graph from "@/Components/PaneContent/Graph";
import Periodic from "@/Components/PaneContent/Periodic";
import { getCrudeData } from "@/utils/apiCalls";
import { structureFeedstockData } from "@/utils/structureData";

function index() {
  const [periodicTime, setPeriodicTime] = useState("Monthly");

  const [data, setData] = useState({});
  const { displayValues, callValues } = structureFeedstockData(
    crudeStructure,
    "Naphtha"
  );

  const [isLoading, setIsLoading] = useState(true);
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
        path="Naphtha"
        mainContent={BodyContent}
        dropdown
        dropdownData={displayValues}
        selectedOption={selectedCountry}
        setSelectedOption={setSelectedCountry}
      />
    </>
  );
}

export default index;
