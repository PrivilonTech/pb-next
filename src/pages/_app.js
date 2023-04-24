import { useRouter } from "next/router";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";
import Footer from "@/Components/Footer/Footer";
import TesterFooter from "@/Components/Footer/TesterFooter";
import Header from "@/Components/Header/Header";
import Pane from "@/Components/Pane/Pane";
import AuthGuard from "@/Components/AuthGuard/AuthGuard";
import Loading from "@/Components/Loading/Loading";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const theme = useTheme();

  const fontTheme = createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  const firstString = "/" + router.pathname.split("/")[1];
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const isAuthPage = router.pathname === "/register";

  return (
    <AuthGuard>
      <ThemeProvider theme={fontTheme}>
        <Toaster />
        <Loading>
          {!isAuthPage && <Header />}
          {upMd && !isAuthPage && <Pane path={firstString} />}

          <Component {...pageProps} />
          {/* {!isAuthPage && <Footer />} */}
          {!isAuthPage && <TesterFooter />}
        </Loading>
      </ThemeProvider>
    </AuthGuard>
  );
}
