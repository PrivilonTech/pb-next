import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { getGlobalData } from "@/utils/apiCalls";
import { structureMarqueeData } from "@/utils/structureData";
import LoadingMarquee from "@/Components/Loading/LoadingMarquee";

export default function Marquee() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const [key, setKey] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    if (!loading) {
      const { key, value } = structureMarqueeData(data[0]);
      setKey(key);
      setValue(value);
    }
  }, [loading]);

  useEffect(() => {
    getGlobalData("India", 10, 2022, setData, setLoading);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingMarquee />
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "3px 0",
            borderTop: "2px solid gray",
            borderBottom: "2px solid gray",
          }}
        >
          <marquee behavior="scroll" direction="left" scrollamount="5">
            <Box
              sx={{
                display: "flex",
                gap: "1em",
              }}
            >
              {key.map((keyName, index) => (
                <Box key={index} sx={{ display: "flex", gap: ".5em" }}>
                  <Typography
                    sx={{
                      fontFamily: "Arial",
                      fontWeight: "bold",
                      color: "#C31815",
                      textTransform: "uppercase",
                    }}
                  >
                    {keyName}
                  </Typography>
                  <Typography>{value[index]}</Typography>
                </Box>
              ))}
            </Box>
          </marquee>
        </Box>
      )}
    </>
  );
}
