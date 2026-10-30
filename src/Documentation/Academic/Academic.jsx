import React, { useState } from "react";

export default function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-purple-100 font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden relative">
      {/* Synthwave Retro Sun & Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0)_60%,rgba(219,39,119,0.1)_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-b from-pink-600 to-amber-500 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      {/* Hero Section */}
      <main
        id="home"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-purple-950/60 border border-purple-500/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
              🚀 এডুকেশন মিটস ফিউচারিসম
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-white">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                চলো স্কুলে তে
              </span>
              <span className="block text-5xl sm:text-7xl font-black mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
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
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black px-6 py-3 rounded-lg text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  >
                    যোগ দাও
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Academic Pictures Section (Boy & Girl Avatar Graphics) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-6 justify-center lg:justify-end relative">
            {/* Ambient background glow behind avatars */}
            <div className="absolute inset-0 bg-pink-500/10 blur-3xl rounded-full pointer-events-none" />

            {/* Student 1: School Boy Graphic */}
            <div className="group relative bg-gradient-to-b from-purple-900/40 to-slate-950 border border-purple-500/30 p-5 rounded-2xl w-full sm:w-56 text-center transform hover:-translate-y-2 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
              <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-1 mb-4 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                  {/* Cyber Student Boy SVG Icon */}
                  <svg
                    className="w-16 h-16 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
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
            <div className="group relative bg-gradient-to-b from-purple-900/40 to-slate-950 border border-purple-500/30 p-5 rounded-2xl w-full sm:w-56 text-center transform hover:-translate-y-2 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:border-pink-500/60 hover:shadow-[0_0_25px_rgba(219,39,119,0.3)] sm:mt-8">
              <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 p-1 mb-4 shadow-[0_0_15px_rgba(219,39,119,0.4)]">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                  {/* Cyber Student Girl SVG Icon */}
                  <svg
                    className="w-16 h-16 text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
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
      </main>

      {/* Subtle Grid Footer Info */}
      <footer
        id="features"
        className="border-t border-purple-900/30 bg-slate-950 py-8 mt-12 text-center text-xs text-purple-600 tracking-widest font-mono"
      >
        &copy; {new Date().getFullYear()} NEON ACADEMY // SYSTEM OPERATIONAL //
        ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}
