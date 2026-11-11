import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Oreoluwa Ibikunle | Senior Software Engineer</title>
        <meta
          name="description"
          content="Senior full-stack software engineer specializing in React, Next.js, TypeScript, Node.js, and React Native. Shipping marketplaces, dashboards, LMS platforms, and production mobile apps."
        />
        <meta
          name="keywords"
          content="Oreoluwa Ibikunle, Senior Software Engineer, Full Stack Developer, React, Next.js, TypeScript, Node.js, React Native"
        />
        <meta name="author" content="Oreoluwa Ibikunle" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#58A6FF" />
        <meta property="og:title" content="Oreoluwa Ibikunle | Senior Software Engineer" />
        <meta
          property="og:description"
          content="Full-stack engineer shipping production web and mobile products — marketplaces, dashboards, and scalable platforms."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oreoluwaibikunle.com" />
        <meta property="og:image" content="/img.jpeg" />
      </Head>
      <body style={{ backgroundColor: '#0a0a0a' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
