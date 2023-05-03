import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";

import globalBazaarList from "../../menuLists/globalBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import DataContainer from "@/Components/PaneContent/DataContainer";
import AdminTextUpload from "@/Components/Admin/AdminTextUpload";

import { monthsArray, yearArray } from "@/utils/dateArray";
import { getGlobalData } from "@/utils/apiCalls";
import { structureDataGlobal } from "@/utils/structureData";
import EmptyData from "@/Components/PaneContent/EmptyData";
import { ClipLoader } from "react-spinners";

function index({ response }) {
  const currentDate = new Date();

  const getYearArray = yearArray();
  const [data, setData] = useState(response.data.data);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthsArray[currentMonth]);
  const monthIndex = monthsArray.indexOf(month) + 1; //stores month in numbers
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGlobalData("USA", monthIndex, year, setData, setIsLoading);
  }, [month, year]);

  const BodyContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        width: "100%",
      }}
    >
      <Box
        sx={{
          margin: { xs: "2em auto", md: "0 auto" },
          display: "flex",
          justifyContent: "center",
          gap: "2em 5em",
          flexWrap: "wrap",
        }}
      >
        {data.length > 0 ? (
          data.map((eachData, index) =>
            eachData.dataKeys.map((dataItem, id) => (
              <DataContainer
                key={`${index}-${id}`}
                date={data[index].date}
                title={dataItem}
                polymerSubType={eachData.subKeys[dataItem]}
                polymerValue={eachData.subValues[dataItem]}
              />
            ))
          )
        ) : (
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "50vh",
            }}
          >
            {isLoading ? (
              <ClipLoader color="#C31815" size={30} />
            ) : (
              <EmptyData />
            )}
          </Box>
        )}
      </Box>
    </Box>
  );

  return (
    <>
      {/* <PaneContentLayout
        title="Global Bazaar"
        list={globalBazaarList}
        page="global-bazaar"
        path="USA"
        mainContent={BodyContent}
        dropdown
        dropdownData={monthsArray}
        selectedOption={month}
        setSelectedOption={setMonth}
        secondaryDropdown
        secondaryDropdownData={getYearArray}
        secondarySelectedOption={year}
        secondarySetSelectedOption={setYear}
      /> */}
    </>
  );
}

export default index;

export const getServerSideProps = async () => {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/internationaloffers?country=USA&month=${currentMonth}&year=${currentYear}`
  );

  return {
    props: {
      response: res.data,
    },
  };
};
