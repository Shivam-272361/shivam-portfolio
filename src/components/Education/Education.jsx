import React from "react";
import { education } from "../../constant";

const Education = () => {
  return (
    <section
      id="education"
      className="section-shell bg-skills-gradient clip-path-custom-3 relative px-[7vw] py-24 pb-44 font-sans lg:px-[15vw]"
    >
      <div className="section-heading relative z-10">
        <span className="section-kicker">Academic Path</span>
        <h2 className="section-title">Education</h2>
        <div className="section-divider" />
        <p className="section-copy">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 relative z-10">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="glass-panel tech-outline surface-hover group flex max-w-full flex-grow basis-full flex-col gap-5 rounded-2xl p-6 md:max-w-[500px] md:basis-[45%] lg:basis-[22%]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-cyan-300/25 bg-white">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <h3 className="truncate text-base font-bold leading-tight text-slate-100">
                  {edu.degree}
                </h3>
                <p className="mt-1 truncate text-xs text-slate-400">{edu.school}</p>
              </div>
            </div>

            <div className="h-px bg-white/5 w-full" />

            <div className="flex items-center justify-between gap-2">
              <span className="whitespace-nowrap rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-bold text-cyan-200 md:text-[11px]">
                {edu.date}
              </span>
              <span className="whitespace-nowrap rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-300 md:text-[11px]">
                {edu.grade}
              </span>
            </div>

            <p className="text-sm font-medium leading-relaxed text-slate-300/80">
              {edu.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
