import { Toaster } from "@/components/ui";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pinances</title>
      </Head>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
