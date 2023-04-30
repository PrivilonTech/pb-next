import React, { useState, useEffect } from "react";
import axios from "axios";

import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import { graphList, graphData } from "@/menuLists/graphList";
import { getHistoricalData } from "@/utils/apiCalls";
import Graph from "@/Components/PaneContent/Graph";
import { yearArray } from "@/utils/dateArray";
import { Box, Typography } from "@mui/material";

function index({ response }) {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const [year, setYear] = useState(currentYear);

  const [category, setCategory] = useState(graphData["PP"][0]);
  const [cities, setCities] = useState(Object.keys(response.data));
  // const [selectedCity, setSelectedCity] = useState(cities[0]);

  const getYearArray = yearArray();

  const graphStructureOne = {
    labels: response.data[cities[0]]?.date,
    datasets: [
      {
        label: cities[0],
        data: response.data[cities[0]]?.value,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
  };

  const graphStructureTwo = {
    labels: response.data[cities[1]]?.date,
    datasets: [
      {
        label: cities[1],
        data: response.data[cities[1]]?.value,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
  };

  const [data, setData] = useState(graphStructureOne);
  const [secondaryData, setSecondaryData] = useState(graphStructureTwo);

  // console.log(data, secondaryData);

  // useEffect(() => {
  //   setData(graphStructureOne);
  // }, [selectedCity]);

  //year and category change
  useEffect(() => {
    getHistoricalData("Lami", year, setData, setSecondaryData);
  }, [year, category]);

  const BodyContent = (
    <>
      {data.labels ? (
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
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Typography>No Data</Typography>
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
        // thirdDropdown={cities.length > 0}
        // thirdDropdownData={cities}
        // thirdSelectedOption={selectedCity}
        // thirdSetSelectionOption={setSelectedCity}
      />
    </>
  );
}

export default index;

export const getServerSideProps = async () => {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/historicaldata?polymer=Lami&year=${currentYear}`
  );
  return {
    props: {
      response: res.data,
    },
  };
};
