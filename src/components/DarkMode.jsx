import { useEffect, useState } from "react";

export default function DarkMode() {
  const [darkmode, setDarkMode] = useState("");

  
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode("");
    }
  }, []); 

  
  function toggleDarkMode() {
    if (darkmode === "dark") {
      document.documentElement.classList.remove("dark");
      setDarkMode("");
      localStorage.setItem("darkMode", "");
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode("dark");
      localStorage.setItem("darkMode", "dark");
    }
  }

  return (
    <>
      <div
        className="flex flex-col absolute right-2 bottom-5 p-4 cursor-pointer"
        onClick={toggleDarkMode}
      >
        <h2 className="text-base bg-base p-2 rounded-md">
          {darkmode === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </h2>
      </div>
    </>
  );
}
