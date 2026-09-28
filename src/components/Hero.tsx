import { profile } from "../data/portfolio";

const focusAreas = [
  {
    title: "Systems development",
    description: "Web applications & workflow automation",
  },
  {
    title: "Data analysis",
    description: "Dashboards, reporting & operational insights",
  },
  {
    title: "AI integration",
    description: "Conversational tools & API integrations",
  },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="page-width">
        <div className="grid items-center gap-12 py-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:py-16">
          <div>
            <div className="mb-9 flex items-center gap-5 md:mb-10">
              <img
                src="/images/portrait.jpg"
                alt="Taj Almusawi"
                width="114"
                height="150"
                className="h-28 w-[86px] shrink-0 rounded-[20px] border border-[var(--line)] bg-white object-cover shadow-sm md:h-[150px] md:w-[114px]"
              />
              <div>
                <p className="text-xl font-semibold tracking-tight md:text-2xl">
                  {profile.name}
                </p>
                <p className="muted mt-3 text-[11px] font-semibold uppercase leading-6 tracking-[0.12em] md:text-sm">
                  Computer Science student / Saudi Arabia
                </p>
              </div>
            </div>
            <h1 className="text-[clamp(2.35rem,5vw,5.25rem)] font-semibold leading-[1.1] tracking-[-0.055em]">
              Building systems.
              <br />
              Connecting data.
              <br />
              <span className="accent">Making it useful.</span>
            </h1>
            <p className="muted mt-8 max-w-[46rem] text-base leading-[1.8] md:text-xl">
              I’m Taj, a Computer Science student focused on systems
              development, data analysis, and AI integration. I build
              applications and dashboards that make information easier to
              understand and work easier to manage.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <a className="button-primary" href="#projects">
                View selected work <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button-secondary"
                href={profile.resume}
                download="Taj_Almusawi_ATS_CV.pdf"
              >
                Download CV <span aria-hidden="true">↓</span>
              </a>
              <a
                className="px-3 py-3 text-sm font-semibold hover:underline"
                href="#contact"
              >
                Get in touch <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <aside
            aria-labelledby="focus-title"
            className="rounded-[26px] border border-[#2d3b5a] bg-[#1b2847] p-7 text-white shadow-[0_24px_60px_-35px_#1b284740] sm:p-9 lg:p-10"
          >
            <div className="mb-10 flex items-center justify-between text-[#c2ceef]">
              <p className="text-xs font-semibold uppercase tracking-[0.12em]">
                My focus
              </p>
              <span aria-hidden="true" className="text-2xl">
                ↗
              </span>
            </div>
            <h2
              id="focus-title"
              className="mb-8 text-[1.9rem] font-semibold leading-tight tracking-[-0.04em] xl:text-4xl"
            >
              Technology with
              <br />a practical purpose.
            </h2>
            <ol className="border-t border-white/15">
              {focusAreas.map((area, index) => (
                <li
                  key={area.title}
                  className="flex gap-5 border-b border-white/15 py-6"
                >
                  <span className="pt-1 text-xs text-[#bccbfd]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold md:text-lg">
                      {area.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#c2ceef] md:text-base">
                      {area.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs leading-6 text-[#c2ceef] sm:text-sm">
              Computer Science · King Faisal University
            </p>
          </aside>
        </div>
        <div className="flex flex-wrap justify-between gap-x-10 gap-y-4 border-t border-[var(--line)] py-7 text-xs sm:text-sm">
          <p>
            <span className="muted mr-3">Currently</span>
            <span className="font-medium">
              Cooperative Trainee at Alrashed Industrial
            </span>
          </p>
          <p>
            <span className="muted mr-3">Expected graduation</span>
            <span className="font-medium">December 2026</span>
          </p>
        </div>
      </div>
    </section>
  );
}
