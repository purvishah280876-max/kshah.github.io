import React from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { profile, skills, projects, processSteps, methods, stakeholders, decisions } from "../mock";
import SectionHeader from "../components/SectionHeader";
import ProjectChart from "../components/ProjectChart";
import ContactSection from "../components/ContactSection";
import { Search, FlaskConical, Network, Zap } from "lucide-react";

const tagColors = {
  rose: "bg-rose-100/70 text-rose-900 dark:bg-rose-900/30 dark:text-rose-200",
  amber: "bg-amber-100/70 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200",
  teal: "bg-teal-100/70 text-teal-900 dark:bg-teal-900/30 dark:text-teal-200",
  blue: "bg-blue-100/70 text-blue-900 dark:bg-blue-900/30 dark:text-blue-200",
  green: "bg-emerald-100/70 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-200",
  slate: "bg-slate-200/70 text-slate-900 dark:bg-slate-700/40 dark:text-slate-200",
  lime: "bg-lime-100/70 text-lime-900 dark:bg-lime-900/30 dark:text-lime-200",
  stone: "bg-stone-200/70 text-stone-900 dark:bg-stone-700/40 dark:text-stone-200",
};

const iconMap = {
  search: { Icon: Search, ring: "border-amber-300/60 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700/40", color: "text-amber-700 dark:text-amber-300" },
  flask: { Icon: FlaskConical, ring: "border-blue-300/60 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700/40", color: "text-blue-700 dark:text-blue-300" },
  network: { Icon: Network, ring: "border-violet-300/60 bg-violet-50 dark:bg-violet-900/20 dark:border-violet-700/40", color: "text-violet-700 dark:text-violet-300" },
  zap: { Icon: Zap, ring: "border-emerald-300/60 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-700/40", color: "text-emerald-700 dark:text-emerald-300" },
};

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 md:pt-24 pb-24">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px w-10 bg-rust" />
        <span className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">
          {profile.role} · {profile.location}
        </span>
      </div>

      <h1 className="font-serif text-[56px] md:text-[88px] leading-[1.02] font-medium tracking-tight max-w-[1100px]">
        Toronto-based researcher{" "}
        <span className="italic text-rust">ready</span>
        <br className="hidden md:block" />
        <span className="text-muted-foreground/95"> for any challenge.</span>
      </h1>

      <p className="mt-10 max-w-[640px] text-[17px] leading-[1.7] text-muted-foreground">
        I craft and optimize digital experiences grounded in human behavior — bringing
        curiosity, rigour, and a dash of creativity to every research challenge. From
        behavioral insights to strategic synthesis, I help teams understand what people
        truly need.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <button
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-md text-[14px] font-medium hover:opacity-90"
        >
          View Projects <ArrowUpRight size={16} />
        </button>
        <a
          href={profile.resumeUrl}
          className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-md text-[14px] font-medium hover:bg-secondary"
        >
          <Download size={15} /> Download Resume
        </a>
      </div>

      <div className="mt-12 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="px-4 py-1.5 rounded-full border border-border text-[12.5px] text-muted-foreground bg-card/40">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const navigate = useNavigate();
  return (
    <section id="projects" className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-10 pb-24">
      <SectionHeader
        eyebrow="Selected work"
        title="Featured projects"
        intro="Research studies spanning e-commerce, education, gaming, and sustainability."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => navigate(`/project/${p.id}`)}
            className="text-left card-lift rounded-xl border border-border bg-card overflow-hidden flex flex-col"
          >
            <div className="relative bg-secondary/40 px-5 pt-4 pb-2">
              <div className="flex items-start justify-between">
                <span className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
                  {p.number}{p.featured ? " · Featured" : ""}
                </span>
                <ArrowUpRight size={16} className="text-rust" />
              </div>
              <div className="mt-2">
                <ProjectChart kind={p.chart} />
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span key={t.label} className={`tag-pill ${tagColors[t.color]}`}>{t.label}</span>
                ))}
              </div>
              <h3 className="font-serif text-[22px] leading-[1.2] font-medium">{p.title}</h3>
              <div className="mt-6 pt-5 border-t border-border grid grid-cols-3 gap-3 text-[12px] text-muted-foreground items-start">
                <span className="leading-snug">{p.role}</span>
                <span className="leading-snug">{p.duration}</span>
                <span className="text-rust leading-snug">{p.impact}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section id="approach" className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
      <SectionHeader
        eyebrow="How I work"
        title={<>Business questions → Evidence → <span className="italic text-rust">Direction</span></>}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mt-16">
        {processSteps.map((s) => {
          const cfg = iconMap[s.icon];
          const Icon = cfg.Icon;
          return (
            <div key={s.num} className="text-center">
              <div className={`w-16 h-16 rounded-full border ${cfg.ring} flex items-center justify-center mx-auto`}>
                <Icon size={22} className={cfg.color} strokeWidth={1.5} />
              </div>
              <div className="mt-5 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{s.num}</div>
              <h4 className="mt-2 font-serif text-[24px] font-medium">{s.title}</h4>
              <p className="mt-2 text-[14px] text-muted-foreground max-w-[200px] mx-auto leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
        {[
          { title: "Methods", items: methods },
          { title: "Stakeholders", items: stakeholders },
          { title: "Decisions influenced", items: decisions },
        ].map((col) => (
          <div key={col.title} className="border border-border rounded-xl p-6 bg-card">
            <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{col.title}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {col.items.map((it) => (
                <span key={it} className="px-3 py-1.5 rounded-full border border-border text-[12.5px] text-foreground/85 bg-background">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="section-rule max-w-[1280px] mx-auto" />
      <ProjectsSection />
      <div className="section-rule max-w-[1280px] mx-auto" />
      <ProcessSection />
      <div className="section-rule max-w-[1280px] mx-auto" />
      <ContactSection />
    </div>
  );
};

export default Home;
