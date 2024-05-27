import Header from "./header/header";
import Footer from "./footer/footer";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/material";

function Layout(props) {
  const { i18n } = useTranslation();

  return (
    <div dir={i18n.dir()}>
      <Container maxWidth="xl">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </Container>
    </div>
  );
}

export default Layout;
