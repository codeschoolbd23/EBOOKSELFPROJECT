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
    recognition.lang = "en-US"; // বাংলার জন্য 'bn-BD' ব্যবহার করতে পারেন
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
        className={`btn flex items-center gap-2 px-2 py-2.5 rounded-xl font-semibold shadow-md transition-all duration-300 border-none select-none text-white
    ${
      isListening
        ? "bg-linear-to-r from-rose-500 to-red-600 shadow-lg shadow-red-500/50 animate-pulse scale-105"
        : "bg-linear-to-r from-emerald-500 to-green-600 shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5 active:scale-95"
    }`}
      >
        {isListening ? (
          <>
            <span className="loading loading-ring loading-lg text-white"></span>
            <span className="tracking-wide">Listening...</span>
          </>
        ) : (
          <>
            <span className="text-lg">🎙️</span>
            <span className="tracking-wide">Voice Search</span>
          </>
        )}
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
