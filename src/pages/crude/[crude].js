import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

import { getCrudeData } from "@/utils/apiCalls";
import Graph from "@/Components/PaneContent/Graph";
import Periodic from "@/Components/PaneContent/Periodic";
import PaneFooter from "@/Components/PaneContent/PaneFooter";
import { structureFeedstockData } from "@/utils/structureData";
import { crudeList, crudeStructure } from "@/menuLists/crudeList";
import PaneContentLayout from "@/Components/PaneContent/PaneContentLayout";

function Crude() {
  const router = useRouter();
  const path = router.query.crude;

  const [periodicTime, setPeriodicTime] = useState("Monthly");

  const [isAdmin, setIsAdmin] = useState(false);
  const userLoggedIn = secureLocalStorage.getItem("user");

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { displayValues, callValues } = structureFeedstockData(
    crudeStructure,
    path
  );
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    if (userLoggedIn) {
      setIsAdmin(userLoggedIn?.role === "admin");
    }
  }, [userLoggedIn]);

  useEffect(() => {
    if (path) {
      setSelectedCountry(displayValues[0]);
    }
  }, [path]);

  useEffect(() => {
    if (path) {
      getCrudeData(
        path,
        callValues[displayValues.indexOf(selectedCountry)],
        periodicTime,
        setData,
        setIsLoading,
        selectedCountry
      );
    }
  }, [periodicTime, path, selectedCountry]);

  const BodyContent = (
    <>
      <>
        {isLoading ? (
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "50vh",
            }}
          >
            <ClipLoader color="#C31815" size={30} />
          </Box>
        ) : (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Graph data={data} width="75%" />
            <Periodic
              periodicTime={periodicTime}
              setPeriodicTime={setPeriodicTime}
            />
          </Box>
        )}
      </>
    </>
  );

  return (
    <>
      <PaneContentLayout
        title="Crude & FeedStock"
        list={crudeList}
        page="crude"
        path={path}
        mainContent={BodyContent}
        dropdown={path}
        dropdownData={displayValues}
        selectedOption={selectedCountry}
        setSelectedOption={setSelectedCountry}
      />
      {isAdmin && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            margin: { xs: "-1em 1em 1.5em", md: "-1em 1em 5em" },
          }}
        >
          <Typography sx={{ color: "#7c7c7c" }}>
            Expected sheet name:{" "}
            <span style={{ fontWeight: 700 }}>{selectedCountry}</span>
          </Typography>
        </Box>
      )}
      <Box sx={{ margin: { xs: "1em 1.5em", md: "2em 5em" } }}>
        <PaneFooter qrCode={path} />
      </Box>
    </>
  );
}

export default Crude;
