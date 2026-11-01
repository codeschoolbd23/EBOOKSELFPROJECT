import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { ExternalLink } from "react-external-link";
import { useEffect, useState } from "react";
import Skeleton from "../../../Router/Skeleton";
import { books } from "../../../Utilities/search/SearchContent";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
).toString();
function BoiGhor() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log("list", data);

    useEffect(() => {
      setTimeout(() => {
        setData(books);
        setLoading(false); 
      }, 5000); 
    }, []);
    if (loading) {
      return (
        <>
          <Skeleton />
        </>
      );
    }
    console.log("book",data);
  return (
    <div className="bg-base-100">
      <p className="text-3xl w-full p-2 bg-base-300 font-black text-primary">
        তোমার প্রিয় বইসমূহ
      </p>
      <div className=" flex flex-wrap mx-auto justify-center items-center">
        {data?.map((item) => (
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
