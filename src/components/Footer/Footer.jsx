import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Shivam-272361",
      icon: <FaGithub size={18} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shivam-mishra-0985bb311/",
      icon: <FaLinkedin size={18} />,
    },
    {
      label: "Email",
      href: "mailto:shivammishra272361@gmail.com",
      icon: <HiOutlineMail size={18} />,
    },
  ];

  return (
    <footer className="section-shell border-t border-white/8 bg-[linear-gradient(180deg,rgba(2,6,23,0.4)_0%,rgba(2,6,23,0.92)_30%,#020617_100%)] px-[7vw] py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1),transparent_26%)]" />

      <div className="glass-panel tech-outline mx-auto max-w-6xl rounded-[2rem] px-6 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <h3 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Building clean, practical, and scalable web applications.
            </h3>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-300/80">
              Built by Shivam Mishra using modern web technologies.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.08] hover:text-cyan-200"
                >
                  <span className="text-cyan-300 transition group-hover:scale-110">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:min-w-[24rem]">
            <div>
              <h4 className="font-mono text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Quick Links
              </h4>
              <div className="mt-4 flex flex-col gap-3">
                {footerLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-slate-300 transition hover:text-cyan-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Signature
              </h4>
              <div className="mt-4 rounded-2xl border border-cyan-300/12 bg-slate-900/50 p-4">
                <p className="text-sm leading-7 text-slate-300/80">
                  Shivam Mishra
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  MERN stack developer focused on clean UI, full-stack products, and practical engineering.
                </p>
                <a
                  href="#about"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white"
                >
                  Back to top
                  <FaArrowUp size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>2026 Shivam Mishra. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em] text-slate-400">
            Designed with a modern tech aesthetic
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
