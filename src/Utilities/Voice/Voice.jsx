import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VoiceController from "./VoiceController"; // ইমপোর্ট করুন

function Voice() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "")
       {
        navigate("/search", { state: { query: text } });
      } else {
        // alert("অনুগ্রহ করে কিছু লিখুন!");
        navigate("/", { state: { query: text } });
        // setText("");
      }
  };

  return (
   

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
            placeholder="খুঁজুন..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{

              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
           
          >
            Search
          </button>
        </form>
      </div>
  );
}

export default Voice;
