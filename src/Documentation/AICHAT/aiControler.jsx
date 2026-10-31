import React from "react";

export function useSpeechRecognition({ onResult }) {
  const [isListening, setIsListening] = React.useState(false);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "দুঃখিত, আপনার ব্রাউজারে স্পিচ রিকগনিশন সাপোর্ট করে না। Google Chrome ব্যবহার করুন।",
      );
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "bn-BD"; // বাংলার জন্য ডিফল্ট 'bn-BD', ইংরেজির জন্য 'en-US' করতে পারেন
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript;
      if (command && onResult) {
        onResult(command);
      }
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return { isListening, startListening };
}

export function VoiceButton({ isListening, onClick, darkMode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex items-center justify-center w-12 h-12 rounded-full duration-500 shadow-2xl hover:scale-110 select-none overflow-visible flex-shrink-0
        ${
          isListening
            ? "bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-purple-500/50"
            : darkMode
              ? "bg-slate-900 border border-slate-700 text-purple-400 hover:text-purple-300 shadow-black/40"
              : "bg-white border border-slate-300 text-purple-600 hover:bg-slate-50 shadow-sm"
        }`}
    >
      {isListening && (
        <>
          <span className="absolute inset-0 rounded-full bg-purple-500 opacity-40 animate-ping pointer-events-none"></span>
          <span className="absolute inset-2 rounded-full bg-pink-500 opacity-30 animate-pulse pointer-events-none"></span>
        </>
      )}

      <svg
        xmlns="http://w3.org"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 z-10 pointer-events-none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
        />
      </svg>
    </button>
  );
}
