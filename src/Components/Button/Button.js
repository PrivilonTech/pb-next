import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { ClipLoader } from "react-spinners";
import { useTheme } from "@mui/material/styles";

export default function Button({
  onClick,
  label,
  isLoading,
  small,
  outline,
  noShadow,
}) {
  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <button
      onClick={onClick}
      style={{
        background: outline ? "white" : "#C31815",
        boxShadow: !noShadow && "0px 8px 22px rgba(74, 58, 255, 0.26)",
        borderRadius: "7px",
        color: outline ? "black" : "white",
        border: outline ? "2px solid #d5d9eb" : "none",
        padding: ".75em .5em",
        width: small ? (upSm ? "20%" : "auto") : "100%",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <ClipLoader color="white" size={20} />
      ) : (
        <Typography sx={{ fontWeight: 500 }}>{label}</Typography>
      )}
    </button>
  );
}
