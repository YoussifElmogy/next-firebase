import React from "react";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { fetchProducts } from "@/services/products"; // Update the import
import Head from "next/head";
import Link from "next/link";

const Landing = ({ products }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <div>
        {<h1>{products.total}</h1>}{" "}
        <h1 style={{ color: primaryColor }}>{t("home.home")}</h1>
        <h2 style={{ color: secondaryColor }}>Secondary Color Text</h2>{" "}
        <Link href="/test">Test!!</Link>
        <Link href="/categories">Categories</Link>
      </div>
    </>
  );
};
export async function getStaticProps() {
  const products = await fetchProducts(); // Use the fetchProducts function
  return {
    props: {
      products,
    },
  };
}
export default Landing;
