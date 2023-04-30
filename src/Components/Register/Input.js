import React from "react";

export default function Input({ type, placeholder, setState, largeHeight }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        padding: ".75em",
        outline: "none",
        border: "2px solid #d7dbd8",
        color: "#2d333a",
        borderRadius: "7px",
        fontSize: "1rem",
        width: "90%",
        height: largeHeight ? "100px" : "",
      }}
      onChange={(e) => setState(e.target.value)}
    />
  );
}
