import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Box } from "@mui/material";

import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import { graphList, graphData } from "@/menuLists/graphList";
import { getHistoricalData } from "@/utils/apiCalls";
import Graph from "@/Components/PaneContent/Graph";
import { yearArray } from "@/utils/dateArray";
import EmptyData from "@/Components/PaneContent/EmptyData";

function index() {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const [year, setYear] = useState(currentYear);
  const getYearArray = yearArray();

  const [category, setCategory] = useState(graphData["PP"][0]);
  const [cities, setCities] = useState([]);

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
    </>
  );
}

export default index;
