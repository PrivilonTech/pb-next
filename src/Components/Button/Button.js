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
  disabled,
  secondaryButton,
}) {
  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "7px",

        padding: small ? ".5em .75em" : ".75em .9em",
        background: secondaryButton ? "#233444" : outline ? "white" : "#C31815",
        boxShadow: !noShadow && "0px 8px 22px rgba(74, 58, 255, 0.26)",
        color: outline ? "black" : "white",
        border: outline ? "2px solid #d5d9eb" : "none",
        width: small ? (upSm ? "20%" : "auto") : "100%",
        cursor: isLoading || disabled ? "not-allowed" : "pointer",
        opacity: isLoading || disabled ? ".5" : "1",
      }}
    >
      {isLoading ? (
        <ClipLoader color="white" size={20} />
      ) : (
        <Typography sx={{ fontWeight: 200 }}>{label}</Typography>
      )}
    </button>
  );
}
