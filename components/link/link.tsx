// implementation inspired by @pacocoursey
// https://github.com/pacocoursey/paco/blob/master/components/link/index.js

import NextLink from 'next/link';

interface Props {
  href: string;
  external?: boolean;
  as?: string;
  passHref?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Link = ({
  external,
  as,
  href,
  passHref,
  className,
  children,
  ...props
}: Props) => {
  if (external) {
    return (
      <a
        className={className}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <>
      <NextLink href={href} as={as} passHref={passHref}>
        {passHref ? (
          children
        ) : (
          <a className={className} {...props}>
            {children}
          </a>
        )}
      </NextLink>
    </>
  );
};
