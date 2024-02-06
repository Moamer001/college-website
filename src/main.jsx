import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="w-screen bg-gradient-to-b from-blue-50 to-orange-100">
    <div className="h-24 z-50 sticky top-0">
      <Navbar />
    </div>

    <div className="h-[calc(100vh-6rem)]">
      <App />
    </div>
  </div>
);