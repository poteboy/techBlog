import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles';
import Head from 'next/head';
import { CategoryProvider } from '@src/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ケンコウイチバン</title>
        <meta
          name='description'
          content='ケンコウイチバンは日々の暮らしをより健康に過ごすためのお役立ち情報を発信する総合メディアです。'
        />
        {/* OGP */}
        <meta property='og:locale' content='ja_JP' />
        <meta property='og:site_name' content='ケンコウイチバン' />
        {/* <meta property="og:url" content="https://poteboy.com/" /> */}
        <meta property='og:title' content='ケンコウイチバン' />
        {/* Favicon */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={require('@src/public/favicons/apple-touch-icon.png')}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href={require('@src/public/favicons/favicon-32x32.png')}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={require('@src/public/favicons/favicon-16x16.png')}
        />
        {/* <link
          rel="manifest"
          href={require('@src/public/favicons/site.webmanifest')}
        /> */}
        <link
          rel='mask-icon'
          href={require('@src/public/favicons/safari-pinned-tab.svg')}
          color='#000000'
        />
        <link rel='shortcut icon' href={require('@src/public/favicons/favicon.ico')} />
        <meta name='theme-color' content='#ffffff' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ChakraProvider theme={theme}>
        <CategoryProvider>
          <Component {...pageProps} />
        </CategoryProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
