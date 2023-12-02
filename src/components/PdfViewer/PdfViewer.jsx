import { useState } from "react";
import { Document, Page } from "react-pdf";
import {
  FaArrowRight,
  FaArrowLeft,
  FaSearchPlus,
  FaSearchMinus,
} from "react-icons/fa";

function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0); // Add a new state variable for scale

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPrevPage() {
    setPageNumber(pageNumber === 1 ? numPages : pageNumber - 1);
  }

  function goToNextPage() {
    setPageNumber(pageNumber === numPages ? 1 : pageNumber + 1);
  }

  function zoomIn() {
    setScale(scale + 0.1);
  }

  function zoomOut() {
    setScale(scale - 0.1);
  }

  return (
    <>
    <button>open</button>
      <div className="ml-16 mt-10 flex w-[85vw] flex-row gap-2 items-center justify-center">
        <div className="flex flex-col gap-6">
          <button onClick={zoomOut}>
            <FaSearchMinus color="white" />
          </button>
          <button onClick={goToPrevPage}>
            <FaArrowLeft color="white" />
          </button>
        </div>
        <div>
          <Document
            file="/CV/TakiDilmi.pdf"
            onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              scale={scale} // Use the scale state variable here
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
        <div className="flex flex-col gap-6">
          <button onClick={zoomIn}>
            <FaSearchPlus color="white" />
          </button>
          <button onClick={goToNextPage}>
            <FaArrowRight color="white" />
          </button>
        </div>
      </div>
    </>
  );
}

export default PdfViewer;
