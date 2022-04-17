import { Footer } from '../../../components/footer';
import { ContentContainer } from './single-layout.styles';
import { motion } from 'framer-motion';
import { PageTransitionVariants } from '../../animations';

interface Props {
  children: React.ReactNode;
}

export const SingleLayout = ({ children }: Props) => (
  <>
    <ContentContainer>
      <motion.main
        variants={PageTransitionVariants}
        initial='hidden'
        animate='enter'
        exit='exit'
        key='main'
      >
        {children}
        <Footer />
      </motion.main>
    </ContentContainer>
  </>
);
