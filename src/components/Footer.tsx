import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative border-t border-border/70 py-16 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(249,167,58,0.12),transparent_40%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.12),transparent_35%)]" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="rounded-3xl border border-white/10 bg-card/55 backdrop-blur-sm p-8 md:p-10 ring-1 ring-white/5">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.8fr] gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-xl overflow-hidden bg-card border border-[#F9A73A]/40">
                <img
                  src="/smm panel wordpress logo.png"
                  alt="SMM Panel logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-heading font-bold text-lg text-foreground">
                SMM Panel<span className="text-[#F9A73A]"> For WordPress</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
              Purpose-built WordPress themes and plugins for SMM panel operators
              who want a serious, conversion-ready storefront without custom dev
              overhead.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#F9A73A]/20 text-[#F9A73A] border border-[#F9A73A]/35">
                WordPress Native
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/35">
                WooCommerce Ready
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/60 text-foreground/90 border border-white/10">
                Fast Setup
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/theme"
                className="text-muted-foreground text-sm hover:text-[#F9A73A] transition-colors"
              >
                Theme
              </Link>
              <Link
                to="/plugin"
                className="text-muted-foreground text-sm hover:text-[#F9A73A] transition-colors"
              >
                Plugin
              </Link>
              <Link
                to="/"
                className="text-muted-foreground text-sm hover:text-[#F9A73A] transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} SMM Panel For WordPress. All rights
            reserved.
          </p>
          <p>Crafted for high-conversion SMM operations.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
