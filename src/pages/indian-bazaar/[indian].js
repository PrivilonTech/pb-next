import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";

import indianBazaarList from "@/menuLists/indianBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import DataContainer from "@/Components/PaneContent/DataContainer";
import AdminTextUpload from "@/Components/Admin/AdminTextUpload";
import BlogContent from "@/Components/PaneContent/BlogContent";
import EmptyData from "@/Components/PaneContent/EmptyData";
import PaneFooter from "@/Components/PaneContent/PaneFooter";

import { getCityData, getIndianData, getTextData } from "@/utils/apiCalls";
import { structureDataIndian } from "@/utils/structureData";
import { monthsArray, yearArray } from "@/utils/dateArray";

export default function Indian() {
  const router = useRouter();
  const path = router.query.indian;

  const [data, setData] = useState({}); //stores data of a particular city
  const [textData, setTextData] = useState([]);

  const [dataChange, setDataChange] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const getYearArray = yearArray();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthsArray[currentMonth]);
  const monthIndex = monthsArray.indexOf(month) + 1; //stores month in numbers

  const [city, setCity] = useState({}); //stores data of all cities
  const [cityNames, setCityNames] = useState([]);
  const [cityCategory, setCityCategory] = useState("Ahmedabad");

  const modifiedData = structureDataIndian(data);

  useEffect(() => {
    if (path) {
      if (path === "citywise") {
        getCityData(setCity, setCityCategory, setCityNames);
        getIndianData("Ahmedabad", setData, setIsLoading);
      }

      getTextData(path, monthIndex, year, setTextData, setIsLoading);
    }
  }, [path]);

  useEffect(() => {
    if (path === "citywise") {
      getIndianData(cityCategory, setData, setIsLoading);
    }
  }, [cityCategory]);

  useEffect(() => {
    getTextData(path, monthIndex, year, setTextData, setIsLoading);
  }, [dataChange, month, year]);

  const BodyContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        width: "100%",
      }}
    >
      <AdminTextUpload path={path} setDataChange={setDataChange} />
      <Box
        sx={{
          margin: { xs: "2em auto", md: "0 auto" },
          display: "flex",
          justifyContent: "center",
          gap: "2em 5em",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {modifiedData.dataKeys.length > 0 || textData.length > 0 ? (
          <>
            {path === "citywise" &&
              modifiedData.dataKeys.map((dataItem, index) => (
                <DataContainer
                  key={index}
                  title={dataItem}
                  polymerSubType={modifiedData.subKeys[dataItem]}
                  polymerValue={modifiedData.subValues[dataItem]}
                />
              ))}

            <BlogContent data={textData} setDataChange={setDataChange} />
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
        title="Indian Bazaar"
        list={indianBazaarList}
        page="indian-bazaar"
        path={path}
        mainContent={BodyContent}
        dropdown={path === "citywise"}
        dropdownData={cityNames}
        selectedOption={cityCategory}
        setSelectionOption={setCityCategory}
        secondaryDropdown
        secondaryDropdownData={monthsArray}
        secondarySelectedOption={month}
        secondarySetSelectedOption={setMonth}
        thirdDropdown
        thirdDropdownData={getYearArray}
        thirdSelectedOption={year}
        thirdSetSelectedOption={setYear}
      />
      <Box sx={{ margin: { xs: "1em 1.5em", md: "2em 5em" } }}>
        <PaneFooter />
      </Box>
    </>
  );
}
