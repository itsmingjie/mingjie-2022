import { Html, Head, Main, NextScript } from 'next/document';
import { ThemeStyles } from '../design-system';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=IBM+Plex+Sans+Condensed:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&family=IBM+Plex+Serif:ital@0;1&display=swap'
          rel='stylesheet'
        />
        <ThemeStyles />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
