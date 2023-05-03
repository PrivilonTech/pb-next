import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";

import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import { graphList, graphData } from "@/menuLists/graphList";
import { getHistoricalData } from "@/utils/apiCalls";
import Graph from "@/Components/PaneContent/Graph";
import { yearArray } from "@/utils/dateArray";
import EmptyData from "@/Components/PaneContent/EmptyData";
import { ClipLoader } from "react-spinners";

function index({ response }) {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const [year, setYear] = useState(currentYear);
  const getYearArray = yearArray();

  const [category, setCategory] = useState(graphData["PP"][0]);
  const [cities, setCities] = useState(Object.keys(response.data));

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
  const [isLoading, setIsLoading] = useState(true);

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

export const getServerSideProps = async () => {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/historicaldata?polymer=ppRaffia&year=${currentYear}`
  );
  return {
    props: {
      response: res.data,
    },
  };
};
