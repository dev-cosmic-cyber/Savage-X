import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bio from "./pages/Bio";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Web from "./pages/Web";
import Video from "./pages/Video";
import Music from "./pages/Music";
import MyApp from "./pages/MyApp";
import Upcoming from "./pages/Upcoming";
import welcGif from './welc.gif';
import "./App.css";

function App() {
  return (
    <Router>
      <div
        className="anime-bg"
        style={{
          background: `url(${welcGif}) center center / cover no-repeat fixed`,
        }}
      >
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/web" element={<Web />} />
            <Route path="/video" element={<Video />} />
            <Route path="/music" element={<Music />} />
            <Route path="/MyApp" element={<MyApp />} />
            <Route path="/Upcoming" element={<Upcoming />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;