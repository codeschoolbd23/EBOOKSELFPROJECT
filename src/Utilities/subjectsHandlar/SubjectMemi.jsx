import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { FaDownload } from "react-icons/fa";
import { ExternalLink } from "react-external-link";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();
export default function SubjectMemi({ sub, topic }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1); // Manage Zoom

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1); // Reset to page 1 on new document load
  }
  const HandleSubmit = (e) => {
    e.preventDefault();

    const pageNum = e.target.elements.page.value;
    console.log(topic);

    if (pageNum.length > 0) {
      const targetPage = Number(pageNum);

      // Bounds checking: Keep the page within 1 and the document's total pages
      if (numPages && targetPage > numPages) {
        setPageNumber(numPages); // Go to max page if they typed too high
      } else if (targetPage < 1) {
        setPageNumber(1); // Go to page 1 if they typed 0 or negative
      } else {
        setPageNumber(targetPage);
      }
    } else {
      setPageNumber(1);
    }
    e.target.reset();
  };

  // Navigation handlers
  const changePage = (offset) =>
    setPageNumber((prevPage) =>
      Math.min(Math.max(prevPage + offset, 1), numPages),
    );
  const unitPage = (unitpage) => {
    setPageNumber(unitpage);
  };
  const prevPage = () => changePage(-1);
  const nextPage = () => changePage(1);
  const fileName = sub.split("/").pop();
const btnClass="mx-1 btn btn-dash font-thin btn-xs btn-info hover:text-white focus:bg-violet-500 px-2  rounded-full"
const btnZoomClass="mx-1 hover:bg-primary   hover:text-white focus:bg-violet-500 p-1 font-thin  rounded-full"
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-1">
      {/* Control Toolbar */}
      <div className="relative w-full flex justify-between pt-1 px-2 mb-2">
        <span>
          <ExternalLink
            href={sub} // Path relative to your public folder
            download={fileName} // The filename the user will save it as
            className="text-white px-1 font-thin rounded-full bg-red-500 hover:bg-orange-500 flex items-center justify-center focus:bg-green-400"
          >
            <FaDownload className="text-xl text-center text-white p-1" />
            Download
          </ExternalLink>
        </span>
        <span>
          <form onSubmit={HandleSubmit} className="flex">
            <input
              type="number"
              name="page"
              className="input-xs  bg-base-300 rounded-xl text-center w-fit italic font-thin"
              placeholder="Enter page no"
              // defaultValue={1}
              min="1" // Prevents entering negative pages
            />
            {/* Changing to type="submit" fires the HandleSubmit function */}
            <button type="submit" className={btnZoomClass}>
              Go Page
            </button>
          </form>
        </span>
        <span>
          <button
            onClick={prevPage}
            disabled={pageNumber <= 0}
            className={btnClass}
          >
            Previous
          </button>
          <span className="font-thin">
            Page {pageNumber} of {numPages || "..."}
          </span>
          <button
            onClick={nextPage}
            disabled={pageNumber >= numPages}
            className={btnClass}
          >
            Next
          </button>
        </span>

        {/* <span style={{ margin: "0 10px" }}>|</span> */}

        <span>
          <button
            onClick={() => setScale((prev) => Math.max(prev - 0.2, 0.5))}
            className={btnZoomClass}
          >
            ZOOM OUT
          </button>
          <button
            onClick={() => setScale((prev) => Math.min(prev + 0.2, 2.0))}
            className={btnZoomClass}
          >
            ZOOM IN
          </button>
        </span>
      </div>

      {/* PDF Document w-full */}
      <div className="flex w-full justify-between">
        <div className="w-1/5 text-blue flex flex-col h-screen m-0 overflow-scroll">
          <div className="badge-ghost">অধ্যায় সমূহ</div>
          {topic?.map((subTopic) => (
            <button
              key={subTopic?.id}
              onClick={() => unitPage(subTopic?.page)}
              disabled={pageNumber >= numPages}
              className="text-start text-primary link link-hover font-thin  hover:text-primary focus:bg-violet-500 focus:text-pink-300 m-1 px-1 rounded-xl"
            >
              {subTopic?.lesson}:{subTopic?.topic}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mx-auto">
          <Document
            className="flex flex-col justify-center items-center"
            file={sub}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div>Loading Document...</div>}
            error={<div>Failed to load PDF file.</div>}
          >
            <Page
            
              pageNumber={pageNumber}
              scale={scale}
              renderAnnotationLayer={true}
              renderTextLayer={true}
            />
          </Document>
        </div>
      </div>
    </div>
  );
}
