import { Markdown } from '../../libs/markdown';
import { MarkdownWrapper } from './content.styles';

interface Props {
  content: string;
}

export const Content = ({ content }: Props) => {
  return (
    <MarkdownWrapper>
      <Markdown content={content} />
    </MarkdownWrapper>
  );
};
