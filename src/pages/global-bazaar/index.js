import React, { useState } from "react";
import Chart from "chart.js/auto";

import Graphbar from "@/Components/Graphbar/Graphbar";

import { usa } from "../../dummyData/globalBazaarData";
import globalBazaarList from "../../menuLists/globalBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { monthsArray, yearArray } from "@/utils/dateArray";
import { useEffect } from "react";
import { getGlobalData } from "@/utils/apiCalls";
import DataContainer from "@/Components/PaneContent/DataContainer";
import structureData from "@/utils/structureData";

function index({ response }) {
  const currentDate = new Date();

  const getYearArray = yearArray();
  const [data, setData] = useState(response.data.data);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthsArray[currentMonth]);
  const monthIndex = monthsArray.indexOf(month) + 1; //stores month in numbers

  useEffect(() => {
    getGlobalData("USA", monthIndex, year, setData);
  }, [month, year]);

  const modifiedData = structureData(data);
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
      {modifiedData.length > 0 ? (
        modifiedData.map((eachData, index) => (
          <>
            {eachData.dataKeys.map((dataItem, id) => (
              <DataContainer
                key={id}
                date={data[index].date}
                title={dataItem}
                polymerSubType={eachData.subKeys[dataItem]}
                polymerValue={eachData.subValues[dataItem]}
              />
            ))}
          </>
        ))
      ) : (
        <Typography
          sx={{ marginTop: "1em", color: "#575757", fontSize: "1.5rem" }}
        >
          No Data yet
        </Typography>
      )}
    </Box>
  );

  return (
    <>
      <PaneContentLayout
        title="Global Bazaar"
        list={globalBazaarList}
        page="global-bazaar"
        path="USA"
        mainContent={BodyContent}
        dropdownData={monthsArray}
        selectedOption={month}
        setSelectedOption={setMonth}
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

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  //use this api call - https://polymerbazar-be.onrender.com/api/internationaloffers?country=USA&month=${currentMonth}&year=${currentYear}

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/internationaloffers?country=USA&month=${currentMonth}&year=${currentYear}`
  );

  return {
    props: {
      response: res.data,
    },
  };
};
