import '../styles/globals.scss';
import '../styles/fonts.scss';

import { Layout } from '../components/layout';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
