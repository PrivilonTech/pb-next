import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { toast } from "react-hot-toast";

import Button from "../Button/Button";
import Input from "../Register/Input";
import { isAdminCheck } from "@/utils/utilsUser";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function AdminTextUpload() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const currentUser = useCurrentUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPanel, setAdminPanel] = useState(false);

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

  const handleSendData = () => {
    setIsLoading(true);

    if (!title || !body) {
      toast.error("Please enter text in both the fields");
      setIsLoading(false);
      return;
    }

    // POST API CALL
    // Success: toast.success("Data uploaded")

    setIsLoading(false);
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
          <Box>
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
              <Typography sx={{ fontSize: "2rem" }}>Data</Typography>
              <Input
                type="text"
                placeholder=""
                setState={setBody}
                largeHeight
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
        <Button label="Admin Panel" small onClick={() => setAdminPanel(true)} />
      )}
    </Box>
  );
}
