import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Chart from "chart.js/auto";
import { Box } from "@mui/material";

import {
  naptha,
  propylene,
  ethylene,
  pta,
  vcm,
  steryne,
} from "@/dummyData/data";
import crudeList from "@/menuLists/crudeList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";

function Crude(response) {
  const router = useRouter();
  const chartRef = React.useRef(null);
  const path = router.query.crude;

  let data = {};

  //   OMIT THIS AFTER FETCHING DATA FROM API
  if (path === "naptha") {
    data = naptha;
  }
  if (path === "propylene") {
    data = propylene.data;
  }
  if (path === "ethylene") {
    data = ethylene.data;
  }
  if (path === "vcm&edc") {
    data = vcm;
  }
  if (path === "steryne") {
    data = steryne.data;
  }
  if (path === "pta") {
    data = pta;
  }

  const [indexData, setIndexData] = useState(0);

  React.useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "line",
      data: data[indexData], //pass final result.data[indexData]
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [indexData]);

  const BodyContent = (
    <Box
      sx={{
        marginLeft: { md: "1em" },
        height: { xs: "100%", md: "100%" },
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <canvas style={{ marginTop: "2vh" }} ref={chartRef} />
    </Box>
  );

  return (
    <>
      <PaneContentLayout
        title="Crude"
        list={crudeList}
        page="crude"
        path={path}
        mainContent={BodyContent}
        dropdownData={propylene.categories} // pass final result.categories
        indexData={indexData}
        setIndexData={setIndexData}
      />
    </>
  );
}

export default Crude;

export const getServerSideProps = async ({ query }) => {
  const res = await axios.get(
    `https://polymerbazar-be.onrender.com/api/feedstock/${query.crude}`
  );
  return {
    props: {
      response: res.data,
    },
  };
};
