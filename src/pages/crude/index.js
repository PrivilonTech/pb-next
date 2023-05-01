import React, { useState, useEffect } from "react";

import crudeList from "../../menuLists/crudeList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import Graph from "@/Components/PaneContent/Graph";
import { getCrudeData } from "@/utils/apiCalls";
import EmptyData from "@/Components/PaneContent/EmptyData";
import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";

function index() {
  const [selectedOption, setSelectedOption] = useState("Monthly");
  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  //on state change
  useEffect(() => {
    getCrudeData("Naphtha", "China", selectedOption, setData, setIsLoading);
  }, [selectedOption]);

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
        secondaryDropdown
        secondaryDropdownData={["Monthly", "Yearly"]}
        secondarySelectedOption={selectedOption}
        secondarySetSelectedOption={setSelectedOption}
      />
    </>
  );
}

export default index;
