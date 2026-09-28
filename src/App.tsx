import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import { profile, projects, skills } from "./data/portfolio";

const navigation = ["About", "Skills", "Projects", "Experience", "Contact"];
const filters = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "dark"
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* The theme still works without storage. */
    }
  }, [theme]);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header sticky top-0 z-50 border-b backdrop-blur-xl">
        <div className="page-width flex min-h-20 items-center justify-between gap-4">
          <a
            href="#home"
            aria-label="Home"
            className="flex items-center gap-3 text-lg font-semibold tracking-tight"
          >
            <span className="logo-mark" aria-hidden="true">
              &lt;/&gt;
            </span>
            {profile.name || "dev.portfolio"}
            <span className="accent -ml-2">.</span>
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 text-sm md:flex"
          >
            {navigation.map((item) => (
              <a
                className="nav-link"
                key={item}
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="icon-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
            </button>
            <button
              type="button"
              className="icon-button md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="page-width flex flex-col gap-1 pb-5 md:hidden"
            onKeyDown={(event) => {
              if (event.key === "Escape") setMenuOpen(false);
            }}
          >
            {navigation.map((item) => (
              <a
                className="nav-link rounded-lg px-3 py-3"
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        <Hero />

        <section id="about" className="section-border">
          <div className="page-width grid gap-10 py-20 md:grid-cols-2 md:gap-20 md:py-24">
            <div>
              <SectionHeading
                number="01 / ABOUT"
                title="Curious about data. Focused on useful systems."
                description="Computer Science at King Faisal University · Expected December 2026"
              />
              <div className="mb-6 flex items-center gap-4">
                <img
                  src="/images/portrait.jpg"
                  alt="Taj Almusawi"
                  width="64"
                  height="64"
                  className="h-16 w-16 rounded-full border border-[var(--line)] object-cover"
                />
                <div>
                  <p className="font-semibold">Taj Almusawi</p>
                  <p className="muted mt-1 text-sm">
                    Computer Science student · Saudi Arabia
                  </p>
                </div>
              </div>
              <p className="muted text-base leading-8">{profile.bio}</p>
              <p className="muted mt-5 text-sm">
                Arabic — Native · English — Professional working proficiency
              </p>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <div className="panel rounded-xl p-7">
                <span className="accent font-mono text-sm">↗ THE APPROACH</span>
                <h3 className="mb-3 mt-4 text-xl font-semibold">
                  Technology with a practical purpose.
                </h3>
                <p className="muted leading-7">
                  My interests span software engineering, artificial
                  intelligence, data analysis, and process automation. I connect
                  practical requirements with useful interfaces, reliable
                  workflows, and clearer reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-border section-tint">
          <div className="page-width py-20 md:py-24">
            <SectionHeading
              number="02 / TOOLKIT"
              title="The tools behind the work."
              description="A foundation in the web, with a growing focus on modern frontend development."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {skills.map((skill) => (
                <article className="panel rounded-xl p-7" key={skill.title}>
                  <p className="eyebrow">{skill.label}</p>
                  <h3 className="mb-3 mt-6 text-xl font-semibold">
                    {skill.title}
                  </h3>
                  <p className="muted min-h-24 text-sm leading-7">
                    {skill.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <li className="tag" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-border">
          <div className="page-width py-20 md:py-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                number="03 / PROJECTS"
                title="Selected work. Real experience."
                description="Three projects spanning industrial systems, conversational AI, and data-driven dashboards."
              />
              <div
                aria-label="Filter projects"
                className="mb-10 flex gap-2 md:mb-14"
              >
                {filters.map((item) => (
                  <button
                    type="button"
                    key={item}
                    aria-pressed={filter === item}
                    onClick={() => setFilter(item)}
                    className={`filter-button ${filter === item ? "selected" : ""}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-7 md:grid-cols-2">
              {projects
                .filter(
                  (project) => filter === "All" || project.category === filter,
                )
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-border section-tint">
          <div className="page-width py-20 md:py-24">
            <SectionHeading
              number="04 / EXPERIENCE"
              title="Learning through practical work."
              description="Experience, education, and a commitment to keep growing."
            />
            <div className="grid gap-7 md:grid-cols-2">
              <article className="panel rounded-xl p-7">
                <p className="eyebrow">JUNE 2026 — PRESENT</p>
                <h3 className="mb-2 mt-5 text-2xl font-semibold">
                  Cooperative Trainee
                </h3>
                <p className="accent text-sm">Alrashed Industrial Company</p>
                <ul className="muted mt-6 list-disc space-y-3 pl-5 text-sm leading-7">
                  <li>
                    Automated selected HR workflows and supported recruitment
                    and employee-data processes.
                  </li>
                  <li>
                    Developing an internal training system for factory-level
                    reporting, course tracking, and compliance indicators.
                  </li>
                  <li>
                    Collaborated with an external provider on the recruitment
                    website to align it with the department’s hiring workflow.
                  </li>
                </ul>
              </article>
              <article className="panel rounded-xl p-7">
                <p className="eyebrow">
                  JANUARY 2021 — DECEMBER 2026 · EXPECTED
                </p>
                <h3 className="mb-2 mt-5 text-2xl font-semibold">
                  BSc in Computer Science
                </h3>
                <p className="accent text-sm">
                  King Faisal University · Saudi Arabia
                </p>
                <p className="muted mt-6 text-sm leading-7">
                  Expected graduation: December 2026. Areas of study and
                  interest include object-oriented programming, the software
                  development lifecycle, database management, software testing,
                  and artificial intelligence.
                </p>
                <p className="muted mt-4 text-sm leading-7">
                  Additional experience: four years in a customer-facing
                  environment.
                </p>
              </article>
            </div>
            <div className="mt-10">
              <h3 className="mb-5 text-lg font-semibold">
                Certifications & ongoing learning
              </h3>
              <ul className="flex flex-wrap gap-3">
                {[
                  "Cybersecurity Fundamentals · IBM",
                  "Artificial Intelligence · IBM",
                  "AI Agents · IBM",
                  "Flutter & Dart · In progress",
                  "CompTIA Security+ · Self-study",
                ].map((item) => (
                  <li className="tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section id="contact" className="section-border section-tint">
          <div className="page-width py-20 md:py-24">
            <div className="contact-panel relative overflow-hidden rounded-2xl border p-8 md:p-14">
              <p className="eyebrow mb-6">05 / GET IN TOUCH</p>
              <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr]">
                <div>
                  <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                    Good things start
                    <br />
                    with <span className="accent">a conversation.</span>
                  </h2>
                  <p className="muted mt-6 max-w-md leading-8">
                    Based in Saudi Arabia. Get in touch to discuss my projects,
                    development work, or opportunities.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center gap-5">
                  {profile.email ? (
                    <>
                      <a
                        className="button-primary"
                        href={`mailto:${profile.email}`}
                      >
                        Say hello ↗
                      </a>
                      <div className="flex max-w-full flex-wrap items-center gap-3">
                        <a
                          className="muted break-all text-sm"
                          href={`mailto:${profile.email}`}
                        >
                          {profile.email}
                        </a>
                        <button
                          className="accent-link text-xs"
                          type="button"
                          onClick={copyEmail}
                        >
                          {copied ? "Copied!" : "Copy email"}
                        </button>
                      </div>
                      <p role="status" className="muted text-xs">
                        {copyError
                          ? "Please select and copy the email address above."
                          : copied
                            ? "Email address copied to clipboard."
                            : ""}
                      </p>
                    </>
                  ) : (
                    <div className="panel rounded-xl p-6">
                      <p className="font-medium">Contact details coming soon</p>
                      <p className="muted mt-2 text-sm leading-6">
                        My direct contact links will be available here.
                      </p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-5 text-sm">
                    {profile.github && (
                      <a
                        className="accent-link"
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {profile.linkedin && (
                      <a
                        className="accent-link"
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn ↗
                      </a>
                    )}
                    {profile.resume && (
                      <a
                        className="accent-link"
                        href={profile.resume}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Résumé ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="section-border">
        <div className="page-width flex flex-wrap items-center justify-between gap-5 py-7 text-xs">
          <p className="muted">
            © {new Date().getFullYear()} {profile.name || "Developer portfolio"}
            . Built with care.
          </p>
          <p className="muted">React · TypeScript · Tailwind CSS</p>
          <a className="accent-link" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
