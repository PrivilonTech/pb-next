import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from "../Register/Input";
import Button from "../Button/Button";
import { toast } from "react-hot-toast";

export default function AdminTextUpload() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendData = () => {
    setIsLoading(true);

    if (!title || !body) {
      toast.error("Please enter text in both the fields");
      setIsLoading(false);
      return;
    }

    // POST API CALL

    setIsLoading(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        width: "100%",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
          <Typography sx={{ fontSize: "2rem" }}>Title</Typography>
          <Input type="text" placeholder="" setState={setTitle} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
          <Typography sx={{ fontSize: "2rem" }}>Data</Typography>
          <Input type="text" placeholder="" setState={setBody} largeHeight />
        </Box>
      </Box>
      <Button label="Submit" onClick={handleSendData} loading={isLoading} />
    </Box>
  );
}
