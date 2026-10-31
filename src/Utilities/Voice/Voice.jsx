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
        navigate("/", { state: { query: text } });
      }
  };

  return (
    <div>
      <VoiceController handleSearchSubmit={handleSearchSubmit} text={text} setText={setText}/>
    </div>
  );
}

export default Voice;
