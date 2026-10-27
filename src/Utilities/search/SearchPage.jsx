import { useLocation } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { ExternalLink } from "react-external-link";
import Modal from "../Modal/Modal";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();
function SearchPage({ book }) {
  const location = useLocation();
  const searchQuery = location.state?.query || "";
  console.log(book);
  const about =
    "বাংলাদেশ সরকার কর্তৃক বিনামূল্যে বিতরণকৃত পাঠ্যপুস্তকসমূহকে সাধারণ শিক্ষার্থীদের দোরগোড়ায় পৌঁছে দিতে আমাদের এই ই-বুক সেলফ প্ল্যাটফর্ম একটি ডিজিটাল সহযোগী হিসেবে কাজ করছে। প্রযুক্তির এই আধুনিক যুগে শিক্ষার আলো ছড়িয়ে দিতে এবং পড়াশোনাকে আরও সহজলভ্য করতে আমরা সম্পূর্ণ বিনামূল্যে এই সেবাটি চালু করেছি।আসুন, আমরা সবাই মিলে শিক্ষার আলো ছড়িয়ে দিই এবং একটি শিক্ষিত ও সমৃদ্ধ আগামী প্রজন্ম গড়ে তুলি।";
  return (
    <div className="min-h-screen w-full rounded-none">
      <div className="shadow-sm p-5 rounded-sm">
            Search Results for:{" "}
            <span className="text-primary font-sans underline">
              "{searchQuery || "Everything"}"
            </span>
          <p className="text-sm text-base-content/60 mt-1">
            Found
            <span className="px-2">
              {
                book?.filter((item) =>
                  item.keyword
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()),
                ).length
              }
            </span>
            matching items
          </p>
      </div>
      <div>
        {book?.map((item) => (
          <div key={item.id}>
            {item.keyword.toLowerCase().includes(searchQuery.toLowerCase()) && (
              <div className="card card-side">
                <Document
                  className="p-2"
                  file={item?.content}
                  loading={<div>Loading Document...</div>}
                  error={<div>Failed to load PDF file.</div>}
                >
                  <Page
                    height={200}
                    pageNumber={1}
                    pageColors={"#eeee"}
                    renderAnnotationLayer={true}
                    renderTextLayer={true}
                  />
                </Document>
                {/* Card Body Info */}
                <div className="card-body">
                  <p className="card-title font-bold text-base-content hover:text-primary cursor-pointer transition-colors">
                    <ExternalLink
                      href={item?.content}
                      target="_blank"
                      className="text-primary underline"
                    >
                      {item?.name}
                    </ExternalLink>
                  </p>
                  <p className="text-base-content/70 text-sm  text-start">
                    {item?.section}
                  </p>
                  <p className="text-xs text-gray-400 text-justify">{about}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-base-content/50">
                      By{" "}
                      <span className="font-semibold text-base-content/80">
                        {item?.author}
                      </span>
                    </span>
                    <Modal item={item} />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="border w-full bg-red-300">
          {book?.filter((item) =>
            item.keyword.toLowerCase().includes(searchQuery.toLowerCase()),
          ).length === 0 && (
            <div className="w-full text-start p-10 flex flex-col justify-center items-center">
              <p className="w-3/4 mx-auto">
                Your searching book{" "}
                <span className="text-blue-300 underline">{searchQuery}</span>{" "}
                is not available now.
              </p>
              <p className="w-3/4 mx-auto">
                You may search another one. Thank you.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
