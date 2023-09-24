import "@/app/globals.css";

interface Props {
  Component: any;
  pageProps: any;
}

function App({ Component, pageProps }: Props) {
  return (
    <main className="p-8">
      <Component {...pageProps} />
    </main>
  );
}

export default App;
