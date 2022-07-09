import ReactMarkdown from 'react-markdown';
import RemarkParse from 'remark-parse';

import { parse } from 'yaml';
import Frontmatter from 'remark-frontmatter';
import FrontmatterExtract from 'remark-extract-frontmatter';
const frontmatterOptions = {
  yaml: parse,
  remove: true,
};

// @ts-ignore
import wikiLinkPlugin from 'remark-wiki-link';
import Link from 'next/link';
const wikilinkOptions = {
  pageResolver: (page: string) => [page],
  hrefTemplate: (permalink: string) => `/notes/${permalink}`,
  aliasDivider: '|',
};

const remarkPlugins = [
  RemarkParse,
  Frontmatter,
  [FrontmatterExtract, frontmatterOptions],
  [wikiLinkPlugin, wikilinkOptions],
];

const linkRenderer = ({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href ?? '#'}>
      <a>{children}</a>
    </Link>
  );
};

interface Props {
  content: string;
}

export const Markdown = ({ content }: Props) => {
  return (
    <ReactMarkdown
      // @ts-ignore
      remarkPlugins={remarkPlugins}
      components={{
        a: linkRenderer,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
