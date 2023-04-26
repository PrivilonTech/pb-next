import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import indianBazaarList from "@/menuLists/indianBazaarList";
import DataContainer from "@/Components/PaneContent/DataContainer";
import combineData from "@/utils/combineData";
import categorizeData from "@/utils/categorizeCities";

export default function Indian({ response, city }) {
  const router = useRouter();
  const path = router.query.indian;

  const data = combineData(response.data); //combining data with same polymerType
  const cityNames = categorizeData(city.data); //creating a array of unique city names

  const [cityCategory, setCityCategory] = useState(cityNames[0]);

  useEffect(() => {
    router.push(`/indian-bazaar/${path}?city=${cityCategory}`);
  }, [cityCategory]);

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
      {data.map((dataItem) => (
        <DataContainer
          key={dataItem.id}
          title={dataItem.polymerType}
          polymerSubType={dataItem.polymerSubType}
          polymerValue={dataItem.value}
        />
      ))}
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
        dropdownData={cityNames}
        city={cityCategory}
        setCity={setCityCategory}
      />
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const city = query.city || "Ahmedabad";

  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/citywise/${city}`
  );

  const cityWise = await axios.get(
    "https://polymerbazar-be.onrender.com/api/citywise"
  );

  return {
    props: {
      response: res.data,
      city: cityWise.data,
    },
  };
};
