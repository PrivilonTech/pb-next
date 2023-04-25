import React from "react";
import { Box } from "@mui/material";
import Chart from "chart.js/auto";

import { naptha } from "@/dummyData/data";
import crudeList from "../../menuLists/crudeList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";
import axios from "axios";

function index(response) {
  console.log(response);
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "line",
      data: naptha,
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
        title="Crude"
        list={crudeList}
        page="crude"
        path="naptha"
        mainContent={BodyContent}
      />
    </>
  );
}

export default index;
