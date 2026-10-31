import { useState, useEffect, useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";
import Footer from "./../Navigation/Footer/Footer";
import Navbar from "./../Navigation/Navbar/Navbar";
import { Link } from "react-router";
import { useSpeechRecognition, VoiceButton } from "./aiControler";

function AICHAT() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const chatBottomRef = useRef(null);

  const welcomeMessage =
    "👋 হ্যালো! আমি আপনার এআই অ্যাসিস্ট্যান্ট। আজ আপনাকে কীভাবে সাহায্য করতে পারি? যেমন আপনি আমাকে বলতে পারেন: `write a quicksort function in javascript`";

  const getCurrentTime = () => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(new Date());
  };

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

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // 🎙️ ভয়েস রিকগনিশন হুক ইন্টিগ্রেশন
  const { isListening, startListening } = useSpeechRecognition({
    onResult: (text) => {
      setPrompt((prev) => (prev ? prev + " " + text : text));
    },
  });

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

      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const fullDateTime = new Date().toLocaleString("en-US", {
        timeZone: userTimeZone,
      });

      const responseStream = await ai.models.generateContentStream({
        model: "gemini-3.8-flash",
        contents: userQuestion,
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
            ? {
                ...msg,
                text: `আপনার ফ্রি টেক্সট লিমিট শেষ। আবার কিছুক্ষণ পর পুনরায় চালু হবে। ধন্যবাদ।।।`,
              }
            : msg,
        ),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto w-full p-4 md:p-6 flex flex-col">
        {/* হেডার এরিয়া */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-center flex items-center gap-4">
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

            <h1
              className={`text-xl md:text-3xl font-extrabold flex items-center gap-2 ${
                darkMode ? "text-violet-400" : "text-slate-800"
              }`}
            >
              <Link className="text-sm flex items-center gap-1 font-bold">
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
          className={`flex-1 h-[450px] rounded-xl shadow-sm border p-6 overflow-y-auto mb-4 flex flex-col gap-4 transition-all duration-300 ${
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
              <div
                className={`rounded-2xl p-4 text-sm md:text-base leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-violet-600 text-white rounded-tr-none shadow-sm"
                    : `${
                        darkMode
                          ? "bg-slate-800 text-slate-100"
                          : "bg-slate-100 text-slate-800"
                      } rounded-tl-none prose max-w-none dark:prose-invert`
                }`}
              >
                {msg.sender === "user" ? (
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                ) : (
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                )}
              </div>
              <span className="text-[10px] text-slate-400 mt-1 px-1">
                {msg.time}
              </span>
            </div>
          ))}
          {loading && (
            <div className="text-xs text-slate-400 animate-pulse">
              Assistant is typing...
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>

        {/* --- INPUT FORM WITH VOICECONTROLLER --- */}
        <form
          onSubmit={askAI}
          className="flex gap-2 items-center bg-transparent w-full"
        >
          <input
            type="text"
            placeholder="আপনার প্রশ্নটি লিখুন অথবা বলুন..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className={`flex-1 p-3 rounded-xl border text-sm md:text-base outline-none transition-all ${
              darkMode
                ? "bg-slate-900 border-slate-800 text-white focus:border-violet-500"
                : "bg-white border-slate-300 text-slate-900 focus:border-violet-600"
            }`}
          />

          {/* 🎙️ VoiceButton imported from VoiceController */}
          <VoiceButton
            isListening={isListening}
            onClick={startListening}
            darkMode={darkMode}
          />

          <button
            type="submit"
            className="px-5 h-12 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 transition shadow-md text-sm md:text-base flex-shrink-0"
          >
            Send
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default AICHAT;
