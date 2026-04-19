import React from "react";
import { SkillsInfo } from "../../constant";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="section-shell bg-skills-gradient clip-path-custom px-[7vw] py-24 font-sans lg:px-[15vw]"
  >
    <div className="section-heading">
      <span className="section-kicker">Tech Stack</span>
      <h2 className="section-title">Skills</h2>
      <div className="section-divider" />
      <p className="section-copy">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
    </div>

    <div className="flex flex-wrap gap-6 justify-center">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="glass-panel tech-outline surface-hover w-full rounded-3xl p-8 md:w-[45%] lg:w-[48%]"
        >
          <h3 className="mb-8 text-center font-mono text-2xl font-semibold uppercase tracking-[0.18em] text-cyan-200/90">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2.5 transition-all hover:border-cyan-300/40 hover:bg-cyan-300/[0.06]"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="whitespace-nowrap text-sm font-medium text-slate-200 md:text-base">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
