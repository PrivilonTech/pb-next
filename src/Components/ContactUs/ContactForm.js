import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import ContactName from "./ContactName";
import ContactDetails from "./ContactDetails";
import ContactLocation from "./ContactLocation";
import Button from "../Button/Button";
import { toast } from "react-hot-toast";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const [message, setMessage] = useState("");

  const handleFormSubmit = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !company ||
      !location ||
      !message
    ) {
      toast.error("Please fill all fields");
      return;
    }
  };

  return (
    <Box
      sx={{
        padding: { xs: "0 2em", md: "0 6em" },
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Typography sx={{ fontSize: "1.1rem" }}>
        Please fill in your details below.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
        }}
      >
        <ContactName setFirstName={setFirstName} setLastName={setLastName} />
        <ContactDetails setEmail={setEmail} setPhone={setPhone} />
        <ContactLocation
          setCompany={setCompany}
          setLocation={setLocation}
          location={location}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
          <Typography>
            Enquiry Box <span style={{ color: "red" }}>*</span>
          </Typography>
          <textarea
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your enquiry"
            style={{
              padding: ".75em",
              outline: "none",
              fontFamily: "inherit",
              border: "2px solid #d7dbd8",
              color: "#2d333a",
              borderRadius: "7px",
              fontSize: "1rem",
              width: "95%",
              resize: "vertical",
            }}
          />
          <Typography sx={{ fontSize: ".8rem", color: "#1e1e1e" }}>
            <span style={{ color: "red" }}>*</span> Indicates a required field
          </Typography>
        </Box>
        <Button label="Submit" onClick={handleFormSubmit} />
      </Box>
    </Box>
  );
}
