import React, { useState, useEffect } from "react";
import axios from "axios";

import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import graphList from "@/menuLists/graphList";
import { getHistoricalData } from "@/utils/apiCalls";
import Graph from "@/Components/PaneContent/Graph";
import { yearArray } from "@/utils/dateArray";
import { Box, Typography } from "@mui/material";

function index({ response }) {
  const currentDate = new Date();

  const [cityNames, setCityNames] = useState(Object.keys(response.data));
  const [cityCategory, setCityCategory] = useState(cityNames[0]);

  const currentYear = currentDate.getFullYear();
  const [year, setYear] = useState(currentYear);

  const getYearArray = yearArray();

  const graphStructure = {
    labels: response.data[cityCategory]?.date,
    datasets: [
      {
        label: cityCategory,
        data: response.data[cityCategory]?.value,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 2,
      },
    ],
  };

  const [data, setData] = useState(graphStructure);
  console.log(data);

  useEffect(() => {
    setData(graphStructure);
  }, [cityCategory]);

  //year change
  useEffect(() => {
    // getHistoricalData("Lami", 2012, cityCategory, setData);
  }, [year]);

  const BodyContent = (
    <>
      {data.labels ? (
        <Graph data={data} />
      ) : (
        <Typography sx={{ textAlign: "center" }}>No Data</Typography>
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
        dropdownData={cityNames}
        selectedOption={cityCategory}
        setSelectedOption={setCityCategory}
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
    `https://polymerbazar-be.onrender.com/api/historicaldata?polymer=Lami&year=${currentYear}`
  );
  return {
    props: {
      response: res.data,
    },
  };
};
