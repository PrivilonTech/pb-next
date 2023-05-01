import React, { useState, useEffect } from "react";

import { crudeList, crudeStructure } from "../../menuLists/crudeList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import Graph from "@/Components/PaneContent/Graph";
import { getCrudeData } from "@/utils/apiCalls";
import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";
import { structureFeedstockData } from "@/utils/structureData";

function index() {
  const [selectedOption, setSelectedOption] = useState("Monthly");
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
      selectedOption,
      setData,
      setIsLoading,
      selectedCountry
    );
  }, [selectedOption, selectedCountry]);

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
          <Graph data={data} />
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
        secondaryDropdown
        secondaryDropdownData={["Monthly", "Yearly", "Weekly"]}
        secondarySelectedOption={selectedOption}
        secondarySetSelectedOption={setSelectedOption}
      />
    </>
  );
}

export default index;
