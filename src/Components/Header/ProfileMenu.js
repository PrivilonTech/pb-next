import React from "react";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import secureLocalStorage from "react-secure-storage";

import firebaseApp from "@/firebase/clientApp";
import ProfileItem from "./ProfileItem";

export default function ProfileMenu({ setIsUserProfileModalOpen }) {
  const router = useRouter();
  const auth = getAuth(firebaseApp);

  const handleLogout = async () => {
    try {
      router.push("/");
      await auth.signOut();

      setIsUserProfileModalOpen(false);
      secureLocalStorage.removeItem("user");
    } catch (error) {
      console.error("Error logging out user", error);
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "102%", md: "100%" },
        position: "absolute",
        display: "flex",
        justifyContent: "flex-end",
        top: "11vh",
        right: "50px",
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          height: { xs: "", md: "auto" },
          width: { xs: "", md: "250px" },
          borderRadius: "10px",
          background: "#FFFFFF",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <ProfileItem
            text="Profile"
            icon={AccountCircleIcon}
            onClick={() => router.push("/profile")}
          />
          <ProfileItem text="Logout" icon={LogoutIcon} onClick={handleLogout} />
        </Box>
      </Box>
    </Box>
  );
}
