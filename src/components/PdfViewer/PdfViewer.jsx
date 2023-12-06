import { useState } from "react";
import { Document, Page } from "react-pdf";
import { AnimatePresence, motion } from "framer-motion";

import {
  FaArrowRight,
  FaArrowLeft,
  FaSearchPlus,
  FaSearchMinus,
} from "react-icons/fa";

function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Show CV");

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
      <div className="flex gap-20 flex-wrap">
        <motion.a
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, type: "tween", ease: "linear" }}
          href="/CV/TakiDilmi.pdf"
          download
          className="text-white hover:bg-[#27203ca1] mt-5 text-[15px] bg-[#27203C] p-2 rounded-[4px] underlineEffect"
          whileHover={{ scaleX: 1 }}>
          Download CV
        </motion.a>
        <motion.button
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2, type: "tween", ease: "linear" }}
          className="text-white underline-rtl items-end hover:bg-[#27203ca1] mt-5 text-[15px] bg-[#27203C] p-2 rounded-[4px]"
          onClick={() => {
            setIsOpen(!isOpen);
            setButtonText(isOpen ? "Show CV" : "Close");
          }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={buttonText}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}>
              {buttonText}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
      {isOpen && (
        <motion.div
          className="flex w-[85vw] flex-row gap-2 items-center justify-center"
          initial={{ opacity: 0, height: 0, width: 0 }}
          animate={
            isOpen
              ? { opacity: 1, height: "100%", width: "85vw" }
              : { opacity: 0, height: 0, width: 0 }
          }
          transition={{ duration: 0.5 }}>
          <div className="flex flex-col gap-6">
            <button onClick={zoomOut}>
              <FaSearchMinus color="white" />
            </button>
            <button onClick={goToPrevPage}>
              <FaArrowLeft color="white" />
            </button>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}>
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
          </motion.div>
          <div className="flex flex-col gap-6">
            <button onClick={zoomIn}>
              <FaSearchPlus color="white" />
            </button>
            <button onClick={goToNextPage}>
              <FaArrowRight color="white" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default PdfViewer;
