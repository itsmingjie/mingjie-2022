import {
  ContentContainer,
  LayoutContainer,
  SidebarContainer,
} from './left-sidebar-layout.styles';

interface Props {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export const LeftSidebarLayout = ({ sidebar, children }: Props) => (
  <LayoutContainer>
    <SidebarContainer>{sidebar}</SidebarContainer>
    <ContentContainer>{children}</ContentContainer>
  </LayoutContainer>
);
