import React from "react";
import { Box, Typography } from "@mui/material";

import indianBazaarList from "../../../menuLists/indianBazaarList";
import Sidebar from "@/Components/Graphbar/Sidebar";
import DataContainer from "@/Components/DataContainer/DataContainer";
import indianBazaarData from "@/dummyData/indianBazaarData";

export default function IndianBazaar() {
  return (
    <>
      <Box
        sx={{
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
            Indian Bazaar
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
            <Sidebar list={indianBazaarList} category="indian bazaar" />
          </Box>
          <Box
            sx={{
              marginTop: ".7em",
              marginLeft: { md: "1em" },
              width: { xs: "100%", md: "85%" },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "2em",
            }}
          >
            {/* CONTENT HERE */}
            {indianBazaarData.map((data) => (
              <DataContainer
                key={data.id}
                title={data.title}
                listItem={data.listItem}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
