import React from "react";
import { useRouter } from "next/router";
import Chart from "chart.js/auto";

import {
  usa,
  asiaChina,
  asiaIndia,
  asiaPakistan,
  otherAsianNation,
  saudiArabia,
  middleEast,
  european,
  turkey,
  africaEgypt,
  africaCfrWest,
} from "@/dummyData/globalBazaarData";
import globalBazaarList from "../../menuLists/globalBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import { Box } from "@mui/material";

function Global() {
  const router = useRouter();
  const path = router.query.global;
  const chartRef = React.useRef(null);

  // OMIT THIS AFTER DATA FETCHED FROM API
  let data = {};

  if (path === "usa") {
    data = usa;
  }
  if (path === "asiaChina") {
    data = asiaChina;
  }
  if (path === "asiaIndia") {
    data = asiaIndia;
  }
  if (path === "asiaPakistan") {
    data = asiaPakistan;
  }
  if (path === "otherAsianNation") {
    data = otherAsianNation;
  }
  if (path === "saudiArabia") {
    data = saudiArabia;
  }
  if (path === "middleEast") {
    data = middleEast;
  }
  if (path === "turkey") {
    data = turkey;
  }
  if (path === "european") {
    data = european;
  }
  if (path === "africaEgypt") {
    data = africaEgypt;
  }
  if (path === "africaCfrWest") {
    data = africaCfrWest;
  }

  React.useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "line",
      data: data,
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
  }, [data]);

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
        title="Global Bazaar"
        list={globalBazaarList}
        page="global-bazaar"
        path={path}
        mainContent={BodyContent}
      />
    </>
  );
}

export default Global;
