import React from "react";
import { Mail, Linkedin, Phone, MessageCircle, Download } from "lucide-react";
import { profile } from "../mock";

const items = [
  { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: Linkedin, label: "LinkedIn", value: "khyati-shah-research-analyst", href: profile.linkedin },
  { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { Icon: MessageCircle, label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
  { Icon: Download, label: "Resume", value: "Download PDF", href: profile.resumeUrl },
];

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-rust" />
            <span className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">Contact</span>
          </div>
          <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.05] mt-5 font-medium tracking-tight">
            Open to the <span className="italic text-rust">right</span> opportunity.
          </h2>
          <p className="mt-6 max-w-[480px] text-[15.5px] text-muted-foreground leading-relaxed">
            I am available for senior UX research roles, embedded research partnerships, and advisory engagements in retail, e-commerce, and digital product contexts.
          </p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 content-start">
          {items.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 border border-border rounded-xl bg-card hover:border-foreground/30 card-lift"
            >
              <span className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-rust">
                <Icon size={18} strokeWidth={1.6} />
              </span>
              <span className="flex flex-col">
                <span className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{label}</span>
                <span className="text-[14.5px] text-foreground">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
