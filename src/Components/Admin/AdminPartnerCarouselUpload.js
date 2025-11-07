import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-hot-toast";

import Button from "../Button/Button";
import Input from "../Register/Input";
import {
  addHomepagePartnerCarousel,
  deleteHomepagePartnerCarousel,
} from "@/utils/homepageCarousel";

export default function AdminPartnerCarouselUpload({
  setDataChange,
  entries = [],
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileLoading, setFileLoading] = useState(false);

  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [link, setLink] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);

  const userLoggedIn = secureLocalStorage.getItem("user");

  useEffect(() => {
    if (userLoggedIn) {
      setIsAdmin(userLoggedIn?.role === "admin");
    }
  }, [userLoggedIn]);

  const handleFileUpload = async () => {
    if (!file) {
      toast.error("Please attach an image before uploading.");
      return;
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
      toast.success("Image uploaded successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while uploading the image");
    } finally {
      setFileLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!fileUrl || !link) {
      toast.error("Please provide both an image and a link.");
      return;
    }

    try {
      setIsLoading(true);
      await addHomepagePartnerCarousel({
        imageUrl: fileUrl,
        link: link.trim(),
      });

      toast.success("Carousel entry added");
      resetForm();
      setIsOpen(false);
      if (setDataChange) {
        setDataChange((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while saving the entry");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (entryId) => {
    if (!entryId) {
      return;
    }

    try {
      await deleteHomepagePartnerCarousel(entryId);
      toast.success("Carousel entry deleted");
      if (setDataChange) {
        setDataChange((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
      toast.error("Could not delete the entry");
    }
  };

  const resetForm = () => {
    setFile(null);
    setFileUrl("");
    setLink("");
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      {isOpen ? (
        <>
          <Box sx={{ display: "flex", flexDirection: "column", gap: ".75em" }}>
            <Typography sx={{ fontSize: "1.8rem" }}>
              Add Carousel Entry
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
              <Typography sx={{ fontSize: "1.2rem" }}>Link</Typography>
              <Input
                placeholder="https://example.com"
                setState={setLink}
                value={link}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
              <Typography sx={{ fontSize: "1.2rem" }}>Attachment</Typography>
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
                  onChange={(event) => setFile(event.target.files[0])}
                />
                <Button
                  label={fileUrl ? "Uploaded" : "Upload"}
                  onClick={handleFileUpload}
                  disabled={Boolean(fileUrl)}
                  small
                  isLoading={fileLoading}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: ".5em" }}>
            <Button
              label="Close"
              onClick={() => {
                resetForm();
                setIsOpen(false);
              }}
              loading={isLoading}
              outline
              noShadow
            />
            <Button label="Submit" onClick={handleSubmit} loading={isLoading} />
          </Box>
        </>
      ) : (
        <Button label="Links Admin Panel" onClick={() => setIsOpen(true)} />
      )}

      {entries.length > 0 && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
          <Typography sx={{ fontSize: "1.2rem" }}>
            Existing Carousel Entries
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
            {entries.map((entry) => (
              <Box
                key={entry.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid #d7dbd8",
                  borderRadius: "7px",
                  padding: ".75em 1em",
                  gap: ".75em",
                }}
              >
                <Typography
                  sx={{
                    fontSize: ".95rem",
                    maxWidth: "60%",
                    wordBreak: "break-all",
                  }}
                >
                  {entry.link}
                </Typography>
                <Button
                  label="Delete"
                  outline
                  small
                  onClick={() => handleDelete(entry.id)}
                />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
