import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Roboto } from "next/font/google";

import "@/styles/globals.css";
import Footer from "@/Components/Footer/Footer";
import TesterFooter from "@/Components/Footer/TesterFooter";
import Header from "@/Components/Header/Header";
import Pane from "@/Components/Pane/Pane";
import AuthGuard from "@/Components/AuthGuard/AuthGuard";
import Loading from "@/Components/Loading/Loading";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const theme = useTheme();
  const firstString = "/" + router.pathname.split("/")[1];
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const isAuthPage = router.pathname === "/register";

  return (
    <main className={roboto.className}>
      <AuthGuard>
        <Loading>
          {!isAuthPage && <Header />}
          {upMd
            ? !isAuthPage && <Pane path={firstString} />
            : !isAuthPage && (
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
          {/* {!isAuthPage && <Footer />} */}
          {!isAuthPage && <TesterFooter />}
        </Loading>
      </AuthGuard>
    </main>
  );
}
