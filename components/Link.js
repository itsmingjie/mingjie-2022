// implementation inspired by @pacocoursey
// https://github.com/pacocoursey/paco/blob/master/components/link/index.js

import NextLink from "next/link";

export default function Link({
  external,
  as,
  href,
  passHref,
  className,
  children,
  ...props
}) {
  if (external) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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
}
