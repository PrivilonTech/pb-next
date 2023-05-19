import React, { useState } from "react";
import { Box } from "@mui/material";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import LoadingTweets from "@/Components/Loading/LoadingTweets";

export default function TwitterBlogs({ fullContent }) {
  const [loading, setLoading] = useState(true);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%",
          lg: fullContent ? "100%" : "60%",
          xl: fullContent ? "100%" : "55%",
        },
      }}
    >
      {loading && <LoadingTweets />}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="POLYMERBAZAAR"
        options={{ height: !fullContent && 1200, width: "100%" }}
        onLoad={() => setLoading(false)}
        onLoadSuccess={() => setLoading(false)}
      />
    </Box>
  );
}
