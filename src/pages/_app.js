import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Pane from "@/Components/Pane/Pane";
import "@/styles/globals.css";
import { Height } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const firstString = "/" + router.pathname.split("/")[1];
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Header />
      {upMd ? (
        <Pane path={firstString} />
      ) : (
        <Box
          sx={{
            height: { xs: "80vh", md: "" },
            width: { xs: "100vw", md: "" },
          }}
        >
          <Pane path={firstString} />
        </Box>
      )}

      <Component {...pageProps} />
      <Footer />
    </>
  );
}
