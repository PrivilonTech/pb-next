import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import { graphData, graphList } from "@/menuLists/graphList";
import { getHistoricalData } from "@/utils/apiCalls";
import { yearArray } from "@/utils/dateArray";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import Graph from "@/Components/PaneContent/Graph";
import EmptyData from "@/Components/PaneContent/EmptyData";
import { ClipLoader } from "react-spinners";

export default function GraphData() {
  const router = useRouter();
  const path = router.query.graph;
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const [year, setYear] = useState(currentYear);
  const getYearArray = yearArray();

  const [category, setCategory] = useState("");
  const graphSubCategories = graphData[path];

  useEffect(() => {
    if (path) {
      setCategory(graphSubCategories[0]);
    }
  }, [path]);

  const [data, setData] = useState({});
  const [secondaryData, setSecondaryData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHistoricalData(category, year, setData, setSecondaryData, setIsLoading);
  }, []);

  useEffect(() => {
    getHistoricalData(category, year, setData, setSecondaryData, setIsLoading);
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
          <Graph data={data} />
          <Graph data={secondaryData} />
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
        title="Historical Data"
        list={graphList}
        page="graph"
        path={path}
        mainContent={BodyContent}
        dropdown={path}
        dropdownData={graphData[path]}
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
