import { Html, Head, Main, NextScript } from 'next/document';
import { ThemeStyles } from '../design-system';
import { Insights } from '../design-system/utils/insights';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Archivo+Black&family=IBM+Plex+Mono:ital@0;1&family=Archivo+Narrow:ital@0;1&family=Archivo:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap'
          rel='stylesheet'
        />
        <ThemeStyles />
        <link rel='icon' href='/favicon.ico' />
        <Insights />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
