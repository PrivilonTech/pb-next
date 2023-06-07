import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-hot-toast";
import axios from "axios";

import Button from "../Button/Button";

export default function AdminCarouselUpload({ setDataChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileLoading, setFileLoading] = useState(false);

  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const userLoggedIn = secureLocalStorage.getItem("user");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (userLoggedIn) {
      setIsAdmin(userLoggedIn?.role === "admin");
    }
  }, [userLoggedIn]);

  const handleFileUpload = async () => {
    if (!file) {
      return toast.error("Please attatch a file for file upload.");
    }

    try {
      setFileLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "https://polymerbazar-be.onrender.com/api/carousels/upload",
        formData
      );

      setFileUrl(response.data.imageUrl);
      toast.success("File Uploaded");
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
      setFileLoading(false);
    } finally {
      setFileLoading(false);
    }
  };

  const handleCarouoselUpload = async () => {
    if (!fileUrl) {
      return null;
    }
    try {
      setIsLoading(true);

      const body = {
        imageUrl: fileUrl,
      };
      await axios.post(
        "https://polymerbazar-be.onrender.com/api/carousels",
        body
      );
      successOperation();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
      setFileUrl("");
    }
  };

  const successOperation = () => {
    toast.success("Carousel uploaded successfully!");
    setIsOpen(false);
    setFile(null);
    setDataChange((prev) => !prev);
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <>
      {isOpen ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
            <Typography sx={{ fontSize: "2rem" }}>Attatchment</Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <input
                type="file"
                style={{
                  padding: ".75em",
                  outline: "none",
                  fontFamily: "Poppins",
                  border: "2px solid #d7dbd8",
                  color: "#2d333a",
                  borderRadius: "7px",
                  fontSize: ".9rem",
                  width: "90%",
                }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <Button
                label={fileUrl ? "Uploaded" : "Upload"}
                onClick={handleFileUpload}
                disabled={fileUrl ? true : false}
                small
                isLoading={fileLoading}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: ".5em" }}>
            <Button
              label="Close"
              onClick={() => setIsOpen(false)}
              loading={isLoading}
              outline
              noShadow
            />
            <Button
              label="Submit"
              onClick={handleCarouoselUpload}
              loading={isLoading}
            />
          </Box>
        </Box>
      ) : (
        <Button label="Admin Panel" onClick={() => setIsOpen(true)} />
      )}
    </>
  );
}
