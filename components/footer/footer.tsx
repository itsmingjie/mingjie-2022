import * as S from './footer.styles';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterLeft>&copy; {currentYear} Mingjie Jiang</S.FooterLeft>

        <S.FooterRight>Built in Austin, TX.</S.FooterRight>
      </S.FooterContent>
    </S.FooterContainer>
  );
};
