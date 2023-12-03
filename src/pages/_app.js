import "@/styles/globals.css";
import "../styles/scss/index.scss";
import { pdfjs } from "react-pdf";
import Navbar from "@/components/Navbar/Navbar";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
