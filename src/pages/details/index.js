import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CountryDropdown } from "react-country-region-selector";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

import Input from "@/Components/Register/Input";
import useRegisterInfo from "@/hooks/useRegisterInfo";
import Button from "@/Components/Button/Button";

import {
  updateUserInfoByEmail,
  updateUserInfoByPhone,
} from "@/utils/utilsUser";

export default function index() {
  const router = useRouter();

  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+91 ");
  const [email, setEmail] = useState("");

  const { inputs } = useRegisterInfo();

  const [loading, setLoading] = useState(false);

  const handleAddUserInformation = async () => {
    if (inputs.email) {
      await updateUserInfoByEmail(
        inputs.email,
        {
          company,
          location,
          phoneNumber,
        },
        setLoading
      );
    } else if (inputs.phone) {
      await updateUserInfoByPhone(
        inputs.phone,
        {
          company,
          location,
          email,
        },
        setLoading
      );
    }

    router.push("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: { xs: "100%", sm: "auto" },
          width: { xs: "100%", sm: "500px" },
          background: "#FFFFFF",
          padding: "2em",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: "3em",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <Typography
            sx={{
              marginTop: "1em",
              fontSize: "2rem",
              textAlign: "center",
              color: "#2d333a",
              fontWeight: "600",
            }}
          >
            Please fill up these details
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: ".25em" }}>
            <Typography sx={{ color: "#2d333a", fontSize: ".95rem" }}>
              Company Name
            </Typography>
            <Input placeholder="e.g: ABC Enterprise" setState={setCompany} />
          </Box>
          {!inputs.email && (
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: ".25em" }}
            >
              <Typography sx={{ color: "#2d333a", fontSize: ".95rem" }}>
                Email
              </Typography>
              <Input
                type="email"
                placeholder="e.g: xyz@gmail.com"
                setState={setEmail}
              />
            </Box>
          )}
          {!inputs.phone && (
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: ".25em" }}
            >
              <Typography sx={{ color: "#2d333a", fontSize: ".95rem" }}>
                Phone Number
              </Typography>
              <Input
                type="tel"
                placeholder="e.g: +91 XXXXX XXXXX"
                setState={setPhoneNumber}
              />
            </Box>
          )}
          <Box sx={{ display: "flex", flexDirection: "column", gap: ".25em" }}>
            <Typography sx={{ color: "#2d333a", fontSize: ".95rem" }}>
              Location
            </Typography>
            <CountryDropdown
              value={location}
              onChange={(value) => setLocation(value)}
              style={{
                padding: ".75em",
                outline: "none",
                border: "2px solid #d7dbd8",
                color: "#2d333a",
                borderRadius: "7px",
                fontSize: "1rem",
                width: "95%",
              }}
            />
          </Box>
        </Box>
        <Button
          label="Submit"
          onClick={handleAddUserInformation}
          isLoading={loading}
        />
      </Box>
    </Box>
  );
}
