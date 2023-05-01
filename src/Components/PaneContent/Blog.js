import React from "react";
import { Box, Typography } from "@mui/material";
import MarkdownView from "react-showdown";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { ModalContext } from "../HomePage/ModalProvider";

export default function Blog({ data }) {
  // delete comment
  const handleDeleteTweet = async (id) => {
    // delete api
    toast.success("Blog successfully deleted");
  };

  const { user } = useContext(ModalContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", md: "100%" },
        minHeight: "250px",
        borderRadius: "10px",
        background: "#f9e8e8",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          background: "#d9232a",
          padding: ".5em 2em",
          display: user?.role === "admin" && "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#D9D9D9", textAlign: "center" }}>
          {data.title}
        </Typography>
        {user?.role === "admin" && (
          <Box
            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            onClick={handleDeleteTweet}
          >
            <DeleteIcon sx={{ color: "#D9D9D9" }} />
          </Box>
        )}
      </Box>
      <Box sx={{ padding: "1em 2em" }}>
        <MarkdownView markdown={data.blogContent} />
      </Box>
    </Box>
  );
}
