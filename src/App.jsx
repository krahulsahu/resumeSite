import { useState, useEffect } from "react";
import Header from "./components/Header";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Coursework from "./components/Coursework";
import Projects from "./components/Projects";
import Activities from "./components/Activities";

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme in localStorage
  };
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "";
  }, [theme]);

  // Function to handle resume download directly from Google Drive
  const downloadResume = () => {
    const fileId = "12GZKxBUAGrl2I-OOuj1Eg5CxWSmPmvl4"; // Your Google Drive file ID
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Resume.pdf"; // You can set the file name for download here
    link.click();
  };

  return (
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg dark:bg-gray-700">
    <div className={`min-h-screen p-6 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
        <button
          onClick={toggleTheme}
          className="absolute top-6 right-6 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition duration-200"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>

        <Header />
        <Education />
        <Skills />
        <Coursework />
        <Projects />
        <Activities />

        {/* Download Button */}
        <div className="mt-6 text-center">
          <button
            onClick={downloadResume}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
