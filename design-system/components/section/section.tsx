import {
  SectionContainer,
  SectionHeader,
  SectionContent,
} from './section.styles';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ title, children }: Props) => (
  <SectionContainer>
    <SectionHeader>{title}</SectionHeader>
    <SectionContent>{children}</SectionContent>
  </SectionContainer>
);
