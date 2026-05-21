import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../mock";

const navItems = [
  { label: "Home", to: "/", anchor: null },
  { label: "Projects", to: "/", anchor: "projects" },
  { label: "Research Approach", to: "/", anchor: "approach" },
  { label: "About", to: "/about", anchor: null },
  { label: "Contact", to: "/", anchor: "contact" },
];

const Navbar = () => {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNav = (item) => {
    setOpen(false);
    if (item.anchor) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(item.anchor);
          el && el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      } else {
        const el = document.getElementById(item.anchor);
        el && el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(item.to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActive = (item) => {
    if (item.anchor) return false;
    if (item.to === "/" && location.pathname === "/") return true;
    if (item.to !== "/" && location.pathname.startsWith(item.to)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2 group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="font-serif text-[20px] font-semibold tracking-tight text-foreground">
              {profile.name}
            </span>
            <span className="text-muted-foreground text-[15px] font-serif italic">
              — {profile.tagline}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item)}
                className={`nav-link text-[14px] tracking-wide ${
                  isActive(item) ? "text-foreground active" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:bg-secondary"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="md:hidden h-9 w-9 rounded-full border border-border flex items-center justify-center"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item)}
                className="text-left py-2 px-2 text-[15px] text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
