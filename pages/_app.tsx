import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { PageTransitionVariants } from '../design-system/animations';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.main key={router.asPath}>
        <Component {...pageProps} key={router.pathname} />
      </motion.main>
    </AnimatePresence>
  );
};

export default App;
