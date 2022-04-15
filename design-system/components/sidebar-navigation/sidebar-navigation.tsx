import Link from 'next/link';
import { SidebarNavigationContainer } from './sidebar-navigation.styles';

interface Props {
  url: string;
  text: string;
}

export const SidebarNavigation = ({ url, text }: Props) => (
  <SidebarNavigationContainer>
    <Link href={url}>
      <a>&larr; {text}</a>
    </Link>
  </SidebarNavigationContainer>
);
