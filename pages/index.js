import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Base Project</title>
        <link rel="icon" href="/icons/axalogo.svg" />
      </Head>
      <h2>
        Hello World!
        <Link href="/landing">Landing Page</Link>
        <Link href="/categories">Categories</Link>
      </h2>
    </Fragment>
  );
}

export default HomePage;
