import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <section
      id="about"
      className="section-shell flex min-h-[90vh] items-center px-[7vw] py-12 font-sans lg:px-[15vw]"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_70%_25%,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.35)_100%)]" />
      <div className="glass-panel tech-outline absolute right-[12%] top-[18%] -z-10 hidden h-32 w-32 rotate-12 rounded-3xl xl:block" />

      <div className="relative z-10 flex w-full flex-col items-center justify-between gap-10 md:flex-row">
        <div className="md:w-3/5 text-left flex flex-col items-start">
          <h1 className="mt-6 text-3xl font-bold leading-tight text-slate-100 md:text-5xl">
            Hi, I am
          </h1>
          <h2 className="mb-6 mt-5 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            Shivam Mishra
          </h2>

          <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold md:text-3xl">
            <span className="text-slate-200">I am a</span>
            <span className="font-mono text-cyan-300">
              <Typewriter
                words={[
                  'MERN Stack Developer',
                  'Cyber Security Student',
                  'Aspiring Software Developer'
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-300/80 md:text-xl">
            Aspiring Software Developer and CSE (Cybersecurity) student with hands-on experience in building full-stack web applications using the MERN stack. Solved a significant number of DSA problems and continuously improving problem-solving and backend development skills.
          </p>

          <a
            href="#"
            className="hero-button animate-pulse-glow"
          >
            DOWNLOAD CV
          </a>
        </div>

        <div className="md:w-2/5 flex justify-center md:justify-end relative">
          <div className="absolute inset-0 scale-110 rounded-full border-[3px] border-cyan-300/20 blur-sm" />
          <div className="absolute inset-6 rounded-full border border-white/10" />

          <Tilt
            className="z-10 h-64 w-64 overflow-hidden rounded-full border-[6px] border-cyan-300/70 bg-slate-900 md:h-[26rem] md:w-[26rem]"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            glareEnable
            glareMaxOpacity={0.15}
            glareColor="#cffafe"
          >
            <img
              src="profile.png"
              alt="Shivam Mishra"
              className="h-full w-full object-cover saturate-110 contrast-110"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
