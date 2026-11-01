import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { ExternalLink } from "react-external-link";
import { books } from "../../../Utilities/search/SearchContent";
console.log("book",books);
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();
function BoiGhor() {
 
  return (
    <div>
      {/* <p></p> */}
      <div className="flex flex-wrap mx-auto justify-center items-center">
        {books?.map((item) => (
          <div key={item?.id}>
            <div className="p-8">
              <Document
                className="flex flex-col justify-center items-center border"
                file={item?.content}
                loading={<div>Loading Document...</div>}
                error={<div>Failed to load PDF file.</div>}
              >
                <Page
                  height={223}
                  width={223}
                  pageNumber={1}
                  pageColors={"#ffff"}
                  renderAnnotationLayer={true}
                  renderTextLayer={true}
                />
                <ExternalLink
                  href={item?.content}
                  target="_blank"
                  className="text-primary btn btn-dash w-full btn-success font-black rounded-none text-lg"
                >
                  OPEN YOUR BOOK
                </ExternalLink>
              </Document>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoiGhor;
