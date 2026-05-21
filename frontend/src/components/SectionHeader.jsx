import React from "react";

const SectionHeader = ({ eyebrow, title, intro, align = "left" }) => {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <div className="h-px w-10 bg-rust" />
        <span className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="font-serif text-[44px] md:text-[56px] leading-[1.05] mt-5 font-medium tracking-tight">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-[640px] text-[16px] text-muted-foreground leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
