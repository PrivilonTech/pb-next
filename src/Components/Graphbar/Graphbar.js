import React from "react";
import Pane from "@/Components/Pane/Pane";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import Chart from "chart.js/auto";

function Graphbar({ path }) {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 2,
          },
        ],
      },
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
            <canvas ref={chartRef} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Graphbar;
