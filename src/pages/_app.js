import { DefaultSeo } from "next-seo";
import "@/styles/globals.css";
import "../styles/scss/index.scss";
import { pdfjs } from "react-pdf";
import Navbar from "@/components/Navbar/Navbar";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Takieddine Dilmi - Front-End Web Developer"
        description="Portfolio of Takieddine Dilmi, a proficient front-end web developer specializing in JavaScript, Tailwind, Next.js, Redux, CSS, HTML, and Firebase. Explore my projects and get in touch for collaboration."
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Takieddine Dilmi, JavaScript, React, Tailwind, Front-End Web Developer, Next.js, Redux, CSS, HTML, Firebase, Portfolio",
          },
          {
            name: "author",
            content: "Takieddine Dilmi",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://taki-dilmi.vercel.app/",
          site_name: "taki-dilmi",
          title: "Takieddine Dilmi - Front-End Web Developer",
          description:
            "Portfolio of Takieddine Dilmi, a proficient front-end web developer specializing in JavaScript, Tailwind, Next.js, Redux, CSS, HTML, and Firebase. Explore my projects and get in touch for collaboration.",
          images: [
            {
              url: "/Taki.png",
              width: 800,
              height: 600,
              alt: "Taki",
            },
          ],
        }}
      />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
