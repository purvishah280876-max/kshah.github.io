import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ContactSection from "./ContactSection";

const CaseShell = ({ title, subtitle, sections, children }) => {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const onScroll = () => {
      let current = sections[0]?.id;
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
  }, [sections]);

  return (
    <div>
      <div className="border-b border-border bg-secondary/30">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-5">
          <Link to="/" className="inline-flex items-center gap-2 text-[14px] text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </div>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-12 pb-6">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-rust" />
          <span className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">Featured case study</span>
        </div>
        {subtitle && <p className="mt-3 text-[15px] text-muted-foreground">{subtitle}</p>}
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-4">On this case</div>
              <ul className="space-y-2 border-l border-border">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}
                      className={`block pl-4 -ml-px py-1.5 text-[13.5px] border-l-2 ${
                        active === s.id ? "border-rust text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="lg:col-span-9 space-y-24">
            {children}
          </div>
        </div>
      </section>

      <div className="section-rule max-w-[1280px] mx-auto" />
      <ContactSection />
    </div>
  );
};

export default CaseShell;
