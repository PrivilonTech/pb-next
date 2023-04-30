import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { toast } from "react-hot-toast";

import Button from "../Button/Button";
import Input from "../Register/Input";
import { isAdminCheck } from "@/utils/utilsUser";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function AdminTextUpload({ path, setDataChange }) {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [bodyDate, setBodyDate] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const currentUser = useCurrentUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPanel, setAdminPanel] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const options = ["heading", "bold", "image"];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const isAdminCall = async () => {
      const response = await isAdminCheck(currentUser);

      return response;
    };

    const checkAdmin = async () => {
      if (currentUser) {
        const adminResponse = await isAdminCall();
        setIsAdmin(adminResponse);
      }
    };

    checkAdmin();
  }, [currentUser, setIsAdmin]);

  console.log(body);

  const backTick = "``";
  const [click, setClick] = useState(false);
  const textAreaRef = useRef(null);

  const handleClick = () => {
    setBody(body + "`" + "`");
    setClick((prev) => !prev);
  };

  useEffect(() => {
    const textarea = textAreaRef.current;
    if (textarea) {
      console.log(body.length);
      textarea.selectionStart = body.length;
      textarea.selectionEnd = body.length - 1;
      textAreaRef.current.focus();
    }
  }, [click]);

  const handleSendData = async () => {
    if (!title || !body || !bodyDate) {
      toast.error("Please enter text in both the fields");
      return;
    }

    const selectedDate = new Date(bodyDate);
    const formatedDate =
      selectedDate.toISOString().slice(0, 10) + "T00:00:00.000Z";

    const bodyContent = {
      type: path,
      title: title,
      blogContent: body,
      date: formatedDate,
    };
    try {
      setIsLoading(true);

      await axios.post(
        "https://polymerbazar-be.onrender.com/api/blogs",
        bodyContent
      );

      toast.success("Data Uploaded");
      setAdminPanel(false);
      setDataChange(true);
      setIsLoading(false);

      setTitle("");
      setBody("");
      setBodyDate("");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
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
            gap: "3em",
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
              <Input type="text" placeholder="" setState={setTitle} />
            </Box>
            {/* <select
              value={selectedOption}
              onChange={handleOptionChange}
              className="dropdown-select"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
                     
            </select> */}
            <button onClick={handleClick}>Heading</button>
            <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
              <Typography sx={{ fontSize: "2rem" }}>Data</Typography>
              <textarea
                ref={textAreaRef}
                value={body}
                cols="30"
                rows="10"
                style={{
                  padding: ".75em",
                  outline: "none",
                  fontFamily: "Poppins",
                  border: "2px solid #d7dbd8",
                  color: "#2d333a",
                  borderRadius: "7px",
                  resize: "none",
                  fontSize: ".9rem",
                  width: "90%",
                }}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
              <Typography sx={{ fontSize: "2rem" }}>Calender</Typography>
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
          </Box>
          <Box sx={{ display: "flex", gap: ".5em" }}>
            <Button
              label="Close"
              onClick={() => setAdminPanel(false)}
              loading={isLoading}
              outline
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
