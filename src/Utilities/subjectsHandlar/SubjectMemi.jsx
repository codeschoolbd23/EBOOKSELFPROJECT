import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { FaDownload, FaHome } from "react-icons/fa";
import { ExternalLink } from "react-external-link";
import { Link } from "react-router";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();
export default function SubjectMemi({ sub, topic }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(2); // Manage Zoom
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
  const btnClass =
    "mx-1 btn btn-dash font-thin btn-xs btn-secondary hover:text-white focus:bg-violet-500 px-2  rounded-full";
  // const btnZoomClass="mx-1 hover:bg-primary text-yellow-500 hover:text-white focus:bg-violet-500 p-1 font-thin  rounded-full"
  return (
    <div className="relative bg-base-100 w-full h-full flex flex-col justify-center items-center px-1">
      {/* Control Toolbar */}
      <div className="fixed bg-base-100 top-20 z-50  w-full flex justify-between pt-1 px-2 mb-2">
        <span>
          <ExternalLink
            title={fileName}
            href={sub} // Path relative to your public folder
            download={fileName} // The filename the user will save it as
            className={btnClass}
          >
            <FaDownload className="text-xl text-center text-red-600 p-1" />
            Download PDF
          </ExternalLink>
        </span>
        <span>
          <form onSubmit={HandleSubmit} className="flex">
            <input
              type="number"
              name="page"
              className="input-sm input text-red-500 bg-base-100 rounded-xl text-center w-full italic font-thin"
              placeholder="Enter page no"
              // defaultValue={1}
              min="1" // Prevents entering negative pages
            />
            {/* Changing to type="submit" fires the HandleSubmit function */}
            <button type="submit" className={btnClass}>
              Go Page
            </button>
          </form>
        </span>
        <button
        title="পড়ার বই সমূহ"
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className={btnClass}
        >
          পড়ার বই ‍সিলেক্ট করুন
        </button>
        <span>
          <button
            onClick={prevPage}
            disabled={pageNumber <= 0}
            className={btnClass}
          >
            Previous
          </button>
          <span className="font-thin text-gray-500">
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
            className={btnClass}
          >
            ZOOM OUT
          </button>
          <button
            onClick={() => setScale((prev) => Math.min(prev + 0.2, 2.0))}
            className={btnClass}
          >
            ZOOM IN
          </button>
        </span>
      </div>
      {/* PDF Document w-full */}

      <div className="flex w-full justify-between">
        <div className="fixed w-1/5 text-blue-700 text-lg font-thin bg-base-100 mr-auto mt-30">
          <Link className={`${btnClass} w-fit flex justify-center items-center m-2`} to="/">
            <FaHome /> Home
          </Link>
          <div className="badge-ghost">অধ্যায় সমূহ</div>
          <div className="flex flex-col h-110 m-0 overflow-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {topic?.map((subTopic) => (
              <button
                key={subTopic?.id}
                onClick={() => unitPage(subTopic?.page)}
                disabled={pageNumber >= numPages}
                className="text-start link link-hover font-thin  hover:text-primary focus:bg-violet-500 focus:text-pink-300 m-1 px-1 rounded-xl"
              >
                {subTopic?.lesson}:{subTopic?.topic}
              </button>
            ))}
          </div>
        </div>
        <div className="w-4/5  ml-auto">
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
