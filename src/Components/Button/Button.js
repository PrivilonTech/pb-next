import React from "react";
import { Typography } from "@mui/material";
import { ClipLoader } from "react-spinners";

export default function Button({ onClick, label, isLoading }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#C31815",
        boxShadow: "0px 8px 22px rgba(74, 58, 255, 0.26)",
        borderRadius: "7px",
        color: "white",
        border: "none",
        padding: ".75em .5em",
        width: "100%",
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
