import React from "react";
import { Box } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function TogglePassword({ showPassword, setShowPassword }) {
  return (
    <Box
      sx={{
        position: "absolute",
        right: "35px",
        top: "13px",
        cursor: "pointer",
      }}
      onClick={() => {
        setShowPassword((prev) => !prev);
      }}
    >
      {showPassword ? (
        <VisibilityIcon sx={{ fontSize: "1.25em", color: "#2d333a" }} />
      ) : (
        <VisibilityOffIcon sx={{ fontSize: "1.25em", color: "#2d333a" }} />
      )}
    </Box>
  );
}
