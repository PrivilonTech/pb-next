import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";

import globalBazaarList from "../../menuLists/globalBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import DataContainer from "@/Components/PaneContent/DataContainer";
import EmptyData from "@/Components/PaneContent/EmptyData";
import PaneFooter from "@/Components/PaneContent/PaneFooter";

import { monthsArray, yearArray } from "@/utils/dateArray";
import { getGlobalData } from "@/utils/apiCalls";

function index() {
  const currentDate = new Date();

  const getYearArray = yearArray();
  const [data, setData] = useState({});

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthsArray[currentMonth]);
  const monthIndex = monthsArray.indexOf(month) + 1; //stores month in numbers
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGlobalData("USA", monthIndex, year, setData, setIsLoading);
  }, []);

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
          <>
            {data.map((eachData, index) =>
              eachData.dataKeys.map((dataItem, id) => (
                <DataContainer
                  key={`${index}-${id}`}
                  date={eachData.date}
                  title={dataItem}
                  polymerSubType={eachData.subKeys[dataItem]}
                  polymerValue={eachData.subValues[dataItem]}
                />
              ))
            )}
          </>
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
      <PaneContentLayout
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
      />
      <Box
        sx={{
          margin: {
            xs: "1em 1.5em",
            md: "2em 5em",
          },
        }}
      >
        <PaneFooter />
      </Box>
    </>
  );
}

export default index;
