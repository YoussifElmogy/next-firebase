import { ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import "../src/styles/font.css";
import Layout from "@/components/layout/layout";
import Loader from "@/components/loader/loader";
import "../src/configs/i18n";
function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoading && <Loader />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
