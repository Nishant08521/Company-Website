import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom"; // <-- add this

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // <-- get current path

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`w-full px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center font-extrabold text-xl tracking-wide text-black">
        <a href="/">
          <span>LOGO</span>
        </a>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 font-semibold text-[#2d285d] text-base">
        <a
          href="/"
          className={`hover:text-purple-700 transition ${
            isActive("/")
              ? "bg-purple-100 text-purple-700 font-bold rounded-md px-3 py-1"
              : ""
          }`}
        >
          Home
        </a>
        <a
          href="/us"
          className={`hover:text-purple-700 transition ${
            isActive("/us")
              ? "bg-purple-100 text-purple-700 font-bold rounded-md px-3 py-1"
              : ""
          }`}
        >
          About
        </a>
        <a href="#services" className="hover:text-purple-700 transition">
          Services
        </a>
        <a
          href="/careers"
          className={`hover:text-purple-700 transition ${
            isActive("/careers")
              ? "bg-purple-100 text-purple-700 font-bold rounded-md px-3 py-1"
              : ""
          }`}
        >
          Careers
        </a>
        <a
          href="/contactus"
          className={`hover:text-purple-700 transition ${
            isActive("/contactus")
              ? "bg-purple-100 text-purple-700 font-bold rounded-md px-3 py-1"
              : ""
          }`}
        >
          Contact
        </a>
      </nav>

      {/* Desktop Appointment Button */}
      <a
        href="/contactus"
        className="hidden md:flex ml-6 px-5 py-2.5 rounded-md bg-[#6c63ff] text-white font-bold items-center gap-2 shadow-md hover:bg-[#3f358c] transition"
      >
        Make Appointment →
      </a>

      {/* Mobile Hamburger */}
      <button onClick={toggleMenu} className="md:hidden text-black">
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Slide Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col md:hidden w-full h-full px-6 py-8">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-extrabold">LOGO</span>
            <button onClick={toggleMenu}>
              <X className="w-6 h-6 text-black" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 font-semibold text-lg text-[#2d285d]">
            <a
              href="/"
              onClick={toggleMenu}
              className={`px-4 py-2 rounded-md transition ${
                isActive("/") ? "bg-purple-100 text-purple-700 font-bold" : ""
              }`}
            >
              Home
            </a>
            <a
              href="/us"
              onClick={toggleMenu}
              className={isActive("/us") ? "text-purple-700 font-bold" : ""}
            >
              About
            </a>
            <a href="#services" onClick={toggleMenu}>
              Services
            </a>
            <a
              href="/careers"
              onClick={toggleMenu}
              className={
                isActive("/careers") ? "text-purple-700 font-bold" : ""
              }
            >
              Careers
            </a>
            <a
              href="/contactus"
              onClick={toggleMenu}
              className={
                isActive("/contactus") ? "text-purple-700 font-bold" : ""
              }
            >
              Contact
            </a>
          </nav>

          <a
            href="/contactus"
            className="mt-auto px-5 py-3 rounded-md bg-[#6c63ff] text-white font-bold shadow-md hover:bg-[#3f358c] transition text-center"
          >
            Make Appointment →
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
