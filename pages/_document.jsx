import { Html, Head, Main, NextScript, Link } from 'next/document';
 
export default function Document() {
  return (
    <Html lang="en">
      {/* <link rel="icon" href="/static/favicon.ico" sizes="any" /> */}
      <head>
        <title>Oreoluwa Ibikunle | Physician & Senior Software Engineer | Physician. Engineer. Researcher.</title>
        <meta name="description" content="Physician and Senior Software Engineer bridging clinical precision with technical craftsmanship. Specializing in high-trust systems, scalable enterprise architecture, and data-driven clinical research." />
        <meta name="keywords" content="Oreoluwa Ibikunle, Physician, Doctor, Senior Software Engineer, Researcher, IT Courses, E-Learning, Learning Portal" />
        <meta name="author" content="Oreoluwa Ibikunle" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <Head />
      <body style={{backgroundColor: "#3c323c"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}