import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import indianBazaarList from "../../../menuLists/indianBazaarList";
import DropDown from "../DropDown/DropDown";
import Sidebar from "../Graphbar/Sidebar";
import DataContainer from "../DataContainer/DataContainer";

export default function IndianBazaarContent({ indianBazdataaarData, path }) {
  const router = useRouter();

  return (
    <Box
      sx={{
        p: "5%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: { xs: "10%", md: "6%" },
          borderRadius: "20px",

          border: "1px solid #D9232A",
          marginBottom: "10px",
        }}
      >
        <Typography
          sx={{
            color: "#575757",
            padding: "5px 25px",
            width: { sm: "15%", md: "9.5%" },
            borderRight: "1px solid #D9232A",
          }}
        >
          Indian Bazaar
        </Typography>
        <DropDown data={indianBazdataaarData.subCategory} />
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
          <Sidebar list={indianBazaarList} page="indian-bazaar" path={path} />
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
          {indianBazdataaarData.data.map((data) => (
            <DataContainer
              key={data.id}
              title={data.title}
              listItem={data.listItem}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
