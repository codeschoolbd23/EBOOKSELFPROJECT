import { useState, useEffect, useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";

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
      className={`bg-base-100 h-full flex flex-col justify-between transition-colors duration-300
      }`}
    >
      

      <main className="flex-1 max-w-3xl mx-auto w-full p-4 md:p-6 flex flex-col">
        {/* --- CHAT TIMELINE STREAM --- */}
        <div
          className={`flex-1 h-[450px] rounded-xl shadow-sm border p-6 overflow-y-auto mb-4 flex flex-col gap-4 transition-all duration-300
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
                className={`rounded-2xl p-4 text-sm md:text-base leading-relaxed rounded-tl-none prose max-w-none dark:prose-invert` }
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
            className={`flex-1 p-3 rounded-xl border text-sm md:text-base outline-none transition-all
            }`}
          />

          {/* 🎙️ VoiceButton imported from VoiceController */}
          <VoiceButton
            isListening={isListening}
            onClick={startListening}
           
          />

          <button
            type="submit"
            className="px-5 h-12 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 transition shadow-md text-sm md:text-base flex-shrink-0"
          >
            Send
          </button>
        </form>
      </main>

      
    </div>
  );
}

export default AICHAT;
