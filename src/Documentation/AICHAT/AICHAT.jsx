import { useState, useEffect, useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  prism,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import Footer from "./../Navigation/Footer/Footer";
import Navbar from "./../Navigation/Navbar/Navbar";
import { Link } from "react-router";

function AICHAT() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [copiedBlockId, setCopiedBlockId] = useState(null);

  const chatBottomRef = useRef(null);

  const welcomeMessage =
    "👋 হ্যালো! আমি আপনার এআই অ্যাসিস্ট্যান্ট। আজ আপনাকে কীভাবে সাহায্য করতে পারি? যেমন আপনি আমাকে বলতে পারেন: `write a quicksort function in javascript`";

  // ⏰ বর্তমান সময় জেনারেট করার হেল্পার ফাংশন (Format: 6:19 AM)
  const getCurrentTime = () => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(new Date());
  };

  // পেজ লোড হওয়ার পর চ্যাট হিস্ট্রিতে প্রথম মেসেজ ও সময় পুশ হবে
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        sender: "ai",
        text: welcomeMessage,
        time: getCurrentTime(),
      },
    ]);
  }, []);

  // নতুন মেসেজ এলে অটোমেটিক স্ক্রল ডাউন হবে
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);
  const askAI = async (e) => {
    if (e) e.preventDefault();
    if (!prompt.trim()) return;

    const userQuestion = prompt;
    const timeSent = getCurrentTime();
    setPrompt("");

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + "-user",
        sender: "user",
        text: userQuestion,
        time: timeSent,
      },
    ]);
    setLoading(true);

    const aiMessageId = Date.now() + "-ai";
    setMessages((prev) => [
      ...prev,
      { id: aiMessageId, sender: "ai", text: "", time: getCurrentTime() },
    ]);

    try {
      const ai = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GEMINI_API_KEY,
        allowBrowser: true,

      });
      
      // ⏰ এআই-কে সিস্টেম ইনস্ট্রাকশনে ইউজারের লোকাল টাইমজোন এবং সঠিক সময় পুশ করা হচ্ছে
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // যেমন: Asia/Dhaka
      const fullDateTime = new Date().toLocaleString("en-US", {
        timeZone: userTimeZone,
      });

      const responseStream = await ai.models.generateContentStream({
        model: "gemini-3.8-flash",
        contents: userQuestion,
        // 🌟 কনফিগারেশনের মাধ্যমে এআই-কে লাইভ টাইম কনটেক্সট দেওয়া হলো
        config: {
          systemInstruction: `You are a helpful AI Assistant. The user's current timezone is ${userTimeZone}. The exact current date and time in their location is ${fullDateTime}. Whenever the user asks about time, date, today, or schedule, use this exact information to answer accurately in their preferred language.`,
        },
      });

      for await (const chunk of responseStream) {
        if (chunk.text) {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === aiMessageId
                ? { ...msg, text: msg.text + chunk.text }
                : msg,
            ),
          );
        }
      }
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessageId
            ? { ...msg, text: `আপনার ফ্রি টেক্সট লিমিট শেষ। আবার ৬.৩০ ঘন্টা পর পুনরায় চালু হবে। ধন্যবাদ।।।` }
            : msg,
        ),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`h-full flex flex-col justify-between transition-colors duration-300 ${darkMode ? "bg-slate-950 text-white" : "bg-white-50 text-slate-900"}`}
    >
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto w-full p-4 md:p-6 flex flex-col">
        {/* হেডার এরিয়া */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-center">
            <h1
              className={`text-xl md:text-3xl font-extrabold flex items-center gap-2 ${darkMode ? "text-violet-400" : "text-slate-800"}`}
            >
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-xl border transition-all duration-300 shadow-sm flex items-center justify-center ${
              darkMode
                ? "bg-slate-900 border-slate-800 text-yellow-400 hover:bg-slate-800"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {darkMode ? (
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 animate-pulse"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m9.59 9.59l1.58 1.58M3 12h2.25m13.5 0H21M4.22 19.78l1.58-1.58m9.59-9.59l1.58-1.58M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
              <Link
                className="text-sm flex items-center gap-1 font-bold"
              >
                
                <span className="text-amber-400">ই-বুক</span>
                <span className="text-sm font-extrabold text-fuchsia-400">
                  //
                </span>
                <span className="text-green-300">সেলফ</span>
              </Link>
            </h1>
          </div>
        </div>

        {/* --- CHAT TIMELINE STREAM --- */}
        <div
          className={`flex-1 h-450 rounded-xl shadow-sm border p-6 overflow-y-auto mb-4 flex flex-col gap-4 transition-all duration-300 ${
            darkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col max-w-[85%] ${
                msg.sender === "user"
                  ? "self-end items-end"
                  : "self-start items-start"
              }`}
            >
              {/* চ্যাট বাবল */}
              <div
                className={`rounded-2xl p-4 text-sm md:text-base leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-violet-600 text-white rounded-tr-none shadow-sm"
                    : `${darkMode ? "bg-slate-800 text-slate-100" : "bg-slate-100 text-slate-800"} rounded-tl-none prose max-w-none dark:prose-invert`
                }`}
              >
                {msg.sender === "user" ? (
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                ) : (
                  <ReactMarkdown
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        const codeString = String(children).replace(/\n$/, "");
                        const blockId =
                          node?.position?.start?.line || Math.random();

                        const handleCopy = async () => {
                          await navigator.clipboard.writeText(codeString);
                          setCopiedBlockId(blockId);
                          setTimeout(() => setCopiedBlockId(null), 2000);
                        };

                        return !inline && match ? (
                          <div className="rounded-lg overflow-hidden my-3 shadow-md border border-slate-700/50 relative group">
                            <div className="bg-slate-800 text-slate-400 px-4 py-1 flex justify-between items-center font-mono text-xs border-b border-slate-700">
                              <span>{match}</span>
                              <button
                                type="button"
                                onClick={handleCopy}
                                className="flex items-center gap-1 bg-slate-700/60 hover:bg-slate-700 text-white px-2 py-0.5 rounded text-[11px] transition-colors"
                              >
                                {copiedBlockId === blockId ? (
                                  <span className="text-emerald-400">
                                    Copied!
                                  </span>
                                ) : (
                                  <span>Copy</span>
                                )}
                              </button>
                            </div>
                            <SyntaxHighlighter
                              style={darkMode ? atomDark : prism}
                              language={match[1]}
                              PreTag="div"
                              customStyle={{
                                margin: 0,
                                padding: "0.8rem",
                                fontSize: "0.85rem",
                              }}
                              {...props}
                            >
                              {codeString}
                            </SyntaxHighlighter>
                          </div>
                        ) : (
                          <code
                            className="bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-violet-600 dark:text-violet-400 font-mono text-xs"
                            {...props}
                          >
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {msg.text ||
                      (loading && msg.id.includes("-ai") ? "AI লিখছে..." : "")}
                  </ReactMarkdown>
                )}
              </div>

              {/* 🌟 ডাইনামিক টাইমস্ট্যাম্প বাবল এর নিচে দেখাবে 🌟 */}
              <span
                className={`text-[10px] mt-1 px-1 font-medium ${darkMode ? "text-slate-500" : "text-slate-400"}`}
              >
                {msg.time}
              </span>
            </div>
          ))}
          <div ref={chatBottomRef} />
        </div>

        {/* --- INPUT FORM AREA --- */}
        <div
          className={`p-3 rounded-xl shadow-md border transition-all duration-300 ${
            darkMode
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <form
            onSubmit={askAI}
            className={`flex rounded-xl overflow-hidden border transition-all duration-300 ${
              darkMode
                ? "bg-slate-950 border-slate-800 focus-within:ring-2 focus-within:ring-violet-500"
                : "bg-slate-50 border-slate-200 focus-within:ring-2 focus-within:ring-violet-500"
            }`}
          >
            <input
              type="text"
              placeholder="নতুন প্রশ্ন লিখুন..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={loading}
              className={`flex-1 px-4 py-3.5 bg-transparent text-sm focus:outline-none disabled:opacity-50 ${
                darkMode
                  ? "text-white placeholder-slate-600"
                  : "text-slate-800 placeholder-slate-400"
              }`}
            />

            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className="m-1.5 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 disabled:from-slate-300 disabled:to-slate-400 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 transform active:scale-95"
            >
              {/* 🟢 রিঅ্যাক্ট এর নিয়ম অনুযায়ী টেক্সট স্ট্রিং সঠিকভাবে হ্যান্ডেল করা হয়েছে এবং বাটন ক্লোজ করা হয়েছে */}
              {loading ? "Thinking..." : "Ask AI"}
            </button>
          </form>
        </div>
      </main>
      <span>
        <Footer />
      </span>
    </div>
  );
}
export default AICHAT;
