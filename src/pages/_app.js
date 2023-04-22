import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import "@/styles/globals.css";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Pane from "@/Components/Pane/Pane";
import { ModalProvider } from "@/Components/ModalProvider/ModalProvider";
import ProfileMenu from "@/Components/ProfileMenu/ProfileMenu";
import AuthGuard from "@/Components/AuthGuard/AuthGuard";
import Loading from "@/Components/Loading/Loading";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const firstString = "/" + router.pathname.split("/")[1];
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  const isAuthPage = router.pathname === "/register";

  return (
    <AuthGuard>
      <ModalProvider>
        <Loading>
          <ProfileMenu />
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
          {!isAuthPage && <Footer />}
        </Loading>
      </ModalProvider>
    </AuthGuard>
  );
}
