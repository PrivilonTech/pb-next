import { useState } from "react";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import DoneIcon from "@mui/icons-material/Done";
import { Box, Typography } from "@mui/material";
import secureLocalStorage from "react-secure-storage";

import Button from "../Button/Button";
import { makePayment } from "@/utils/apiCalls";
import subscriptionList from "@/menuLists/subscriptionList";
import toast from "react-hot-toast";

export default function SubscriptionCard({ tier }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const currentUser = secureLocalStorage.getItem("user");

  const handleRedirect = () => {
    router.push("/");
  };

  const handleSubscribe = async () => {
    toast.error("Payment gateway is disabled for now. Please try again later.");

    // const amount = subscriptionList[tier].price;

    // const name = currentUser?.displayName;
    // const email = currentUser?.email;

    // const plan = subscriptionList[tier].title;

    // const payload = { amount, name, email, plan };

    // try {
    //   setLoading(true);
    //   await makePayment(payload, setLoading, handleRedirect);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <Box
      sx={{
        border: "1px solid #ebebeb",
        borderRadius: "20px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25em",
          px: "1em",
          pt: "1em",
        }}
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "1.5em",
          }}
        >
          {subscriptionList[tier].title}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.85em",
            color: "gray",
          }}
        >
          {subscriptionList[tier].description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          px: "1em",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5em",
            color: "#1e1e1e",
            fontWeight: "500",
          }}
        >
          ₹{subscriptionList[tier].price.toLocaleString()}
        </Typography>
        <Typography sx={{ color: "gray", fontSize: "0.8em" }}>
          / year
        </Typography>
      </Box>

      <Box
        sx={{
          px: "1em",
        }}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ClipLoader color="#C31815" size={20} />
          </Box>
        ) : (
          <Button
            label="Select Plan"
            outline
            noShadow
            onClick={handleSubscribe}
          />
        )}
      </Box>
      <Box
        sx={{
          borderTop: "1px solid #ebebeb",
          px: "1.5em",
          py: "1em",
          display: "flex",
          flexDirection: "column",
          gap: "0.5em",
        }}
      >
        {subscriptionList[tier].data.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <DoneIcon
              fontSize="10px"
              sx={{
                color: "#00b559",
              }}
            />
            <Typography
              sx={{
                fontSize: "0.85em",
                color: "#333232",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
