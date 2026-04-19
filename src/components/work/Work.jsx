import React, { useState, useEffect } from "react";
import { projects } from "../../constant";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // BUG FIX: Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="work"
        className="section-shell clip-path-custom-2 relative min-h-screen px-[7vw] py-24 font-sans lg:px-[10vw]"
      >
        <div className="section-heading">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
          <p className="section-copy">
            A showcase of the projects I have worked on, highlighting my skills
            and experience in various technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="glass-panel tech-outline surface-hover group max-w-full basis-full cursor-pointer overflow-hidden rounded-3xl md:basis-[45%] lg:max-w-[32%] lg:basis-[30%] flex-grow"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full rounded-2xl object-cover grayscale-[10%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                  {project.title}
                </h3>
                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block rounded-md border border-cyan-300/15 bg-cyan-300/8 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/95 p-4 transition-opacity duration-300 md:p-10"
          onClick={handleCloseModal}
        >
          <div
            className="glass-panel tech-outline relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl pt-14"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="sticky right-0 top-4 z-[210] ml-auto mr-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/85 text-2xl text-white/70 backdrop-blur-md transition-colors hover:border-cyan-300/30 hover:text-cyan-200"
            >
              &times;
            </button>

            <div className="flex flex-col">
              <div className="w-full bg-black/20 p-4 md:p-8 flex justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-auto max-h-[400px] w-full rounded-xl object-contain shadow-lg"
                />
              </div>

              <div className="p-6 md:p-10">
                <h3 className="mb-4 text-2xl font-bold text-white md:text-4xl">
                  {selectedProject.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-cyan-300/15 bg-cyan-300/8 px-3 py-1 text-xs font-bold text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mb-8 text-sm leading-relaxed text-slate-300/80 md:text-lg">
                  {selectedProject.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 text-center font-bold text-white transition-all hover:border-cyan-300/30 hover:bg-white/10"
                  >
                    View Source Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl py-3 text-center font-bold text-slate-950 transition-all"
                    style={{
                      background:
                        "linear-gradient(135deg, #67e8f9 0%, #2dd4bf 52%, #93c5fd 100%)",
                    }}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
