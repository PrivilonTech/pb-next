import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { crudeList, crudeStructure } from "@/menuLists/crudeList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import Graph from "@/Components/PaneContent/Graph";
import { getCrudeData } from "@/utils/apiCalls";
import { ClipLoader } from "react-spinners";
import { Box } from "@mui/material";
import { structureFeedstockData } from "@/utils/structureData";

function Crude() {
  const router = useRouter();
  const path = router.query.crude;

  const [selectedOption, setSelectedOption] = useState("Monthly");

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
        selectedOption,
        setData,
        setIsLoading,
        selectedCountry
      );
    }
  }, [selectedOption, path, selectedCountry]);

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
        path={path}
        mainContent={BodyContent}
        dropdown={path}
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

export default Crude;
