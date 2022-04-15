import { FooterContainer, FooterLeft, FooterRight } from './footer.styles';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterLeft>&copy; {currentYear} Mingjie Jiang</FooterLeft>

      <FooterRight>Built in Austin, TX.</FooterRight>
    </FooterContainer>
  );
};