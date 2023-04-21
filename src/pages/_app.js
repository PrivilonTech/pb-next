import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import "@/styles/globals.css";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Pane from "@/Components/Pane/Pane";
import AuthModal from "@/Components/Header/AuthModal";
import { ModalProvider } from "@/Components/ModalProvider/ModalProvider";
import UserProfile from "@/Components/UserProfile/UserProfile";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const firstString = "/" + router.pathname.split("/")[1];
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ModalProvider>
      {/* <UserProfile /> */}
      <AuthModal />
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
    </ModalProvider>
  );
}
