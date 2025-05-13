import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mains from "./pages/Main/Mains";
import Us from "./pages/Us/Us";
import Aus from "./pages/Aus/Aus";
import Careers from "./pages/Careers/Careers";
import Foooter from "./components/Footer/Foooter";
import "./App.css";
const App = () => {
  return (
    <div className="bg-[#f6f9fb] text-[#2d285d] min-h-screen flex flex-col">
      <Header />

      <Routes>
        <Route path="/" element={<Mains />} />
        <Route path="/us" element={<Us />} />
        <Route path="/contactus" element={<Aus />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <Foooter />
    </div>
  );
};

export default App;
