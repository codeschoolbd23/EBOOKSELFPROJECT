import React from 'react';
import { books } from '../../../Utilities/search/SearchContent';
const BoiCategory = () => {
    return (
      <div className='flex flex-col gap-2 justify-start w-19/20 mx-auto h-full p-3 text-blue-500 border border-dashed border-secondary'>
        <p className="p-1 text-start w-full ">
          প্রথম শ্রেণি-মোট বই সংখ্যা:{" "}
          {
            books?.filter((item) => item.keyword.toLowerCase().includes("one"))
              .length
          }
        </p>
        <p className="p-1 text-start w-full ">
          দ্বিতীয় শ্রেণি-মোট বই সংখ্যা:{" "}
          {
            books?.filter((item) => item.keyword.toLowerCase().includes("two"))
              .length
          }
        </p>
        <p className="p-1 text-start w-full ">
          তৃতীয় শ্রেণি-মোট বই সংখ্যা:
          {
            books?.filter((item) =>
              item.keyword.toLowerCase().includes("three"),
            ).length
          }
        </p>
        <p className="p-1 text-start w-full ">
          চতুর্থ শ্রেণি-মোট বই সংখ্যা:
          {
            books?.filter((item) => item.keyword.toLowerCase().includes("four"))
              .length
          }
        </p>
        <p className="p-1 text-start w-full ">
          পঞ্চম শ্রেণি-মোট বই সংখ্যা:{" "}
          {
            books?.filter((item) => item.keyword.toLowerCase().includes("five"))
              .length
          }
        </p>
        <p className="p-1 text-start w-full ">
          ষষ্ঠ শ্রেণি-মোট বই সংখ্যা:{" "}
          {
            books?.filter((item) => item.keyword.toLowerCase().includes("six"))
              .length
          }
        </p>
        <p className="p-1 text-start w-full ">
          সপ্তম শ্রেণি-মোট বই সংখ্যা:
          {
            books?.filter((item) =>
              item.keyword.toLowerCase().includes("seven"),
            ).length
          }
        </p>
        <p className="p-1 text-start w-full ">
          অষ্টম শ্রেণি-মোট বই সংখ্যা:
          {
            books?.filter((item) =>
              item.keyword.toLowerCase().includes("eight"),
            ).length
          }
        </p>
        <p className="p-1 text-start w-full ">
          নবম শ্রেণি-মোট বই সংখ্যা:
          {
            books?.filter((item) => item.keyword.toLowerCase().includes("9"))
              .length
          }
        </p>
        <p className="p-1 text-start w-full ">
          দশম শ্রেণি-মোট বই সংখ্যা:
          {
            books?.filter((item) => item.keyword.toLowerCase().includes("10"))
              .length
          }
        </p>
        <p className="p-1 text-start w-full ">
          একাদশ-দ্বাদশ শ্রেণি-মোট বই সংখ্যা:
          {
            books?.filter((item) =>
              item.keyword.toLowerCase().includes("eleven"),
            ).length
          }
        </p>
      </div>
    );
};

export default BoiCategory;