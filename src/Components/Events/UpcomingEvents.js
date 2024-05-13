import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import secureLocalStorage from "react-secure-storage";

import EmptyData from "../PaneContent/EmptyData";
import BlogContent from "../PaneContent/BlogContent";
import AdminTextUpload from "../Admin/AdminTextUpload";

export default function UpcomingEvents({ data, setDataChange, isLoading }) {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");

  const userLoggedIn = secureLocalStorage.getItem("user");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(userLoggedIn.role === "admin");
  }, []);

  return (
    <Box sx={{ mt: "2em" }}>
      <Typography sx={{ textAlign: "center", fontSize: "2rem" }}>
        Upcoming Events
      </Typography>

      <Box
        sx={{
          margin: { xs: "2em 4em", md: "2em 4em" },
          display: "flex",
          flexDirection: "column",
          gap: "2em",
        }}
      >
        <AdminTextUpload path="events" setDataChange={setDataChange} isEvent />
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", my: "5em" }}>
            <ClipLoader color="#C31815" size={30} />
          </Box>
        ) : data.length === 0 ? (
          <EmptyData />
        ) : (
          <BlogContent data={data} setDataChange={setDataChange} />
        )}
      </Box>
    </Box>
  );
}
