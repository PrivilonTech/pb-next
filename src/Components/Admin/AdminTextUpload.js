import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import secureLocalStorage from "react-secure-storage";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { toast } from "react-hot-toast";

import Button from "../Button/Button";
import Input from "../Register/Input";

export default function AdminTextUpload({ path, setDataChange }) {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();

  const futureTrendPath = router.pathname.startsWith("/future-trend");
  const pressReleasePath = router.pathname.startsWith("/press-release");

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [bodyDate, setBodyDate] = useState("");

  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [fileLoading, setFileLoading] = useState(false);

  const userLoggedIn = secureLocalStorage.getItem("user");
  const [adminPanel, setAdminPanel] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);
  const [backTickclick, setBackTickClick] = useState(false);
  const [headingClick, setHeadingClick] = useState(false);
  const [boldClick, setBoldClick] = useState(false);
  const [bulletClick, setBulletClick] = useState(false);

  const textAreaRef = useRef(null);

  useEffect(() => {
    if (userLoggedIn) {
      setIsAdmin(userLoggedIn?.role === "admin");
    }
  }, [userLoggedIn]);

  //highlight
  const handleHightlight = () => {
    setBody(body + "`" + "`");
    setBackTickClick((prev) => !prev);
  };

  //bold
  const handleBulletClick = () => {
    setBody(body + "*  ");
    setBulletClick((prev) => !prev);
  };

  //bold
  const handleBold = () => {
    setBody(body + "**" + "**");
    setBoldClick((prev) => !prev);
  };

  //heading
  const handleHeading = () => {
    setBody(body + "# ");
    setHeadingClick((prev) => !prev);
  };

  //highlight useEffect
  useEffect(() => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.selectionStart = body.length;
      textarea.selectionEnd = body.length - 1;
      textAreaRef.current.focus();
    }
  }, [backTickclick]);

  //bullet useEffect
  useEffect(() => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.selectionStart = body.length;
      textarea.selectionEnd = body.length - 1;
      textAreaRef.current.focus();
    }
  }, [bulletClick]);

  //bold useEffect
  useEffect(() => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.selectionStart = body.length;
      textarea.selectionEnd = body.length - 2;
      textAreaRef.current.focus();
    }
  }, [boldClick]);

  //heading useEffect
  useEffect(() => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.selectionStart = body.length;
      textAreaRef.current.focus();
    }
  }, [headingClick]);

  // FILE UPLOAD
  const handleFileUpload = async () => {
    setFileLoading(true);
    try {
      const formData = new FormData();

      // loop over files and add to formData
      formData.append("file", file);

      const response = await axios.post(
        "https://polymerbazar-be.onrender.com/api/upload",
        formData
      );

      setFileUrl(response.data.url);
      toast.success("File Uploaded Successfully");

      setFileLoading(false);
    } catch (error) {
      toast.error("Something went wrong");

      setFileLoading(false);
      console.log(error);
    }
  };

  //BLOG POST
  const handleSendData = async () => {
    if (!title || !body || !bodyDate) {
      return toast.error("Please enter data in all fields");
    }

    const selectedDate = new Date(bodyDate);
    const formatedDate =
      selectedDate.toISOString().slice(0, 10) + "T00:00:00.000Z";

    const bodyContent = {
      type: path,
      title: title,
      blogContent: body,
      date: formatedDate,
      attachment: fileUrl,
    };
    setIsLoading(true);

    try {
      await axios.post(
        "https://polymerbazar-be.onrender.com/api/blogs",
        bodyContent
      );

      toast.success("Data Uploaded");
      setAdminPanel(false);
      setDataChange((prev) => !prev);
      setIsLoading(false);

      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      setIsLoading(false);
    }
  };

  const reset = () => {
    setTitle("");
    setBody("");
    setBodyDate("");
    setFile(null);
    setFileUrl("");
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "2em",
        borderBottom: "2px solid #e3e5e8",
      }}
    >
      {adminPanel ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2em",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: ".5em",
              }}
            >
              <Typography sx={{ fontSize: "2rem" }}>Title</Typography>
              <Input
                type="text"
                placeholder="Please enter blog title"
                setState={setTitle}
              />
            </Box>
            <Box
              sx={{
                marginTop: "1em",
                display: "flex",
                justifyContent: { xs: "space-between", sm: "space-around" },
                flexWrap: "wrap",
                width: "90%",
              }}
            >
              <Button
                label="Heading"
                small
                outline
                noShadow
                onClick={handleHeading}
              />
              <Button
                label="Bold"
                small
                outline
                noShadow
                onClick={handleBold}
              />
              <Button
                label="Highlight"
                small
                outline
                noShadow
                onClick={handleHightlight}
              />
              <Button
                label="Bullet"
                small
                outline
                noShadow
                onClick={handleBulletClick}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
              <Typography sx={{ fontSize: "2rem" }}>Data</Typography>
              <textarea
                ref={textAreaRef}
                value={body}
                cols="30"
                placeholder="Please enter body content"
                rows="10"
                style={{
                  padding: ".75em",
                  outline: "none",
                  fontFamily: "Poppins",
                  border: "2px solid #d7dbd8",
                  color: "#2d333a",
                  borderRadius: "7px",
                  resize: "vertical",
                  fontSize: ".9rem",
                  width: "90%",
                }}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent:
                  futureTrendPath || pressReleasePath
                    ? "flex-start"
                    : "space-around",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5em",
                  width: futureTrendPath || pressReleasePath ? "50%" : "100%",
                }}
              >
                <Typography sx={{ fontSize: "2rem" }}>Calendar</Typography>
                <input
                  type="date"
                  value={bodyDate}
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
                  onChange={(e) => setBodyDate(e.target.value)}
                />
              </Box>
              {(futureTrendPath || pressReleasePath) && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".5em",
                    width: futureTrendPath || pressReleasePath ? "50%" : "100%",
                  }}
                >
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
              )}
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: ".5em" }}>
            <Button
              label="Close"
              onClick={() => setAdminPanel(false)}
              loading={isLoading}
              outline
              noShadow
            />
            <Button
              label="Submit"
              onClick={handleSendData}
              loading={isLoading}
            />
          </Box>
        </Box>
      ) : (
        <Button
          label="Admin Panel"
          small={upMd}
          onClick={() => setAdminPanel(true)}
        />
      )}
    </Box>
  );
}
