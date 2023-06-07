import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import secureLocalStorage from "react-secure-storage";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-hot-toast";
import axios from "axios";

import Button from "../Button/Button";
import AdminEventUpload from "../Admin/AdminEventUpload";

export default function UpcomingEvents({ data, setDataChange }) {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");

  const userLoggedIn = secureLocalStorage.getItem("user");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(userLoggedIn.role === "admin");
  }, []);

  const handleDeleteEvent = async () => {
    if (!id) {
      return;
    }

    try {
      await axios.delete(
        `https://polymerbazar-be.onrender.com/api/events/${id}`
      );
      toast.success("Event deleted successfully");
      setModal(false);
      setDataChange((prev) => !prev);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setId("");
    }
  };

  const handleModalState = (id) => {
    setModal(true);
    setId(id);
  };

  return (
    <Box sx={{ mt: "2em" }}>
      <Typography sx={{ textAlign: "center", fontSize: "2rem" }}>
        Upcoming Events
      </Typography>
      <Box sx={{ m: { xs: "1em .5em", sm: "1em 3em" } }}>
        <table>
          <>
            <thead>
              <tr>
                <th style={{ display: "flex", justifyContent: "space-evenly" }}>
                  <Typography>Event Name</Typography>
                </th>
                <th>
                  <Typography>Date</Typography>
                </th>
                <th>
                  <Typography>Location</Typography>
                </th>
                <th>
                  <Typography>Links</Typography>
                </th>
                {isAdmin && <th></th>}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <>
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
                      <Typography sx={{ fontSize: "1.2rem" }}>
                        Are you sure?
                      </Typography>
                      <Box sx={{ display: "flex", gap: "10px" }}>
                        <Button
                          label="Cancel"
                          onClick={() => setModal(false)}
                          outline
                        />
                        <Button label="Delete" onClick={handleDeleteEvent} />
                      </Box>
                    </Box>
                  </dialog>
                  <tr key={item._id}>
                    <td>
                      <Typography>{item.name}</Typography>
                    </td>
                    <td>
                      <Typography>{item.duration}</Typography>
                    </td>
                    <td>
                      <Typography>{item.location}</Typography>
                    </td>
                    <td>
                      {item.site && (
                        <Link href={item.site}>
                          <Typography
                            sx={{
                              textAlign: "center",
                              color: "#008ff7",
                              textDecoration: "none",
                              "&:hover": { textDecoration: "underline" },
                            }}
                          >
                            View Site
                          </Typography>
                        </Link>
                      )}
                    </td>
                    {isAdmin && (
                      <td>
                        <Box
                          onClick={() => handleModalState(item._id)}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <DeleteIcon
                            sx={{
                              color: "#1e1e1e",
                              fontSize: "1.3rem",
                              cursor: "pointer",
                            }}
                          />
                        </Box>
                      </td>
                    )}
                  </tr>
                </>
              ))}
            </tbody>
          </>
        </table>
      </Box>
      <AdminEventUpload setDataChange={setDataChange} />
    </Box>
  );
}
