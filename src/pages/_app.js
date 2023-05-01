import { useRouter } from "next/router";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";

import "@/styles/globals.css";
import Footer from "@/Components/Footer/Footer";
import TesterFooter from "@/Components/Footer/TesterFooter";
import Header from "@/Components/Header/Header";
import Pane from "@/Components/Pane/Pane";
import AuthGuard from "@/Components/AuthGuard/AuthGuard";
import { ModalProvider } from "@/Components/HomePage/ModalProvider";

const font = Poppins({ subsets: ["latin"], weight: "400" });

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
    <main className={font.className}>
      <ModalProvider>
        <AuthGuard>
          <ThemeProvider theme={fontTheme}>
            <Toaster />

            {!showLayout && <Header />}
            {upMd && !showLayout && <Pane path={firstString} />}

            <Component {...pageProps} />
            {!showLayout && <Footer />}
            {/* {!showLayout && <TesterFooter />} */}
          </ThemeProvider>
        </AuthGuard>
      </ModalProvider>
    </main>
  );
}
