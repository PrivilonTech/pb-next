import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Box } from "@mui/material";

export default function Graph({ data, leftSpacing, onClick, small }) {
  const chartRef = useRef(null);

  useEffect(() => {
    let delayed;

    const chart = new Chart(chartRef.current, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tension: 0.4,
        fill: true,
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === "data" &&
              context.mode === "default" &&
              !delayed
            ) {
              delay = context.dataIndex * 40 + context.datasetIndex * 150;
            }
            return delay;
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        pointRadius: 0,
        pointHoverRadius: 0,
        pointBackgroundColor: "#fff",
        radius: 3,
        hoverRadius: 5,
        scales: {
          x: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <Box
      onClick={onClick}
      sx={{
        marginLeft: leftSpacing && { md: "1em" },
        height: small ? "40vh" : "60vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",

        background: "hsla(180, 27%, 94%, 1)",
        backgroundImage:
          "radial-gradient(circle, hsla(180, 27%, 94%, 1) 0%, hsla(0, 0%, 100%, 1) 80%)",
        MozBackgroundImage:
          "radial-gradient(circle, hsla(180, 27%, 94%, 1) 0%, hsla(0, 0%, 100%, 1) 80%)",
        WebkitBackgroundImage:
          "radial-gradient(circle, hsla(180, 27%, 94%, 1) 0%, hsla(0, 0%, 100%, 1) 80%)",
        filter:
          "progid:DXImageTransform.Microsoft.gradient(startColorstr='#EAF3F3', endColorstr='#FFFFFF', GradientType=1)",
      }}
    >
      <canvas ref={chartRef} />
    </Box>
  );
}
