import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VoiceController from "./VoiceController"; // ইমপোর্ট করুন

function Voice() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      navigate(`/search?q=${encodeURIComponent(text)}`);
      setText("");
    }
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#2c3e50",
        color: "#fff",
        alignItems: "center",
      }}
    >
      <h2
        style={{ margin: 0, cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        MyWebsite
      </h2>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* ভয়েস কন্ট্রোলার বাটন */}
        <VoiceController />

        {/* সাধারণ সার্চ ফর্ম */}
        <form
          onSubmit={handleSearchSubmit}
          style={{ display: "flex", gap: "8px" }}
        >
          <input
            type="text"
            placeholder="ওয়েবসাইটের ভেতরে খুঁজুন..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 15px",
              background: "#3498db",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Voice;
