import React, { useState, useEffect } from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import { getUserByUID } from "@/utils/utilsUser";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function UserInfo() {
  const router = useRouter();
  const currentUser = useCurrentUser();
  const [fetchedUser, setFetchedUser] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const fetchedUser = await getUserByUID(currentUser?.uid);
      setFetchedUser(fetchedUser);
    };

    getUserInfo();
  }, [currentUser]);

  console.log(fetchedUser?.displayName);

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
          margin: ".5em 3em",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography>{fetchedUser?.displayName}</Typography>
        {fetchedUser?.subscribed ? (
          <Typography
            sx={{ fontSize: { xs: ".7rem", sm: ".85rem" }, color: "gray" }}
          >
            You are now a member
          </Typography>
        ) : (
          <Typography
            sx={{ fontSize: { xs: ".7rem", sm: ".85rem" }, color: "gray" }}
            onClick={() => router.push("/subscription")}
          >
            View subscription plans
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          margin: ".5em 3em",
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
