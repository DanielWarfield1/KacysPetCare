import "./styles.css";
import HomePage from "./Pages/HomePage.js";
import Services from "./Pages/Services.js";
import Navbar from "./Components/Navbar.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";

function onChangeView(view) {
  window.scrollTo(0, 0);
  console.log("Changed View");
}

export default function App() {
  return (
    <Router>
      <div className="AppContainer">
        <div className="App">
          <Navbar onChangeView={onChangeView} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
