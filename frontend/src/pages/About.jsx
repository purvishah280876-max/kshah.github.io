import React from "react";
import { profile, aboutText, interests, timeline, whatIBring, domainDepth } from "../mock";
import ContactSection from "../components/ContactSection";

const About = () => {
  return (
    <div>
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 md:pt-24 pb-20">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-rust" />
          <span className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">About</span>
        </div>
        <h1 className="font-serif text-[52px] md:text-[80px] leading-[1.04] mt-6 font-medium tracking-tight max-w-[1100px]">
          A researcher shaped by <span className="italic text-rust">curiosity</span> and clarity.
        </h1>
      </section>

      <div className="section-rule max-w-[1280px] mx-auto" />

      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary border border-border">
              <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-8 border border-border rounded-xl p-6 bg-card">
              <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">Outside of work</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full border border-border text-[12.5px] text-foreground/85">{i}</span>
                ))}
              </div>
              <p className="mt-6 text-[14.5px] text-muted-foreground leading-relaxed">{aboutText.outside}</p>
              <blockquote className="mt-5 border-l-2 border-rust pl-4 italic text-[15px] text-foreground/90 font-serif">
                {`“${aboutText.quote}”`}
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-[17px] leading-[1.75] text-foreground/90">{aboutText.intro}</p>
            <p className="text-[16px] leading-[1.75] text-muted-foreground">{aboutText.para2}</p>
            <p className="text-[16px] leading-[1.75] text-muted-foreground">{aboutText.para3}</p>
          </div>
        </div>
      </section>

      <div className="section-rule max-w-[1280px] mx-auto" />

      {/* Journey */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-rust" />
          <span className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">My journey so far</span>
        </div>
        <h2 className="font-serif text-[40px] md:text-[52px] mt-5 font-medium leading-[1.05]">
          Eight chapters, <span className="italic text-rust">one through-line.</span>
        </h2>

        <div className="mt-14 relative">
          <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {timeline.map((t, idx) => (
              <div key={idx} className={`relative grid md:grid-cols-2 gap-8 items-start ${idx % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="md:pr-10">
                  <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-rust border-4 border-background mt-2`} />
                  <div className="md:hidden flex absolute left-0 w-3 h-3 rounded-full bg-rust border-4 border-background mt-2" />
                  <div className="pl-7 md:pl-0">
                    <div className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground">{t.period}</div>
                    <h3 className="font-serif text-[26px] font-medium mt-1">{t.role}</h3>
                    <div className="text-[15px] text-foreground/80 mt-1">{t.org}</div>
                    {t.award && (
                      <div className="mt-2 inline-block text-[11px] tracking-[0.14em] uppercase px-2 py-1 bg-rust/10 text-rust rounded">{t.award}</div>
                    )}
                  </div>
                </div>
                <div className="md:pl-10 pl-7">
                  <div className="flex flex-wrap gap-2">
                    {t.skills.map((s) => (
                      <span key={s} className="px-3 py-1.5 rounded-full border border-border text-[12.5px] text-foreground/85 bg-card">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-rule max-w-[1280px] mx-auto" />

      {/* What I bring */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-rust" />
          <span className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">What I bring</span>
        </div>
        <h2 className="font-serif text-[40px] md:text-[52px] mt-5 font-medium leading-[1.05] max-w-[900px]">
          A practice that connects <span className="italic text-rust">behavior</span> to business.
        </h2>
        <div className="grid sm:grid-cols-2 gap-5 mt-14">
          {whatIBring.map((b) => (
            <div key={b.title} className="border border-border rounded-xl p-7 bg-card card-lift">
              <h3 className="font-serif text-[24px] font-medium">{b.title}</h3>
              <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-rule max-w-[1280px] mx-auto" />

      {/* Domain depth */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-rust" />
          <span className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">Experience</span>
        </div>
        <h2 className="font-serif text-[40px] md:text-[52px] mt-5 font-medium leading-[1.05]">
          Domain depth and <span className="italic text-rust">seniority.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mt-14">
          {domainDepth.map((d) => (
            <div key={d.num} className="flex gap-5">
              <div className="font-serif text-[40px] text-rust/70 leading-none">{d.num}</div>
              <div>
                <h3 className="font-serif text-[24px] font-medium">{d.title}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-rule max-w-[1280px] mx-auto" />

      <ContactSection />
    </div>
  );
};

export default About;
