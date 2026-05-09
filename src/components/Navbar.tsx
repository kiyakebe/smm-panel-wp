import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Theme", to: "/theme" },
  { label: "Plugin", to: "/plugin" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-[1200px] rounded-2xl border border-white/10 backdrop-blur-2xl bg-background/75 ring-1 ring-black/20">
      <div className="flex items-center justify-between py-3 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl overflow-hidden bg-card border border-[#F9A73A]/40">
            <img
              src="/smm panel wordpress logo.png"
              alt="SMM Panel logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            SMM Panel<span className="text-[#F9A73A]"> For WP</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all ${isActive ? "bg-[#F9A73A] text-black" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-foreground rounded-lg border border-white/10 bg-card/50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-background/90 backdrop-blur-xl rounded-b-2xl">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all ${isActive ? "bg-[#F9A73A] text-black" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
