import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full">
      <Head />
      <body className="h-full bg-linen text-dark font-sans text-base leading-[2]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
