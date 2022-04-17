import {
  ContentContainer,
  LayoutContainer,
  SidebarContainer,
} from './left-sidebar-layout.styles';
import { motion } from 'framer-motion';
import { LeftSidebarVariants, PageTransitionVariants } from '../../animations';
import { Footer } from '../../../components/footer';

interface Props {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export const LeftSidebarLayout = ({ sidebar, children }: Props) => (
  <LayoutContainer>
    <SidebarContainer>
      <motion.aside
        variants={LeftSidebarVariants}
        initial='hidden'
        animate='enter'
        exit='exit'
        key='sidebar'
      >
        {sidebar}
      </motion.aside>
    </SidebarContainer>
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
  </LayoutContainer>
);
