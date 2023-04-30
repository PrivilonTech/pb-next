import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";

import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import indianBazaarList from "@/menuLists/indianBazaarList";
import DataContainer from "@/Components/PaneContent/DataContainer";
import { getCityData, getIndianData, getTextData } from "@/utils/apiCalls";
import { structureDataIndian } from "@/utils/structureData";
import { monthsArray, yearArray } from "@/utils/dateArray";
import AdminTextUpload from "@/Components/Admin/AdminTextUpload";
import BlogContent from "@/Components/PaneContent/BlogContent";

export default function Indian() {
  const router = useRouter();
  const path = router.query.indian;

  const [data, setData] = useState({}); //stores data of a particular city
  const [dataChange, setDataChange] = useState(false);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const getYearArray = yearArray();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthsArray[currentMonth]);
  const monthIndex = monthsArray.indexOf(month) + 1; //stores month in numbers

  const [city, setCity] = useState({}); //stores data of all cities
  const [cityNames, setCityNames] = useState([]);

  const [cityCategory, setCityCategory] = useState("");

  useEffect(() => {
    if (path === "citywise") {
      getCityData(setCity, setCityCategory, setCityNames);
      getIndianData("Mumbai", setData);
    } else {
      // rate revision and rate prediction call
      getTextData(path, monthIndex, year, setData);
    }
  }, []);

  const modifiedData = structureDataIndian(data);

  useEffect(() => {
    if (path === "citywise") {
      getIndianData(cityCategory, setData);
    }
  }, [cityCategory]);

  useEffect(() => {
    if (path !== "citywise") {
      getTextData(path, monthIndex, year, setData);
    }
  }, [dataChange, month, year]);

  const BodyContent = (
    <>
      {path === "citywise" ? (
        <Box
          sx={{
            margin: { xs: "2em auto", md: "0 auto" },
            display: "flex",
            justifyContent: "center",
            gap: "2em 5em",
            flexWrap: "wrap",
          }}
        >
          {modifiedData.dataKeys.map((dataItem, index) => (
            <DataContainer
              key={index}
              title={dataItem}
              polymerSubType={modifiedData.subKeys[dataItem]}
              polymerValue={modifiedData.subValues[dataItem]}
            />
          ))}
        </Box>
      ) : (
        <Box
          Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2em",
            width: "100%",
          }}
        >
          <AdminTextUpload path={path} setDataChange={setDataChange} />
          {data.length > 0 ? (
            <BlogContent data={data} />
          ) : (
            <Typography sx={{ textAlign: "center" }}>No data yet</Typography>
          )}
        </Box>
      )}
    </>
  );

  return (
    <>
      <PaneContentLayout
        title="Indian Bazaar"
        list={indianBazaarList}
        page="indian-bazaar"
        path={path}
        mainContent={BodyContent}
        dropdown={path !== "citywise"}
        dropdownData={monthsArray}
        selectedOption={month}
        setSelectedOption={setMonth}
        secondaryDropdown={path !== "citywise"}
        secondaryDropdownData={getYearArray}
        secondarySelectedOption={year}
        secondarySetSelectedOption={setYear}
        thirdDropdown={path === "citywise"}
        thirdDropdownData={cityNames}
        thirdSelectedOption={cityCategory}
        thirdSetSelectionOption={setCityCategory}
      />
    </>
  );
}
