import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Pane from "@/Components/Pane/Pane";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const firstString = "/" + router.pathname.split("/")[1];
  return (
    <>
      <Header />
      <Pane path={firstString} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
