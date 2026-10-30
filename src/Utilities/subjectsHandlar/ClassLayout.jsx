import React from 'react';
import One from "../../Documentation/components/images/One.png";
import Two from "../../Documentation/components/images/Two.png";
import Three from "../../Documentation/components/images/Four.png";
import Four from "../../Documentation/components/images/Four.png";
import Five from "../../Documentation/components/images/Five.jpg";
import Six from "../../Documentation/components/images/Six.png";
import Seven from "../../Documentation/components/images/Seven.png";
import Eight from "../../Documentation/components/images/Two.png";
import Nine from "../../Documentation/components/images/Six.png";
import HSC_ICT from "../../Documentation/components/images/hsc_ict.jpg";

const ClassLayout = ({X}) => {
  const imagX=[
    {id:1,classX:"One",imG:One,},
    {id:2,classX:"Two",imG:Two,},
    {id:3,classX:"Three",imG:Three,},
    {id:4,classX:"Four",imG:Four,},
    {id:5,classX:"Five",imG:Five,},
    {id:6,classX:"Six",imG:Six,},
    {id:7,classX:"Seven",imG:Seven,},
    {id:8,classX:"Eight",imG:Eight,},
    {id:10,classX:"Nine",imG:Nine,},
    {id:11,classX:"Ten",imG:Nine,},
    {id:12,classX:"Eleven",imG:HSC_ICT,},
    {id:13,classX:"Twelve",imG:HSC_ICT,},
  ]
  const text="আমরা আমাদের গ্রাহকদের জন্য সেরা এবং মানসম্মত সেবা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। দীর্ঘদিনের অভিজ্ঞতা এবং দক্ষ টিমের মাধ্যমে আমরা প্রতিনিয়ত নতুন নতুন প্রযুক্তি ও উদ্ভাবনী আইডিয়া নিয়ে কাজ করে যাচ্ছি। আমাদের মূল লক্ষ্য হলো সততা, নিষ্ঠা এবং উন্নত সেবার মাধ্যমে গ্রাহকদের সন্তুষ্টি অর্জন করা এবং তাদের স্বপ্নকে বাস্তবে রূপ দেওয়া।"
    console.log(X)
    return (
      <div className="min-h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0)_60%,rgba(219,39,119,0.1)_100%)] pointer-events-none" />
        <div className="flex">
          <div className="w-2/5 bg-white p-1">
            <div className="mx-auto">
              <div className="flex items-center justify-center">
                {imagX?.map((im) => (
                  <div key={im?.id}>
                    {im?.classX === X && (
                      <img src={im?.imG} alt={im?.classX} className="w-full" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-3/5 flex flex-col justify-center items-center h-screen pt-32 overflow-scroll">
            <span className="text-5xl font-bold text-blue-500 text-wrap text-start p-1">
              Here, the books of {X} are avaiable
            </span>
            <div className='p-3'>
              <p className="p-1 text-wrap text-justify italic">{text}</p>
              <p className="p-1 text-wrap text-justify">{text}</p>
              <p className="p-1 text-wrap text-justify">{text}</p>
              <p className="p-1 text-wrap text-justify">{text}</p>
              <p className="p-1 text-wrap text-justify">{text}</p>
              <p className="p-1 text-wrap text-justify">{text}</p>
              <p className="p-1 text-wrap text-justify">{text}</p>
              <p className="p-1 text-wrap text-justify">{text}</p>
            </div>

            <button className="btn btn-primary">Home</button>
          </div>
        </div>
      </div>
    );
};

export default ClassLayout;