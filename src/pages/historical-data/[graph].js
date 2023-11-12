import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import secureLocalStorage from "react-secure-storage";

import { graphData, graphList } from "@/menuLists/graphList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import Graph from "@/Components/PaneContent/Graph";
import EmptyData from "@/Components/PaneContent/EmptyData";
import PaneFooter from "@/Components/PaneContent/PaneFooter";

import { getHistoricalData } from "@/utils/apiCalls";
import { yearArray } from "@/utils/dateArray";

export default function GraphData() {
  const router = useRouter();
  const path = router.query.graph;
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const [year, setYear] = useState(currentYear);
  const getYearArray = yearArray();

  const [isAdmin, setIsAdmin] = useState(false);
  const userLoggedIn = secureLocalStorage.getItem("user");

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
    if (userLoggedIn) {
      setIsAdmin(userLoggedIn?.role === "admin");
    }
  }, [userLoggedIn]);

  useEffect(() => {
    getHistoricalData(category, year, setData, setSecondaryData, setIsLoading);
  }, [year, category]);

  const BodyContent = (
    <>
      {data?.labels ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", lg: "nowrap" },
            flexDirection: { xs: "column", lg: "row" },
            gap: "2em",
            maxWidth: "100%",
            marginLeft: { xs: "-1em", lg: "-1.75em" },
          }}
        >
          <Graph data={data} width={{ xs: "100%", lg: "50%" }} />
          <Graph data={secondaryData} width={{ xs: "100%", lg: "50%" }} />
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
        page="historical-data"
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
      {isAdmin && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            margin: { xs: "-1em 1em 1.5em", md: "-1em 1em 5em" },
          }}
        >
          <Typography sx={{ color: "#7c7c7c" }}>
            Expected sheet name:{" "}
            <span style={{ fontWeight: 700 }}>{category}</span>
          </Typography>
        </Box>
      )}
      <Box sx={{ margin: { xs: "1em 1.5em", md: "2em 5em" } }}>
        <PaneFooter />
      </Box>
    </>
  );
}
