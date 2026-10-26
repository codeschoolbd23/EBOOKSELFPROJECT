import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function VoiceController() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const navigate = useNavigate();

  // ব্রাউজার সাপোর্ট চেক করা
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null;

  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false; // একবার কথা বলা শেষ হলে থমকে যাবে
    recognition.lang = "en-US"; // বাংলার জন্য 'bn-BD' ব্যবহার করতে পারেন
    recognition.interimResults = false;
  }

  const startListening = () => {
    if (!recognition) {
      alert(
        "দুঃখিত, আপনার ব্রাউজারে স্পিচ রিকগনিশন সাপোর্ট করে না। Chrome ব্যবহার করুন।",
      );
      return;
    }
    setIsListening(true);
    recognition.start();
  };

  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase().trim();
      setTranscript(command);
      setIsListening(false);

      // --- ভয়েস কমান্ড লজিক ---

      // ১. হোম পেজে যাওয়ার কমান্ড
      if (command.includes("go to home") || command === "home") {
        navigate("/");
      }
      // ২. অ্যাবাউট পেজে যাওয়ার কমান্ড
      else if (command.includes("go to about") || command === "about") {
        navigate("/about");
      }
      // ৩. সার্চ করার কমান্ড (যেমন ইউজার বলল: "search bangla book")
      else if (command.startsWith("search")) {
        const searchQuery = command.replace("search", "").trim();
        if (searchQuery) {
          navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  }, [navigate]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button
        onClick={startListening}
        style={{
          padding: "8px 15px",
          background: isListening ? "#e74c3c" : "#2ecc71",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
          animation: isListening ? "pulse 1.5s infinite" : "none",
        }}
      >
        {isListening ? "🎤 শুনছি..." : "🎙️ Voice Command"}
      </button>

      {transcript && (
        <span style={{ fontSize: "13px", color: "#ccc" }}>
          ইউজার বলেছেন: "{transcript}"
        </span>
      )}

      {/* পালস অ্যানিমেশনের জন্য ছোট সিএসএস স্টাইল */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default VoiceController;
