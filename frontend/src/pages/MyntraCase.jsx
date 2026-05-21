import React, { useState } from "react";
import { myntraCase } from "../mock";
import CaseShell from "../components/CaseShell";
import {
  BarChart, GroupedBarChart, StackedBarChart, LineChart,
  ScatterChart, TreemapChart, DonutChart, Heatmap, HorizontalBarChart, RadarChart
} from "../components/Charts";

const sections = [
  { id: "overview", label: "01 Overview" },
  { id: "question", label: "02 Question" },
  { id: "objectives", label: "03 Objectives" },
  { id: "methodology", label: "04 Methodology" },
  { id: "findings", label: "05 Findings" },
  { id: "visuals", label: "06 Visuals" },
  { id: "recommendations", label: "07 Recommendations" },
  { id: "outcomes", label: "08 Outcomes" },
];

const MyntraCaseStudy = () => {
  const c = myntraCase;
  const [flipped, setFlipped] = useState({});

  return (
    <CaseShell title={c.title} subtitle={c.subtitle} sections={sections}>
      <section id="overview">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">01 — Project overview</div>
        <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.06] mt-3 font-medium">{c.title}</h1>
        <p className="mt-6 max-w-[720px] text-[16.5px] text-muted-foreground leading-[1.75]">{c.overview}</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 border border-border rounded-xl overflow-hidden">
          <Meta label="Project" value={c.meta.project} />
          <Meta label="Role" value={c.meta.role} />
          <Meta label="Tools" value={c.meta.tools} />
          <Meta label="Data source" value={c.meta.dataSource} />
        </div>
      </section>

      <section id="question">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">02 — Research question</div>
        <blockquote className="mt-5 border-l-2 border-rust pl-6 py-2 font-serif italic text-[28px] md:text-[34px] leading-[1.25] text-foreground/90">
          {c.question}
        </blockquote>
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
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">A five-step analytical workflow.</h2>
        <ol className="mt-10 space-y-4">
          {c.methodology.map((m) => (
            <li key={m.num} className="flex gap-5 border border-border rounded-xl p-5 bg-card">
              <div className="w-9 h-9 rounded-full bg-secondary text-foreground/80 flex items-center justify-center font-serif text-[16px] shrink-0">{m.num}</div>
              <div>
                <h3 className="font-serif text-[20px] font-medium">{m.title}</h3>
                <p className="mt-1 text-[14.5px] text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="findings">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">05 — Key findings</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Six insights, each with a strategic implication.</h2>
        <p className="mt-3 text-[14px] text-muted-foreground">Tap a card to reveal the implication.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {c.findings.map((f) => {
            const isFlipped = !!flipped[f.num];
            return (
              <button key={f.num}
                onClick={() => setFlipped((s) => ({ ...s, [f.num]: !s[f.num] }))}
                className="text-left h-full border border-border rounded-xl p-6 bg-card card-lift">
                <div className="text-[11px] tracking-[0.18em] uppercase text-rust">{f.num}</div>
                <h3 className="font-serif text-[22px] mt-2 font-medium leading-snug">{f.title}</h3>
                <p className={`mt-3 text-[14.5px] leading-relaxed ${isFlipped ? "text-foreground/90" : "text-muted-foreground"}`}>{f.desc}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section id="visuals">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">06 — Research visuals</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Evidence visualized.</h2>
        <p className="mt-3 max-w-[640px] text-[15px] text-muted-foreground">Ten chart types supporting the findings — each annotated with a one-line interpretation.</p>

        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <BarChart
            title="Catalogue share vs engagement"
            data={[{ name: "Budget", value: 60 }, { name: "Mid", value: 42 }, { name: "Premium", value: 25 }]}
            takeaway="Budget engagement outpaces catalogue share by ~18 points."
          />
          <GroupedBarChart
            title="Discount tier performance by segment"
            series={["Budget", "Mid", "Premium"]}
            groups={[
              { name: "0–20%", values: [35, 28, 18] },
              { name: "20–40%", values: [62, 44, 32] },
              { name: "40–60%", values: [88, 52, 42] },
              { name: "60–80%", values: [74, 46, 34] },
              { name: "80%+", values: [48, 30, 22] },
            ]}
            takeaway="Engagement peaks at 40–60% discount, then flattens."
          />
          <LineChart
            title="Engagement trend by discount depth"
            xLabels={["10%", "25%", "40%", "55%", "70%", "85%"]}
            series={[
              { name: "Budget", values: [20, 45, 78, 70, 50, 30] },
              { name: "Mid", values: [16, 30, 50, 44, 32, 22] },
              { name: "Premium", values: [12, 22, 36, 32, 24, 18] },
            ]}
            takeaway="Inverted-U curve confirms an optimal discount band."
          />
          <StackedBarChart
            title="Engagement by category × discount"
            series={["Low discount", "Mid discount", "High discount"]}
            groups={[
              { name: "Apparel", values: [40, 60, 50] },
              { name: "Footwear", values: [30, 50, 45] },
              { name: "Accessories", values: [35, 55, 60] },
              { name: "Beauty", values: [80, 40, 20] },
              { name: "Wellness", values: [70, 35, 18] },
              { name: "Home", values: [45, 40, 30] },
            ]}
            takeaway="Beauty and wellness lean toward habitual demand."
          />
          <ScatterChart
            title="Price vs rating distribution"
            points={[[10, 60], [25, 80], [40, 50], [55, 90], [70, 70], [85, 110], [60, 100], [75, 40], [30, 95], [50, 75], [90, 88], [20, 55]]}
            takeaway="Price alone does not predict rating quality."
          />
          <TreemapChart
            title="Brand concentration"
            takeaway="Top 10 brands dominate; long tail stays narrow."
          />
          <DonutChart
            title="Share: Top 10 vs long tail"
            data={[
              { name: "Top 10 brands", value: 62 },
              { name: "Brands 11–50", value: 26 },
              { name: "Long tail", value: 12 },
            ]}
            takeaway="A small cluster of brands holds most engagement."
          />
          <Heatmap
            title="Segment responsiveness — price × discount"
            rows={["Budget", "Mid", "Premium"]}
            cols={["0–20%", "20–40%", "40–60%", "60–80%", "80%+"]}
            matrix={[
              [35, 62, 88, 74, 48],
              [28, 44, 52, 46, 30],
              [18, 32, 42, 34, 22],
            ]}
            takeaway="The sweet spot sits in the middle, not the extremes."
          />
          <HorizontalBarChart
            title="Top brands by engagement"
            data={[
              { name: "Roadster", value: 96 },
              { name: "HRX", value: 88 },
              { name: "Mango", value: 76 },
              { name: "H&M", value: 71 },
              { name: "Nike", value: 65 },
              { name: "Puma", value: 60 },
              { name: "Biba", value: 52 },
              { name: "W", value: 48 },
              { name: "Libas", value: 44 },
              { name: "Levis", value: 41 },
            ]}
            takeaway="Engagement falls sharply after the top cohort."
          />
          <RadarChart
            title="Category behavior profile"
            axes={["Habit", "Impulse", "Confidence", "Price sensitivity", "Brand pull"]}
            series={[
              { name: "Beauty", values: [90, 35, 70, 45, 85] },
              { name: "Apparel", values: [40, 80, 55, 75, 60] },
              { name: "Accessories", values: [35, 85, 50, 70, 55] },
            ]}
            takeaway="Category archetypes inform promotional mechanics."
          />
        </div>
      </section>

      <section id="recommendations">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">07 — Strategic recommendations</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Six decisions this evidence supports.</h2>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mt-10">
          {c.recommendations.map((r) => (
            <div key={r.num} className="flex gap-5">
              <div className="font-serif text-[34px] text-rust/70 leading-none">{r.num}</div>
              <div>
                <h3 className="font-serif text-[22px] font-medium">{r.title}</h3>
                <p className="mt-2 text-[14.5px] text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="outcomes">
        <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">08 — Outcomes and reflection</div>
        <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">From data to direction.</h2>
        <div className="mt-8 space-y-5">
          {c.outcomes.text.map((t, i) => (
            <p key={i} className="text-[16px] text-muted-foreground leading-[1.75] max-w-[760px]">{t}</p>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {c.outcomes.stats.map((s) => (
            <div key={s.label} className="border border-border rounded-xl p-5 bg-card">
              <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{s.label}</div>
              <div className="font-serif text-[22px] mt-2 text-rust">{s.value}</div>
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

export default MyntraCaseStudy;
