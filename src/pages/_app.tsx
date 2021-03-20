import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <title>WonGames - Boilerplate</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default App;
