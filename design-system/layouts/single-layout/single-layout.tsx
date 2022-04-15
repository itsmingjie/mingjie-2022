import { Footer } from '../../../components/footer';
import { ContentContainer } from './single-layout.styles';

interface Props {
  children: React.ReactNode;
}

export const SingleLayout = ({ children }: Props) => (
  <>
    <ContentContainer>
      {children}
      <Footer />
    </ContentContainer>
  </>
);
