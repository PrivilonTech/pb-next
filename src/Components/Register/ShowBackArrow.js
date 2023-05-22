import React from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import secureLocalStorage from "react-secure-storage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { isAdminCheck, isTrial } from "@/utils/utilsUser";

export default function ShowBackArrow() {
  const router = useRouter();
  const userLoggedIn = secureLocalStorage.getItem("user");

  const handleRouteChange = () => {
    if (
      !userLoggedIn ||
      !isAdminCheck(userLoggedIn) ||
      !isTrial(userLoggedIn)
    ) {
      router.push("/");
      return;
    }

    router.back();
  };

  return (
    <Box
      onClick={handleRouteChange}
      sx={{
        position: "absolute",
        top: "30px",
        left: { xs: "20px", md: "50px" },
        cursor: "pointer",
      }}
    >
      <ArrowBackIcon sx={{ color: "#1e1e1e", fontSize: 30 }} />
    </Box>
  );
}
