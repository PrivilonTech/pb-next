import Head from "next/head";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";

import "@/styles/globals.css";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Pane from "@/Components/Pane/Pane";
import AuthGuard from "@/Components/RouteGuards/AuthGuard";
import Marquee from "@/Components/HomePage/Marquee/Marquee";
import PhoneBar from "@/Components/HomePage/PhoneBar/PhoneBar";
import ScrollTop from "@/Components/HomePage/ScrollTop/ScrollTop";
import { ModalProvider } from "@/Components/HomePage/ModalProvider";

const font = Poppins({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const theme = useTheme();
  const path = router.pathname;

  const fontTheme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });

  const firstString = "/" + path.split("/")[1];
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const [title, setTitle] = useState("");
  const showLayout =
    path === "/register" || path === "/subscription" || path === "/details";

  useEffect(() => {
    const pathSegments = path.split("/").filter((segment) => segment !== "");
    setTitle(
      path === "/"
        ? "- Home"
        : "- " +
            pathSegments[0].charAt(0).toUpperCase() +
            pathSegments[0].substring(1)
    );
  }, [path]);

  return (
    <main className={font.className}>
      <Head>
        <title>Polymer Bazaar {title}</title>
      </Head>
      <ModalProvider>
        <AuthGuard>
          <ThemeProvider theme={fontTheme}>
            <Toaster />
            <ScrollTop />
            {!showLayout && (
              <>
                <PhoneBar />
                <Header />
                {/* <Marquee /> UNCOMMENT THIS LATER */}
              </>
            )}
            {upMd && !showLayout && <Pane path={firstString} />}

            <Component {...pageProps} />
            {!showLayout && <Footer />}
          </ThemeProvider>
        </AuthGuard>
      </ModalProvider>
    </main>
  );
}
