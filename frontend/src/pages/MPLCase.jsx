import React from "react";
import { mplCase } from "../caseStudies";
import CaseShell from "../components/CaseShell";
import { Users, Target, TrendingUp, Sparkles } from "lucide-react";

const sections = [
  { id: "overview", label: "01 Overview" },
  { id: "challenge", label: "02 Challenge" },
  { id: "audience", label: "03 Audience" },
  { id: "insights", label: "04 Insights" },
  { id: "process", label: "05 Process" },
  { id: "testing", label: "06 Testing" },
  { id: "impact", label: "07 Impact" },
  { id: "outcomes", label: "08 Reflection" },
];

const MPLCaseStudy = () => {
  const c = mplCase;
  return (
    <CaseShell title={c.title} subtitle={c.subtitle} sections={sections}>
      <section id="overview">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">01 — Project overview</div>
        <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.06] mt-3 font-medium">{c.title}</h1>
        <p className="mt-6 max-w-[760px] text-[16.5px] text-muted-foreground leading-[1.75]">{c.overview}</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 border border-border rounded-xl overflow-hidden">
          <Meta label="Project" value={c.meta.project} />
          <Meta label="Role" value={c.meta.role} />
          <Meta label="Methods" value={c.meta.tools} />
          <Meta label="Sample" value={c.meta.dataSource} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
          {c.highlights.map((h) => (
            <div key={h.label} className="border border-border rounded-xl p-5 bg-card">
              <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{h.label}</div>
              <div className="font-serif text-[28px] mt-2 text-rust">{h.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="challenge">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">02 — Challenge & goal</div>
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="border border-border rounded-xl p-7 bg-card">
            <div className="flex items-center gap-2 text-rust"><Target size={16} /><span className="text-[12px] tracking-[0.18em] uppercase">Challenge</span></div>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-foreground/90">{c.challenge}</p>
          </div>
          <div className="border border-border rounded-xl p-7 bg-card">
            <div className="flex items-center gap-2 text-rust"><Sparkles size={16} /><span className="text-[12px] tracking-[0.18em] uppercase">Goal</span></div>
            <p className="mt-4 text-[15.5px] leading-[1.75] text-foreground/90">{c.goal}</p>
          </div>
        </div>
      </section>

      <section id="audience">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">03 — Audience</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Who plays, why, and how much.</h2>
        <div className="grid md:grid-cols-2 gap-5 mt-8">
          <div className="border border-border rounded-xl p-6 bg-card">
            <div className="flex items-center gap-2 text-rust"><Users size={16} /><span className="text-[12px] tracking-[0.18em] uppercase">Demographics</span></div>
            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {c.audience.demographics.map((d) => (
                <React.Fragment key={d.label}>
                  <dt className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground">{d.label}</dt>
                  <dd className="text-[14px] text-foreground">{d.value}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
          <div className="border border-border rounded-xl p-6 bg-card">
            <div className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">By spend tier</div>
            <div className="mt-4 space-y-3">
              {c.audience.bySpend.map((s, i) => {
                const widths = ["30%", "58%", "92%"];
                return (
                  <div key={s.name}>
                    <div className="flex items-center justify-between text-[13.5px]">
                      <span className="text-foreground">{s.name}</span>
                      <span className="text-rust font-serif text-[18px]">{s.value}</span>
                    </div>
                    <div className="mt-1.5 h-2 rounded-full bg-secondary overflow-hidden">
                      <div className="h-full bg-rust" style={{ width: widths[i] }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">By gaming persona</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {c.audience.personas.map((p) => (
              <div key={p.name} className="border border-border rounded-xl p-5 bg-card card-lift">
                <div className="font-serif text-[20px] font-medium">{p.name}</div>
                <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-3 inline-block text-[11px] tracking-[0.14em] uppercase px-2 py-1 rounded bg-rust/10 text-rust">{p.spend}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="insights">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">04 — Research insights</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Four signals shaped the redesign.</h2>
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          {c.insights.map((f) => (
            <div key={f.num} className="border border-border rounded-xl p-6 bg-card card-lift">
              <div className="text-[11px] tracking-[0.18em] uppercase text-rust">{f.num}</div>
              <h3 className="font-serif text-[22px] mt-2 font-medium">{f.title}</h3>
              <p className="mt-3 text-[14.5px] text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">05 — Process</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Behavior in, design out.</h2>
        <ol className="mt-10 space-y-4">
          {c.process.map((m) => (
            <li key={m.num} className="flex gap-5 border border-border rounded-xl p-5 bg-card">
              <div className="w-9 h-9 rounded-full bg-secondary text-foreground/80 flex items-center justify-center font-serif text-[16px] shrink-0">{m.num}</div>
              <div>
                <h3 className="font-serif text-[20px] font-medium">{m.title}</h3>
                <p className="mt-1 text-[14px] text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="testing">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">06 — Usability testing</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Validated screen by screen.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {c.testingFindings.map((f) => (
            <div key={f.area} className="border border-border rounded-xl p-5 bg-card">
              <div className="text-[11px] tracking-[0.18em] uppercase text-rust">{f.area}</div>
              <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="impact">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">07 — Impact</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">From overwhelmed to onboarded.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {c.impact.map((s) => (
            <div key={s.label} className="border border-border rounded-xl p-5 bg-card">
              <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{s.label}</div>
              <div className="font-serif text-[24px] mt-2 text-rust">{s.value}</div>
              <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="outcomes">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">08 — Reflection</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Trust is interface honesty.</h2>
        <div className="mt-8 space-y-5">
          {c.outcomes.text.map((t, i) => (
            <p key={i} className="text-[16px] text-muted-foreground leading-[1.75] max-w-[760px]">{t}</p>
          ))}
        </div>
      </section>
    </CaseShell>
  );
};

const Meta = ({ label, value }) => (
  <div className="p-5 border-b sm:border-b-0 sm:[&:nth-child(odd)]:border-r border-border last:border-b-0">
    <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{label}</div>
    <div className="mt-1.5 text-[15px] text-foreground">{value}</div>
  </div>
);

export default MPLCaseStudy;
