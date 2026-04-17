import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* The title should be punchy and show authority immediately */}
        <title>
          Dr. Oreoluwa Ibikunle | Physician, Clinical Researcher & Senior Software Engineer
        </title>

        {/* Description updated with your new identity markers */}
        <meta
          name="description"
          content="Physician and Senior Software Engineer bridging clinical precision with technical craftsmanship. Specializing in high-trust systems, data-driven clinical research, and scalable enterprise architecture."
        />

        {/* Keywords updated for recruiters in HealthTech and AI Research */}
        <meta
          name="keywords"
          content="Dr. Oreoluwa Ibikunle, Physician Software Engineer, Clinical Researcher, MBBS Developer, HealthTech Architect, Senior Full-Stack Engineer, Medical Data Research"
        />

        <meta name="author" content="Dr. Oreoluwa Ibikunle" />
        
        {/* Favicon & Theme Color (Optional but professional) */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#58A6FF" />

        {/* Open Graph Tags: This is how your site looks when shared on LinkedIn/Twitter */}
        <meta property="og:title" content="Dr. Oreoluwa Ibikunle | Physician & Senior Software Engineer" />
        <meta property="og:description" content="Exploring the intersection of Medicine and Code through high-trust engineering and clinical research." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oreoluwaibikunle.com" />
        <meta property="og:image" content="/img.jpeg" /> {/* Use your AI-generated portrait here! */}
      </Head>
            
      <body style={{backgroundColor: "#3c323c"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}