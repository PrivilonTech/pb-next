import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function UpcomingEvents({ data }) {
  return (
    <Box sx={{ mt: "2em" }}>
      <Typography sx={{ textAlign: "center", fontSize: "2rem" }}>
        Upcoming Events
      </Typography>
      <Box sx={{ m: "1em 3em" }}>
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
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
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
                </tr>
              ))}
            </tbody>
          </>
        </table>
      </Box>
    </Box>
  );
}
