import React, { useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import LoadingTweets from "@/Components/Loading/LoadingTweets";

export default function TwitterBlogs() {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const [loading, setLoading] = useState(true);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", lg: "60%", xl: "70%" },
      }}
    >
      {loading && <LoadingTweets />}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="POLYMERBAZAAR"
        options={{ height: 900, width: "100%" }}
        onLoad={() => setLoading(false)}
        onLoadSuccess={() => setLoading(false)}
      />
    </Box>
  );
}
