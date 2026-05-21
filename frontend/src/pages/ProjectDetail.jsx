import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { myntraCase, projects } from "../mock";
import ContactSection from "../components/ContactSection";

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

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const proj = projects.find((p) => p.id === id);

  const [active, setActive] = useState("overview");
  const [flipped, setFlipped] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  useEffect(() => {
    const onScroll = () => {
      let current = "overview";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top < 200) current = s.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!proj) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <button onClick={() => navigate("/")} className="text-rust">← Back to Portfolio</button>
        <h1 className="font-serif text-[48px] mt-8">Project not found</h1>
      </div>
    );
  }

  // Only the Myntra project has a full case-study below. For others, show a teaser.
  if (proj.id !== "myntra") {
    return (
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-rust" />
            <span className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">Case study — coming soon</span>
          </div>
          <h1 className="font-serif text-[44px] md:text-[64px] mt-5 font-medium leading-[1.05] max-w-[900px]">{proj.title}</h1>
          <p className="mt-6 max-w-[680px] text-[16px] text-muted-foreground leading-relaxed">
            A complete research deliverable for this engagement is being prepared. In the meantime, please reach out for a walk-through of the methodology, findings, and recommendations.
          </p>
        </div>
        <ContactSection />
      </div>
    );
  }

  const c = myntraCase;

  return (
    <div>
      <div className="border-b border-border bg-secondary/30">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-5">
          <Link to="/" className="inline-flex items-center gap-2 text-[14px] text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </div>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-rust" />
          <span className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">Featured case study</span>
        </div>
        <p className="mt-3 text-[15px] text-muted-foreground">{c.subtitle}</p>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky TOC */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-4">On this case</div>
              <ul className="space-y-2 border-l border-border">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`block pl-4 -ml-px py-1.5 text-[13.5px] border-l-2 ${
                        active === s.id ? "border-rust text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Body */}
          <div className="lg:col-span-9 space-y-24">
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
                    <div className="w-9 h-9 rounded-full bg-secondary text-foreground/80 flex items-center justify-center font-serif text-[16px]">{m.num}</div>
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
                    <button
                      key={f.num}
                      onClick={() => setFlipped((s) => ({ ...s, [f.num]: !s[f.num] }))}
                      className="text-left h-full border border-border rounded-xl p-6 bg-card card-lift relative overflow-hidden"
                    >
                      <div className="text-[11px] tracking-[0.18em] uppercase text-rust">{f.num}</div>
                      <h3 className="font-serif text-[22px] mt-2 font-medium leading-snug">{f.title}</h3>
                      <p className={`mt-3 text-[14.5px] leading-relaxed ${isFlipped ? "text-foreground/90" : "text-muted-foreground"}`}>
                        {f.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>

            <section id="visuals">
              <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">06 — Research visuals</div>
              <h2 className="font-serif text-[34px] md:text-[44px] mt-3 font-medium">Evidence visualized.</h2>
              <p className="mt-3 max-w-[640px] text-[15px] text-muted-foreground">Ten charts supporting the findings — each annotated with a one-line interpretation.</p>
              <div className="grid md:grid-cols-2 gap-5 mt-10">
                {visualSamples.map((v, i) => (
                  <div key={i} className="border border-border rounded-xl p-6 bg-card">
                    <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{v.label}</div>
                    <div className="mt-3">
                      <DemoChart kind={v.kind} />
                    </div>
                    <p className="mt-4 text-[14px] text-muted-foreground leading-relaxed">{v.note}</p>
                    <p className="mt-2 text-[13.5px] text-rust">— {v.takeaway}</p>
                  </div>
                ))}
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
          </div>
        </div>
      </section>

      <div className="section-rule max-w-[1280px] mx-auto" />
      <ContactSection />
    </div>
  );
};

const Meta = ({ label, value }) => (
  <div className="p-5 border-b sm:border-b-0 sm:[&:nth-child(odd)]:border-r border-border last:border-b-0">
    <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{label}</div>
    <div className="mt-1.5 text-[15px] text-foreground">{value}</div>
  </div>
);

const visualSamples = [
  { label: "Catalogue vs engagement share", kind: "groupedBars", note: "Budget products capture more engagement than their catalogue share would predict. Premium underperforms on engagement density.", takeaway: "Budget engagement outpaces catalogue by ~18 points." },
  { label: "Engagement by discount band", kind: "stackedBars", note: "Engagement peaks in the 40–60% discount band for budget, but flattens or reverses at deeper cuts.", takeaway: "Deeper discounts do not equal better outcomes." },
  { label: "Discount curve — inverted U", kind: "curve", note: "A clear inverted-U curve confirms that discount effectiveness has an optimal range, not a linear relationship.", takeaway: "Plateau then decline after ~60% discount." },
  { label: "Category response to discount", kind: "groupedBars", note: "Beauty and wellness lean toward low-discount engagement — habitual demand. Apparel and accessories respond more to promotions.", takeaway: "Category behavior is not uniform." },
  { label: "Price vs rating scatter", kind: "scatter", note: "Ratings distribute widely across the price range. Price alone does not explain engagement — segment behavior does.", takeaway: "Low correlation between price and rating quality." },
  { label: "Brand concentration treemap", kind: "treemap", note: "A small cluster of brands dominates the visible engagement area, while the long tail remains narrow.", takeaway: "Concentration risk is structural, not incidental." },
];

const DemoChart = ({ kind }) => {
  const c1 = "hsl(22 55% 50%)";
  const c2 = "hsl(22 45% 70%)";
  const c3 = "hsl(30 18% 75%)";
  if (kind === "groupedBars") {
    const groups = [
      [60, 42],
      [40, 32],
      [25, 22],
    ];
    return (
      <svg viewBox="0 0 320 160" className="w-full h-[160px]">
        {groups.map(([a, b], i) => (
          <g key={i}>
            <rect x={30 + i * 90} y={140 - a} width={28} height={a} fill={c1} rx={2} />
            <rect x={64 + i * 90} y={140 - b} width={28} height={b} fill={c2} rx={2} />
          </g>
        ))}
        <line x1="10" y1="140" x2="310" y2="140" stroke={c3} />
      </svg>
    );
  }
  if (kind === "stackedBars") {
    const bars = [30, 60, 88, 70, 40];
    return (
      <svg viewBox="0 0 320 160" className="w-full h-[160px]">
        {bars.map((h, i) => (
          <rect key={i} x={30 + i * 56} y={140 - h} width={36} height={h} fill={i === 2 ? c1 : c2} rx={2} />
        ))}
        <line x1="10" y1="140" x2="310" y2="140" stroke={c3} />
      </svg>
    );
  }
  if (kind === "curve") {
    return (
      <svg viewBox="0 0 320 160" className="w-full h-[160px]">
        <path d="M 10 140 Q 80 100 160 50 Q 240 100 310 130" fill="none" stroke={c1} strokeWidth="2.5" />
        <line x1="10" y1="140" x2="310" y2="140" stroke={c3} />
      </svg>
    );
  }
  if (kind === "scatter") {
    const pts = [[40, 60], [70, 80], [110, 50], [150, 90], [190, 70], [220, 110], [260, 60], [290, 100], [60, 100], [180, 40]];
    return (
      <svg viewBox="0 0 320 160" className="w-full h-[160px]">
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={140 - y} r={5} fill={c1} opacity={0.7} />
        ))}
        <line x1="10" y1="140" x2="310" y2="140" stroke={c3} />
      </svg>
    );
  }
  if (kind === "treemap") {
    return (
      <svg viewBox="0 0 320 160" className="w-full h-[160px]">
        <rect x="4" y="4" width="170" height="100" fill={c1} rx="3" />
        <rect x="178" y="4" width="138" height="60" fill={c2} rx="3" />
        <rect x="178" y="68" width="70" height="36" fill={c3} rx="3" />
        <rect x="252" y="68" width="64" height="36" fill={c2} opacity="0.7" rx="3" />
        <rect x="4" y="108" width="312" height="48" fill={c3} opacity="0.6" rx="3" />
      </svg>
    );
  }
  return null;
};

export default ProjectDetail;
