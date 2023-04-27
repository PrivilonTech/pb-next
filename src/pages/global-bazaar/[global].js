import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

import globalBazaarList from "../../menuLists/globalBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import { monthsArray, yearArray } from "@/utils/dateArray";
import { getGlobalData } from "@/utils/apiCalls";
import DataContainer from "@/Components/PaneContent/DataContainer";
import structureData from "@/utils/structureData";

function Global({ response }) {
  const router = useRouter();
  const path = router.query.global;

  const [data, setData] = useState(response.data.data);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthsArray[currentMonth]);
  const monthIndex = monthsArray.indexOf(month) + 1; //stores month in numbers

  const getYearArray = yearArray();

  useEffect(() => {
    getGlobalData(path, monthIndex, year, setData);
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
        path={path}
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

export default Global;

export const getServerSideProps = async ({ query }) => {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  //use this api call - https://polymerbazar-be.onrender.com/api/internationaloffers?country=${query.global}&month=${currentMonth]&year=${currentYear}

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/internationaloffers?country=${query.global}&month=${currentMonth}&year=${currentYear}`
  );

  return {
    props: {
      response: res.data,
    },
  };
};
