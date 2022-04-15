import { HeaderContainer, HeaderSubtitle, HeaderTitle } from './header.styles';

interface Props {
  title?: string;
  subtitle?: string | React.ReactNode;
}

export const Header = ({ title, subtitle }: Props) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderSubtitle>{subtitle}</HeaderSubtitle>
    </HeaderContainer>
  );
};
