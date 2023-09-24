import "@/app/globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Head from "next/head";
import parse from "html-react-parser";
import { createContext } from "react";

export const ThemeContext = createContext<{ options: any } | undefined>(
  undefined
);

interface Props {
  Component: any;
  pageProps: {
    global: any;
    seo: any;
  };
}

function App({ Component, pageProps }: Props) {
  if (!pageProps.global) {
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }

  const { themeOptions, mainMenu, footerMenu } = pageProps.global;
  const seo = pageProps.seo;

  return (
    <>
      <Head>
        <title>{seo?.title}</title>
        {seo?.fullHead ? parse(seo.fullHead) : null}
      </Head>
      <div>
        <ThemeContext.Provider value={{ options: themeOptions }}>
          <Header menu={mainMenu} />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer menu={footerMenu} />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
