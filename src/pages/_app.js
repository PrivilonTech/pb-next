import { useRouter } from "next/router";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/material";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";
import Footer from "@/Components/Footer/Footer";
import TesterFooter from "@/Components/Footer/TesterFooter";
import Header from "@/Components/Header/Header";
import Pane from "@/Components/Pane/Pane";
import AuthGuard from "@/Components/AuthGuard/AuthGuard";
import Loading from "@/Components/Loading/Loading";
import { ModalProvider } from "@/Components/HomePage/ModalProvider";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const theme = useTheme();

  const fontTheme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });

  const firstString = "/" + router.pathname.split("/")[1];
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const showLayout =
    router.pathname === "/register" || router.pathname === "/subscription";

  return (
    <ModalProvider>
      <AuthGuard>
        <ThemeProvider theme={fontTheme}>
          <Toaster />
          {/* <Loading> */}
          {!showLayout && (
            // <Box sx={{ width: "100vw" }}>
            <Header />
            // </Box>
          )}
          {upMd && !showLayout && <Pane path={firstString} />}

          <Component {...pageProps} />
          {/* {!showLayout && <Footer />} */}
          {!showLayout && <TesterFooter />}
          {/* </Loading> */}
        </ThemeProvider>
      </AuthGuard>
    </ModalProvider>
  );
}
