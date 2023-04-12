import React from "react";
import Pane from "@/Components/Pane/Pane";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import Chart from "chart.js/auto";

function Graphbar({ path, data }) {
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
          height: { xs: "50vh", md: "80vh" },
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

              padding: "10px",
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
              height: { xs: "20%", md: "100%" },

              overflowX: { xs: "scroll", md: "hidden" },
              marginRight: "10px",
            }}
          >
            <Sidebar path={path} />
          </Box>
          <Box
            sx={{
              width: { sm: "100%", md: "85%" },
              height: { xs: "70%", md: "100%" },
            }}
          >
            <canvas style={{ marginTop: "10vh" }} ref={chartRef} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Graphbar;
