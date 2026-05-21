import React from "react";
import { profile } from "../mock";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-[18px] font-semibold tracking-tight">{profile.name}</span>
          <span className="text-muted-foreground text-[14px] font-serif italic">— Research</span>
        </div>
        <p className="text-[13px] text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Crafted with rigour and curiosity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
