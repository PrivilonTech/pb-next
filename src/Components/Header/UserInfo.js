import React from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function UserInfo({ user }) {
  const router = useRouter();
  const currentUser = useCurrentUser();

  return (
    <Box
      sx={{
        display: currentUser ? "flex" : "none",
        justifyContent: "space-between",
        paddingBottom: ".75em",
      }}
    >
      <Box
        sx={{
          margin: ".5em 20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: "1.2rem" }}>Hello,</Typography>
        <Typography sx={{ fontSize: { xs: "1.3rem" }, color: "gray" }}>
          {user?.displayName}
        </Typography>
      </Box>
      <Box
        sx={{
          margin: ".5em 30px",
        }}
      >
        <img
          src={
            currentUser?.photoURL
              ? currentUser?.photoURL
              : "/Header/placeholderUser.png"
          }
          alt="profile picture"
          height={60}
          style={{
            borderRadius: "50%",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        />
      </Box>
    </Box>
  );
}
