import Head from 'next/head';
import { ConfigProvider } from 'antd';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import theme from '@/theme/themeConfig';

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider theme={theme}>
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
        <meta property="og:title" content="Oreoluwa Ibikunle | Senior Software Engineer" />
        <meta
          property="og:description"
          content="Full-stack engineer shipping production web and mobile products — marketplaces, dashboards, and scalable platforms."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oreoluwaibikunle.com" />
        <meta property="og:image" content="/img.jpeg" />
      </Head>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
