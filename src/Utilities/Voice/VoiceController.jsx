import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function VoiceController({handleSearchSubmit,text,setText}) {
  
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const navigate = useNavigate();
  const recognitionRef = useRef(null);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "দুঃখিত, আপনার ব্রাউজারে স্পিচ রিকগনিশন সাপোর্ট করে না। Chrome ব্যবহার করুন।",
      );
      return;
    }

    // যদি অলরেডি লিসেনিং চালু থাকে, তবে আবার ক্লিক করলে বন্ধ হবে (Toggle feature)
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    // নতুন করে রিকগনিশন অবজেক্ট তৈরি
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    // recognition.lang = "en-US"; // বাংলার জন্য 'bn-BD' ব্যবহার করতে পারেন
    // recognition.lang = "bn-BD"; // বাংলার জন্য 'bn-BD' ব্যবহার করতে পারেন
    recognition.interimResults = false;

    // লিসেনিং শুরু হওয়ার ইভেন্ট
    recognition.onstart = () => {
      setIsListening(true);
    };

    // কথা সফলভাবে রিসিভ হলে
    recognition.onresult = (event) => {
      const success = event.results[0][0].transcript.toLowerCase().trim();
      setTranscript(success);
      setIsListening(false);
      if (success !== "") {
        navigate("/search", { state: { query: success } });
      }
    };

    // এরর হ্যান্ডেলিং
    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    // রিকগনিশন বন্ধ হলে
    recognition.onend = () => {
      setIsListening(false);
    };

    // রেফারেন্সে সেভ করে স্টার্ট করা
    recognitionRef.current = recognition;
    recognition.start();
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={startListening}
        className={`relative flex items-center justify-center w-16 h-16 rounded-full duration-500 shadow-2xl
    ${
      isListening
        ? "bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-purple-500/50"
        : "bg-slate-900 border border-slate-700 text-purple-400 hover:text-purple-300 shadow-black/40"
    }`}
      >
        {/* Multi-layered Wave Animation */}
        {isListening && (
          <>
            <span className="fixed inline-flex h-14 w-14 rounded-full bg-purple-500 opacity-40 animate-ping duration-1000"></span>
            <span className="fixed inline-flex h-10 w-10 rounded-full bg-pink-500 opacity-30 animate-pulse"></span>
          </>
        )}

        {/* Modern Voice Line Icon */}
        <svg
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 z-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
          />
        </svg>
      </button>

      {/* {transcript && (
        <>{setText(transcript)}</>
      )} */}
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <div className="join">
          {/* DaisyUI Input */}
          <input
            type="text"
            placeholder={transcript}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input input-bordered join-item w-full focus:outline-none focus:border-primary text-sm"
          />
          <button type="submit" className="btn btn-primary join-item px-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default VoiceController;
