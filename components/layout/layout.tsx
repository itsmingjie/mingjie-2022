import { Footer } from '../footer';
import { ContentContainer } from './layout.styles';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => (
  <>
    <ContentContainer>
      {children}
      <Footer />
    </ContentContainer>
  </>
);
