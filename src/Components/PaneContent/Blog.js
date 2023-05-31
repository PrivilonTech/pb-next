import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import MarkdownView from "react-showdown";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";
import Link from "next/link";

import Button from "../Button/Button";

export default function Blog({ data, setDataChange }) {
  const user = secureLocalStorage.getItem("user");

  const [modal, setModal] = useState(false);

  // delete comment
  const handleDeleteTweet = async (id) => {
    try {
      await axios.delete(
        `https://polymerbazar-be.onrender.com/api/blogs/${id}`
      );
      setModal(false);
      setDataChange((prev) => !prev);
      toast.success("Blog successfully deleted");
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

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
        <dialog
          open={modal}
          style={{
            width: "300px",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            position: "fixed",
            top: "40%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1em",
            }}
          >
            <Typography sx={{ fontSize: "1.2rem" }}>Are you sure?</Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button label="Cancel" onClick={() => setModal(false)} outline />
              <Button
                label="Delete"
                onClick={() => handleDeleteTweet(data._id)}
              />
            </Box>
          </Box>
        </dialog>
        <Typography sx={{ color: "#D9D9D9", textAlign: "center" }}>
          {data.title}
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {user?.role === "admin" && (
            <Box
              sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
              onClick={() => setModal(true)}
            >
              <DeleteIcon sx={{ color: "#D9D9D9" }} />
            </Box>
          )}
          {data?.attachment && (
            <Link href={data?.attachment}>
              <Typography sx={{ color: "#d9d9d9", fontSize: ".9rem" }}>
                Download PDF
              </Typography>
            </Link>
          )}
        </Box>
      </Box>
      <Box sx={{ padding: "1em 2em" }}>
        <MarkdownView markdown={data.blogContent} />
      </Box>
    </Box>
  );
}
