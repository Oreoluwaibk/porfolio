import { Html, Head, Main, NextScript, Link } from 'next/document';
 
export default function Document() {
  return (
    <Html lang="en">
      {/* <link rel="icon" href="/static/favicon.ico" sizes="any" /> */}
      <Head />
      <body style={{backgroundColor: "#3c323c"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}