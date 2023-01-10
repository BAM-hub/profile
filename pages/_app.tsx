import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { Direction } from "../styled/Home";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <Direction dir={locale === "en" ? "ltr" : "rtl"}>
      <Header />
      <Component {...pageProps} />
    </Direction>
  );
}
