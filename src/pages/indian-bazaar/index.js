import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Box } from "@mui/material";

import indianBazaarList from "@/menuLists/indianBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import PaneFooter from "@/Components/PaneContent/PaneFooter";

import { getCityData, getIndianData } from "@/utils/apiCalls";
import { structureDataIndian } from "@/utils/structureData";
import DataContainer from "@/Components/PaneContent/DataContainer";

export default function IndianBazaar() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [city, setCity] = useState({}); //stores data of all cities
  const [cityNames, setCityNames] = useState([]);
  const [cityCategory, setCityCategory] = useState("Ahmedabad");

  const modifiedData = structureDataIndian(data);

  useEffect(() => {
    getCityData(setCity, setCityCategory, setCityNames);
    getIndianData("Ahmedabad", setData, setIsLoading);
  }, []);

  useEffect(() => {
    getIndianData(cityCategory, setData, setIsLoading);
  }, [cityCategory]);

  const BodyContent = (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            width: "100%",
            height: "50vh",
          }}
        >
          <ClipLoader color="#C31815" size={30} />
        </Box>
      ) : (
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
      )}
    </>
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
      />
      <Box sx={{ margin: { xs: "1em 1.5em", md: "2em 5em" } }}>
        <PaneFooter />
      </Box>
    </>
  );
}
