import Link from 'next/link';
import { SidebarNavigationContainer } from './sidebar-navigation.styles';

interface Props {
  url: string;
  text: string;
  children?: React.ReactNode;
}

export const SidebarNavigation = ({ url, text, children }: Props) => (
  <SidebarNavigationContainer>
    <Link href={url}>
      <a>&larr; {text}</a>
    </Link>
    {children}
  </SidebarNavigationContainer>
);
