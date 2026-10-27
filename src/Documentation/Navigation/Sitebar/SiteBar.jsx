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
export default function SiteBar({ sub ,topic }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.5); // Manage Zoom

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
//   const fileName = "DownloadBook";
  const fileName = sub.split("/").pop();
  
  return (
    <div
      className="w-full"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1px",
      }}
    >
      {/* Control Toolbar */}
      <div
        className="w-full flex justify-between pt-1 px-2 bg-success"
        style={{
          marginBottom: "3px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <span>
          <ExternalLink
            href={sub} // Path relative to your public folder
            download={fileName} // The filename the user will save it as
            className="text-white font-medium rounded-full bg-red-500 hover:bg-orange-500 flex items-center justify-center focus:bg-green-400"
          >
            <FaDownload className="text-xl text-center text-white p-1" />
          </ExternalLink>
        </span>
        <span>
          <form onSubmit={HandleSubmit} className="flex">
            <input
              type="number"
              name="page"
              className="input-xs border bg-base-300 rounded-xl text-center w-fit"
              placeholder="Enter page"
              // defaultValue={1}
              min="1" // Prevents entering negative pages
            />
            {/* Changing to type="submit" fires the HandleSubmit function */}
            <button
              type="submit"
              className="bg-primary hover:bg-orange-400 hover:text-blue-400 focus:bg-violet-500 m-1 text-red-100 px-2 py-1 rounded-full border-b "
            >
              Go Page
            </button>
          </form>
        </span>
        <span>
          <button
            onClick={prevPage}
            disabled={pageNumber <= 1}
            className="bg-primary hover:bg-orange-400 hover:text-blue-400 focus:bg-violet-300 m-1 text-red-100 px-2 py-1 rounded-full border-b "
          >
            Previous Page
          </button>
          <span>
            Page {pageNumber} of {numPages || "..."}
          </span>
          <button
            onClick={nextPage}
            disabled={pageNumber >= numPages}
            className="bg-primary hover:bg-orange-400 hover:text-blue-400 focus:bg-violet-300 m-1 text-red-100 px-2 py-1 rounded-full border-b "
          >
            Next Page
          </button>
        </span>

        {/* <span style={{ margin: "0 10px" }}>|</span> */}

        <span>
          <button
            onClick={() => setScale((prev) => Math.max(prev - 0.2, 0.5))}
            className="bg-primary hover:bg-orange-400 hover:text-blue-400 focus:bg-violet-300 m-1 text-red-100 px-2 py-1 rounded-full border-b "
          >
            Zoom Out
          </button>
          <button
            onClick={() => setScale((prev) => Math.min(prev + 0.2, 2.0))}
            className="bg-primary hover:bg-orange-400 hover:text-blue-400 focus:bg-violet-300 m-1 text-red-100 px-2 py-1 rounded-full border-b "
          >
            Zoom In
          </button>
        </span>
      </div>

      {/* PDF Document w-full */}
      <div
        className="flex w-full justify-between"
        style={{
          //   border: "1px solid #ccc",
          // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          background: "#fff",
        }}
      >
        <div className="w-2/12 bg-primary flex flex-col justify-start items-start">
          {topic.map((subTopic) => (
            <button
              key={subTopic.id}
              onClick={() => unitPage(subTopic.page)}
              disabled={pageNumber >= numPages}
              className="bg-primary hover:bg-orange-400 hover:text-blue-400 focus:bg-violet-300 text-red-100 px-2 py-1 rounded-full border-b min-w-36 text-xs text-start"
            >
              {subTopic.id}:{subTopic.lesson}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center w-10/12">
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
