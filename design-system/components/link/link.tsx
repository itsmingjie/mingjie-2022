// implementation inspired by @pacocoursey
// https://github.com/pacocoursey/paco/blob/master/components/link/index.js

import NextLink from 'next/link';

interface Props {
  href: string;
  as?: string;
  passHref?: boolean;
  children: React.ReactNode;
}

export const Link = ({ as, href, passHref, children, ...props }: Props) => {
  const isExternalLink = (url: string) => {
    return new URL(url).origin !== window.location.origin;
  };

  if (isExternalLink(href)) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' {...props}>
        {children}
      </a>
    );
  }

  return (
    <>
      <NextLink href={href} as={as} passHref={passHref}>
        {passHref ? children : <a {...props}>{children}</a>}
      </NextLink>
    </>
  );
};
