import React, { useState } from "react";
import Chart from "chart.js/auto";

import Graphbar from "@/Components/Graphbar/Graphbar";

import { usa } from "../../dummyData/globalBazaarData";
import globalBazaarList from "../../menuLists/globalBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import { Box } from "@mui/material";
import axios from "axios";
import { monthsArray, yearArray } from "@/utils/dateArray";
import { useEffect } from "react";
import { getGlobalData } from "@/utils/apiCalls";
import DataContainer from "@/Components/PaneContent/DataContainer";

function index({ response }) {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [month, setMonth] = useState("October"); //pass current month here
  const monthIndex = monthsArray.indexOf(month) + 1; //store month in numbers
  const [year, setYear] = useState(2022); // pass currentYear here

  const [data, setData] = useState(response.data.data);

  const getYearArray = yearArray();

  useEffect(() => {
    getGlobalData("USA", monthIndex, year, setData);
  }, [month, year]);

  const BodyContent = (
    <Box
      sx={{
        margin: { xs: "2em auto", md: "0 auto" },
        display: "flex",
        justifyContent: "center",
        gap: "2em 5em",
        flexWrap: "wrap",
      }}
    >
      {console.log(data)}
    </Box>
  );

  return (
    <>
      <PaneContentLayout
        title="Global Bazaar"
        list={globalBazaarList}
        page="global-bazaar"
        path="usa"
        mainContent={BodyContent}
        dropdownData={monthsArray}
        selectedOption={month}
        setSelectedOption={setMonth}
        secondaryDropdown
        secondaryDropdownData={getYearArray}
        secondarySelectedOption={year}
        setSecondarySelectedOption={setYear}
      />
    </>
  );
}

export default index;

export const getServerSideProps = async () => {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  //use this api call - https://polymerbazar-be.onrender.com/api/internationaloffers?country=USA&month=${currentMonth]&year=${currentYear}

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/internationaloffers?country=USA&month=10&year=2022`
  );

  return {
    props: {
      response: res.data,
    },
  };
};
