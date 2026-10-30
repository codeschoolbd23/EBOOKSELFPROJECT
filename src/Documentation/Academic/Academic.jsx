import React, { useState } from "react";
import Four from "../components/images/Four.png"
import Six from "../components/images/Six.png"
export default function Academic() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="min-h-screen p-20 bg-slate-950 text-purple-100 font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden relative">
      {/* Synthwave Retro Sun & Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-linear(to_bottom,rgba(15,23,42,0)_60%,rgba(219,39,119,0.1)_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-linear-to-b from-pink-600 to-amber-500 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      {/* Hero Section */}
      
        <div className="grid grid-cols-12 items-center">
          {/* Text Content */}
          <div className="col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 bg-purple-950/60 border border-purple-500/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
               এডুকেশন মিটস ফিউচারিসম
            </div>

            <h1 className="text-4xl font-black text-white">
              <span className=" text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-400 to-cyan-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                চলো স্কুলে,
              </span>
              <span className=" text-5xl font-black mt-2 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                পড়তে যাই!
              </span>
            </h1>

            <p className="text-lg text-purple-300/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              রেট্রো নিয়ন ভাইব আর অত্যাধুনিক সাইবার লার্নিংয়ের সমন্বয়ে আমাদের
              একাডেমিক যাত্রা। যেখানে প্রতিটি ছাত্র-ছাত্রী পাবে আগামী দিনের
              ডিজিটাল স্কিল এবং আধুনিক জ্ঞান।
            </p>

            {/* Newsletter / Action */}
            <div className="max-w-md mx-auto lg:mx-0">
              {isSubscribed ? (
                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-medium text-center animate-fade-in shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  🎉 অভিনন্দন! তোমার মিশন শুরু হলো।
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 bg-slate-900/90 p-2 rounded-xl border border-purple-800/60 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                  <input
                    type="email"
                    placeholder="তোমার ইমেইল দাও..."
                    className="flex-1 bg-slate-950 border border-purple-900/60 rounded-lg px-4 py-3 text-purple-200 placeholder-purple-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                  />
                  <button
                    onClick={() => setIsSubscribed(true)}
                    className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black px-6 py-3 rounded-lg text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  >
                    যোগ দাও
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Academic Pictures Section (Boy & Girl Avatar Graphics) */}
          <div className="col-span-5 flex justify-center relative gap-2">
            {/* Ambient background glow behind avatars */}
            <div className="absolute inset-0 bg-pink-500/10 blur-3xl rounded-full pointer-events-none" />

            {/* Student 1: School Boy Graphic */}
            <div className="group relative bg-linear-to-b from-purple-900/40 to-slate-950 border border-purple-500/30 p-5 rounded-2xl w-full text-center transform hover:-translate-y-2 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
              <div className="w-60 h-60 mx-auto rounded-full bg-linear-to-tr from-cyan-500 to-blue-600 p-1 mb-4 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                  {/* Cyber Student Boy SVG Icon */}
                  <img src={Four} />
                </div>
              </div>
              <div className="inline-block bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs px-2.5 py-0.5 rounded-full font-mono mb-2">
                ID: CYBER-BOY
              </div>
              <h3 className="font-bold text-white tracking-wide">
                সাইবার ছাত্র
              </h3>
              <p className="text-xs text-purple-400 mt-1">
                ক্লাস ১০ (কোডিং ও রোবোটিক্স)
              </p>
            </div>

            {/* Student 2: School Girl Graphic */}
            <div className="group relative bg-linear-to-b from-purple-900/40 to-slate-950 border border-purple-500/30 p-5 rounded-2xl w-full text-center transform hover:-translate-y-2 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
              <div className="w-60 h-60 mx-auto rounded-full bg-linear-to-tr from-cyan-500 to-blue-600 p-1 mb-4 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                  {/* Cyber Student Girl SVG Icon */}
                  <img src={Six} />
                </div>
              </div>
              <div className="inline-block bg-pink-950/60 border border-pink-500/30 text-pink-400 text-xs px-2.5 py-0.5 rounded-full font-mono mb-2">
                ID: CYBER-GIRL
              </div>
              <h3 className="font-bold text-white tracking-wide">
                সাইবার ছাত্রী
              </h3>
              <p className="text-xs text-purple-400 mt-1">
                ক্লাস ১০ (বায়োটেক ও এআই)
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}
