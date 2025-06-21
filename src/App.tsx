import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Home from "./Screens/Home";
import RealEstate from "./Screens/RealEstate";
import Cooperative from "./Screens/Cooperative";
import Transport from "./Screens/Transport";
import Contact from "./Screens/Contact";
import JoinReg from "./JoinSobog/JoinReg";
import Staffs from "./Screens/staffs";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Scroll logic to hide header only on homepage
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (location.pathname === "/") {
        setIsScrollingDown(currentY > lastScrollY && currentY > 50);
        setLastScrollY(currentY);
      } else {
        setIsScrollingDown(false); // disable header hide on other pages
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, location]);

  return (
    <div className="app-wrapper">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" className="logo-link">
            <img src="/sobog.png" alt="SOBOG Logo" className="sidebar-logo" />
            <span className="logo-text">SOBOG</span>
          </Link>
        </div>

        <nav className="nav-section">
          <p className="nav-label">Main</p>
          <Link to="/" className="nav-item">🏠 Home</Link>
          <Link to="/real-estate" className="nav-item">🏢 Real Estate</Link>
          <Link to="/cooperative" className="nav-item">🤝 Co-operative</Link>
          <Link to="/transport" className="nav-item">🚚 Transportation</Link>
          <Link to="/contact" className="nav-item">📞 Contact</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header
          className={`top-header ${
            location.pathname !== "/" ? "slide-out" : isScrollingDown ? "hidden-header" : ""
          }`}
        >
          <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
          <div className="brand-title">
            <h1>SOBOG NIG LTD</h1>
            <p>RC 7150043</p>
          </div>
        </header>

        {/* Hero section only on homepage */}
        {location.pathname === "/" && (
          <section className="hero-section">
            <div className="hero-overlay">
              <h2 className="hero-heading">Excellence in Real Estate, Co-operative & Transport Services</h2>
              <p className="hero-subtext">
                SOBOG Nigeria Limited is committed to delivering exceptional value across real estate,
                logistics, co-operative empowerment, and water distribution.
              </p>
            </div>
          </section>
        )}

        {/* Routed Pages */}
        <section className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/cooperative" element={<Cooperative />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/JoinReg" element={<JoinReg />} />
            <Route path="/staffs" element={<Staffs />} />
          </Routes>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} SOBOG Nigeria Limited. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
