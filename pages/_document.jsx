import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#58A6FF" />
      </Head>
      <body style={{ backgroundColor: '#0a0a0a' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
