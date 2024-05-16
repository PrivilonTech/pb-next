import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <>
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/icon-192x192.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}
