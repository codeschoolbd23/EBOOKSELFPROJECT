import { useState} from "react";
function ThemeControler() {
  const [darkMode, setDarkMode] = useState(false);
  return (
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`transition-all duration-300 rounded-full flex items-center justify-center ${
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
              className="w-4 h-4 animate-pulse"
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
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </button>
  );
}
export default ThemeControler;
