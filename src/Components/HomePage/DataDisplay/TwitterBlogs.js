import React, { useState } from "react";
import { Box } from "@mui/material";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import LoadingTweets from "@/Components/Loading/LoadingTweets";

export default function TwitterBlogs({ wideScreen }) {
  const [loading, setLoading] = useState(true);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%",
          lg: wideScreen ? "100%" : "60%",
          xl: wideScreen ? "100%" : "55%",
        },
      }}
    >
      {loading && <LoadingTweets wideScreen={wideScreen} />}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="POLYMERBAZAAR"
        options={{ height: wideScreen ? 1200 : 800, width: "100%" }}
        onLoad={() => setLoading(false)}
        onLoadSuccess={() => setLoading(false)}
      />
    </Box>
  );
}
