import React from "react";
import axios from "axios";
import { Box } from "@mui/material";

import indianBazaarList from "@/menuLists/indianBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import DataContainer from "@/Components/PaneContent/DataContainer";
import { structureDataIndian } from "@/utils/structureData";

export default function IndianBazaar({ response }) {
  const { dataKeys, subKeys, subValues } = structureDataIndian(response.data);

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
      {dataKeys.map((dataItem, index) => (
        <DataContainer
          key={index}
          title={dataItem}
          polymerSubType={subKeys[dataItem]}
          polymerValue={subValues[dataItem]}
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
        path="rateRevision"
        mainContent={BodyContent}
      />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/citywise/Ahmedabad`
  );

  return {
    props: {
      response: res.data,
    },
  };
};
