import React from "react";
import Chart from "chart.js/auto";

import Graphbar from "@/Components/Graphbar/Graphbar";

import { usa } from "../../dummyData/globalBazaarData";
import globalBazaarList from "../../menuLists/globalBazaarList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import { Box } from "@mui/material";

function index() {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "line",
      data: usa,
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
  }, []);

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
        path="usa"
        mainContent={BodyContent}
      />
    </>
  );
}

export default index;
