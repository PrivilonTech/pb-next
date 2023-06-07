import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-hot-toast";
import axios from "axios";

import Input from "../Register/Input";
import Button from "../Button/Button";

export default function AdminEventUpload({ setDataChange }) {
  const userLoggedIn = secureLocalStorage.getItem("user");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [eventName, setEventName] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [link, setLink] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userLoggedIn) {
      setIsAdmin(userLoggedIn?.role === "admin");
    }
  }, [userLoggedIn]);

  const handleAddEvent = async () => {
    if (!eventName || !duration || !location || !link) {
      return toast.error("Please fill all required fields!");
    }

    const body = {
      name: eventName,
      location,
      duration,
      site: link,
    };

    try {
      setIsLoading(true);
      await axios.post("https://polymerbazar-be.onrender.com/api/events", body);

      toast.success("Event added successfully");
    } catch (error) {
      console.log(error);

      setIsLoading(false);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
      resetValues();
      setIsOpen(false);
      setDataChange((prev) => !prev);
    }
  };

  const resetValues = () => {
    setEventName("");
    setDuration("");
    setLocation("");
    setLink("");
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <>
      {isOpen ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2em",
            ml: "3em",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
              <Typography sx={{ fontSize: "1.2rem" }}>Event Name</Typography>
              <Input
                placeholder="Please enter event name"
                setState={setEventName}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
              <Typography sx={{ fontSize: "1.2rem" }}>
                Event Duration
              </Typography>
              <Input
                placeholder="Please enter event duration"
                setState={setDuration}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
              <Typography sx={{ fontSize: "1.2rem" }}>
                Event Location
              </Typography>
              <Input
                placeholder="Please enter event location"
                setState={setLocation}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
              <Typography sx={{ fontSize: "1.2rem" }}>Event Link</Typography>
              <Input placeholder="Please enter event link" setState={setLink} />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: ".5em", width: "95%" }}>
            <Button
              label="Close"
              onClick={() => setIsOpen(false)}
              loading={isLoading}
              outline
              noShadow
            />
            <Button
              label="Submit"
              onClick={handleAddEvent}
              loading={isLoading}
            />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "1.5em",
          }}
        >
          <Button label="Admin Panel" small onClick={() => setIsOpen(true)} />
        </Box>
      )}
    </>
  );
}
