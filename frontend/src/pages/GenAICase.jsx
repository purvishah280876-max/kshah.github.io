import React from "react";
import { genaiCase } from "../caseStudies";
import { BarChart, HorizontalBarChart, DonutChart, RadarChart } from "../components/Charts";
import ContactSection from "../components/ContactSection";
import CaseShell from "../components/CaseShell";

const sections = [
  { id: "overview", label: "01 Overview" },
  { id: "context", label: "02 Context" },
  { id: "objectives", label: "03 Objectives" },
  { id: "methodology", label: "04 Methodology" },
  { id: "stakeholders", label: "05 Stakeholders" },
  { id: "pestel", label: "06 PESTEL" },
  { id: "comparative", label: "07 Comparative" },
  { id: "findings", label: "08 Findings" },
  { id: "recommendations", label: "09 Recommendations" },
];

const GenAICaseStudy = () => {
  const c = genaiCase;
  return (
    <CaseShell title={c.title} subtitle={c.subtitle} sections={sections}>
      <section id="overview">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">01 — Project overview</div>
        <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.06] mt-3 font-medium">{c.title}</h1>
        <p className="mt-6 max-w-[760px] text-[16.5px] text-muted-foreground leading-[1.75]">{c.overview}</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 border border-border rounded-xl overflow-hidden">
          <Meta label="Project" value={c.meta.project} />
          <Meta label="Role" value={c.meta.role} />
          <Meta label="Tools" value={c.meta.tools} />
          <Meta label="Data sources" value={c.meta.dataSource} />
        </div>
        <blockquote className="mt-10 border-l-2 border-rust pl-6 py-2 font-serif italic text-[24px] md:text-[30px] leading-[1.25] text-foreground/90 max-w-[820px]">
          {c.question}
        </blockquote>
      </section>

      <section id="context">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">02 — Research context</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Three tensions in the field.</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {c.context.map((x, i) => (
            <div key={i} className="border border-border rounded-xl p-6 bg-card">
              <div className="text-[12px] font-serif italic text-rust">{`0${i + 1}`}</div>
              <h3 className="font-serif text-[20px] font-medium mt-2">{x.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{x.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="objectives">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">03 — Objectives</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Five goals shaped the study.</h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mt-10">
          {c.objectives.map((o) => (
            <div key={o.num} className="flex gap-5">
              <div className="font-serif text-[34px] text-rust/70 leading-none">{o.num}</div>
              <div>
                <h3 className="font-serif text-[22px] font-medium">{o.title}</h3>
                <p className="mt-2 text-[14.5px] text-muted-foreground leading-relaxed">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="methodology">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">04 — Methodology</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Triangulated secondary research.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {[
            { label: "Approach", items: [c.methodology.approach] },
            { label: "Data types", items: c.methodology.dataTypes },
            { label: "Sources", items: c.methodology.sources },
            { label: "Outputs", items: c.methodology.outputs },
          ].map((col) => (
            <div key={col.label} className="border border-border rounded-xl p-5 bg-card">
              <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{col.label}</div>
              <ul className="mt-3 space-y-1.5">
                {col.items.map((it) => (
                  <li key={it} className="text-[13.5px] text-foreground/85 flex gap-2 items-start">
                    <span className="text-rust mt-1.5 block w-1 h-1 rounded-full bg-rust shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="stakeholders">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">05 — Stakeholder mapping</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Primary stakeholders shape and are shaped by the work.</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {[
            { label: "Primary", items: c.stakeholders.primary, tone: "strong" },
            { label: "Influence", items: c.stakeholders.influence, tone: "mid" },
            { label: "Impact", items: c.stakeholders.impact, tone: "soft" },
          ].map((col, i) => (
            <div key={col.label} className={`border border-border rounded-xl p-5 ${i === 0 ? "bg-rust/10 border-rust/30" : "bg-card"}`}>
              <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{col.label}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {col.items.map((it) => (
                  <span key={it} className="px-3 py-1.5 rounded-full border border-border text-[12.5px] bg-background">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {c.stakeholders.notes.map((n) => (
            <div key={n.who} className="border border-border rounded-xl p-5 bg-card">
              <div className="font-serif text-[18px]">{n.who}</div>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{n.what}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pestel">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">06 — PESTEL analysis</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Six lenses on AI in education.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {c.pestel.map((p) => (
            <div key={p.dim} className="border border-border rounded-xl p-5 bg-card">
              <div className="flex items-center gap-2">
                <span className="font-serif text-[28px] text-rust/70 leading-none">{p.dim[0]}</span>
                <span className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">{p.dim}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="text-[13.5px] text-foreground/85 leading-relaxed flex gap-2">
                    <span className="text-rust mt-1.5 block w-1 h-1 rounded-full bg-rust shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="comparative">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">07 — Comparative analysis</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">{c.comparative.title}</h2>
        <div className="mt-8 border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 bg-secondary/40 text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
            <div className="p-4">Dimension</div>
            <div className="p-4 border-l border-border">China</div>
            <div className="p-4 border-l border-border">Romania</div>
          </div>
          {c.comparative.rows.map((r, i) => (
            <div key={r.label} className={`grid grid-cols-3 ${i ? "border-t border-border" : ""}`}>
              <div className="p-4 font-serif text-[16px]">{r.label}</div>
              <div className="p-4 border-l border-border text-[14px] text-foreground/85">{r.a}</div>
              <div className="p-4 border-l border-border text-[14px] text-foreground/85">{r.b}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="findings">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">08 — Findings</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Where students actually use GenAI.</h2>
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <DonutChart
            title={c.tools.label}
            data={c.tools.data}
            takeaway="ChatGPT dominates; the long tail is fragmented across visual and translation tools."
          />
          <HorizontalBarChart
            title={c.faculty.label}
            data={c.faculty.data}
            takeaway="Engineering and Arts lead adoption; Social Sciences and Agriculture trail."
          />
        </div>

        <div className="mt-10">
          <div className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">Drivers behind GenAI use</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {c.drivers.map((d) => (
              <span key={d} className="px-3 py-1.5 rounded-full border border-border text-[12.5px] text-foreground/85 bg-card">{d}</span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <div className="border border-border rounded-xl p-6 bg-card">
            <div className="text-[11px] tracking-[0.18em] uppercase text-rust">Merits</div>
            <div className="mt-4 space-y-4">
              {c.impacts.merits.map((m) => (
                <div key={m.area}>
                  <div className="font-serif text-[18px] text-foreground">{m.area}</div>
                  <ul className="mt-2 space-y-1.5">
                    {m.points.map((pt) => (
                      <li key={pt} className="text-[13.5px] text-muted-foreground flex gap-2 items-start">
                        <span className="text-rust mt-1.5 w-1 h-1 rounded-full bg-rust shrink-0" />{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-border rounded-xl p-6 bg-card">
            <div className="text-[11px] tracking-[0.18em] uppercase text-rust">Risks of over-reliance</div>
            <div className="mt-4 space-y-4">
              {c.impacts.risks.map((m) => (
                <div key={m.area}>
                  <div className="font-serif text-[18px] text-foreground">{m.area}</div>
                  <ul className="mt-2 space-y-1.5">
                    {m.points.map((pt) => (
                      <li key={pt} className="text-[13.5px] text-muted-foreground flex gap-2 items-start">
                        <span className="text-rust mt-1.5 w-1 h-1 rounded-full bg-rust shrink-0" />{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border border-border rounded-xl p-6 bg-rust/5">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-4 justify-between">
            <div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Headline signal</div>
              <div className="font-serif text-[44px] text-rust mt-2">{c.closingStat.value}</div>
            </div>
            <p className="text-[15px] text-foreground/90 max-w-[520px]">{c.closingStat.desc}</p>
          </div>
        </div>
      </section>

      <section id="recommendations">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">09 — Recommendations</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Five guardrails for safe integration.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {c.recommendations.map((r) => (
            <div key={r.num} className="border border-border rounded-xl p-6 bg-card card-lift">
              <div className="text-[11px] tracking-[0.18em] uppercase text-rust">{r.num}</div>
              <h3 className="font-serif text-[20px] font-medium mt-2">{r.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
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

export default GenAICaseStudy;
