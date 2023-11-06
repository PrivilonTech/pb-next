import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Box } from "@mui/material";

import indianBazaarList from "@/menuLists/indianBazaarList";
import PaneFooter from "@/Components/PaneContent/PaneFooter";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";

import { structureDataIndian } from "@/utils/structureData";
import DataContainer from "@/Components/PaneContent/DataContainer";
import { getCityData, getIndianData, getTextData } from "@/utils/apiCalls";
import AdminTextUpload from "@/Components/Admin/AdminTextUpload";
import { monthsArray, yearArray } from "@/utils/dateArray";
import BlogContent from "@/Components/PaneContent/BlogContent";
import EmptyData from "@/Components/PaneContent/EmptyData";

export default function IndianBazaar() {
  const [data, setData] = useState({});
  const [textData, setTextData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [dataChange, setDataChange] = useState(false);

  const [city, setCity] = useState({}); //stores data of all cities
  const [cityNames, setCityNames] = useState([]);
  const [cityCategory, setCityCategory] = useState("Ahmedabad");

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const getYearArray = yearArray();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(monthsArray[currentMonth]);
  const monthIndex = monthsArray.indexOf(month) + 1; //stores month in numbers

  const modifiedData = structureDataIndian(data);

  useEffect(() => {
    getCityData(setCity, setCityCategory, setCityNames);
    getIndianData("Ahmedabad", setData, setIsLoading);
    getTextData("citywise", monthIndex, year, setTextData, setIsLoading);
  }, []);

  useEffect(() => {
    getIndianData(cityCategory, setData, setIsLoading);
  }, [cityCategory]);

  useEffect(() => {
    getTextData("citywise", monthIndex, year, setTextData, setIsLoading);
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
      <AdminTextUpload path={"citywise"} setDataChange={setDataChange} />
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
            {modifiedData.dataKeys.map((dataItem, index) => (
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
        path="citywise"
        mainContent={BodyContent}
        dropdown
        dropdownData={cityNames}
        selectedOption={cityCategory}
        setSelectedOption={setCityCategory}
        secondaryDropdown
        secondaryDropdownData={monthsArray}
        secondarySelectedOption={month}
        secondarySetSelectedOption={setMonth}
        thirdDropdown
        thirdDropdownData={getYearArray}
        thirdSelectedOption={year}
        thirdSetSelectionOption={setYear}
      />
      <Box sx={{ margin: { xs: "1em 1.5em", md: "2em 5em" } }}>
        <PaneFooter />
      </Box>
    </>
  );
}
