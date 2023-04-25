import React from "react";
import Chart from "chart.js/auto";
import { Box, Typography } from "@mui/material";

import Sidebar from "../PaneContent/Sidebar";

function Graphbar({ path, data, sideBarList, page }) {
  const chartRef = React.useRef(null);

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

  return (
    <>
      <Box
        sx={{
          height: { md: "80vh" },
          p: "5%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: "10%", md: "6%" },
            borderRadius: "20px",

            background: "#D9232A",
            marginBottom: "10px",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              padding: "5px 15px",
            }}
          >
            Crude Oil Scenario
          </Typography>
        </Box>
        <Box
          sx={{
            height: "94%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { md: "15%" },

              overflowX: { xs: "scroll", md: "hidden" },
            }}
          >
            <Sidebar path={path} list={sideBarList} page={page} />
          </Box>
          <Box
            sx={{
              marginLeft: { md: "1em" },
              height: { xs: "100%", md: "100%" },
              width: { xs: "100%", md: "85%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <canvas style={{ marginTop: "2vh" }} ref={chartRef} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Graphbar;
