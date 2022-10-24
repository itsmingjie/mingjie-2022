import { HeaderContainer, HeaderSubtitle } from './header.styles';

interface Props {
  title?: string;
  subtitle?: string | React.ReactNode;
}

export const Header = ({ title, subtitle }: Props) => {
  return (
    <HeaderContainer>
      <h1 className='font-sans-black text-xl text-light'>{title}</h1>
      <HeaderSubtitle>{subtitle}</HeaderSubtitle>
    </HeaderContainer>
  );
};
