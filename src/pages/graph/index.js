import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Box } from "@mui/material";

import { graphList, graphData } from "@/menuLists/graphList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import Graph from "@/Components/PaneContent/Graph";
import EmptyData from "@/Components/PaneContent/EmptyData";
import PaneFooter from "@/Components/PaneContent/PaneFooter";

import { getHistoricalData } from "@/utils/apiCalls";
import { yearArray } from "@/utils/dateArray";

function index() {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const [year, setYear] = useState(currentYear);
  const getYearArray = yearArray();

  const [category, setCategory] = useState(graphData["PP"][0]);

  const [data, setData] = useState({});
  const [secondaryData, setSecondaryData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHistoricalData(
      "ppRaffia",
      year,
      setData,
      setSecondaryData,
      setIsLoading
    );
  }, []);

  //year and category change
  useEffect(() => {
    getHistoricalData(
      "ppRaffia",
      year,
      setData,
      setSecondaryData,
      setIsLoading
    );
  }, [year, category]);

  const BodyContent = (
    <>
      {data?.labels ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2em",
            maxWidth: "100%",
          }}
        >
          <Graph data={data} leftSpacing />
          <Graph data={secondaryData} leftSpacing />
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            width: "100%",
            height: "50vh",
          }}
        >
          {isLoading ? <ClipLoader color="#C31815" size={30} /> : <EmptyData />}
        </Box>
      )}
    </>
  );

  return (
    <>
      <PaneContentLayout
        title="Graph"
        list={graphList}
        page="graph"
        path="PP"
        mainContent={BodyContent}
        dropdown
        dropdownData={graphData["PP"]}
        selectedOption={category}
        setSelectedOption={setCategory}
        secondaryDropdown
        secondaryDropdownData={getYearArray}
        secondarySelectedOption={year}
        secondarySetSelectedOption={setYear}
      />
      <Box sx={{ margin: { xs: "1em 1.5em", md: "2em 5em" } }}>
        <PaneFooter />
      </Box>
    </>
  );
}

export default index;
