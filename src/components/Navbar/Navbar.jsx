import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-[7vw] transition duration-300 md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "border-b border-cyan-300/10 bg-slate-950/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-5 text-white">
        <div className="cursor-pointer font-mono text-lg font-semibold tracking-[0.18em] uppercase">
          <span className="text-white">Shivam </span>
          <span className="text-slate-300"> Mishra</span>
        </div>

        <ul className="hidden space-x-8 text-sm uppercase tracking-[0.2em] text-slate-300 md:flex">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition hover:text-cyan-300 ${
                activeSection === item.id ? "text-cyan-300" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Shivam-272361"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-mishra-0985bb311/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="cursor-pointer text-3xl text-cyan-300"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="cursor-pointer text-3xl text-cyan-300"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="glass-panel absolute left-1/2 top-16 z-50 w-4/5 -translate-x-1/2 rounded-2xl border border-cyan-300/15 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-5 text-sm uppercase tracking-[0.18em] text-slate-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition hover:text-cyan-200 ${
                  activeSection === item.id ? "text-cyan-300" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Shivam-272361"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-mishra-0985bb311/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
