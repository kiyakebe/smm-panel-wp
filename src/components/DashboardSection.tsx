import {
  Palette,
  Zap,
  Puzzle,
  CheckCircle2,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Customizer Presets",
    desc: "Set your panel identity with pre-built color schemes, typography, and section spacing from one place.",
    points: ["Live preview before publish", "White-label ready styles"],
  },
  {
    icon: Zap,
    title: "Built for Core Web Vitals",
    desc: "Lean templates and optimized assets help your pages stay fast on both mobile and desktop.",
    points: ["Clean, lightweight front-end", "Performance-first defaults"],
  },
  {
    icon: Puzzle,
    title: "Plugin-First Workflow",
    desc: "Structured to work smoothly with WooCommerce, payment add-ons, and order automation plugins.",
    points: ["No-code setup screens", "Safe updates with clear settings"],
  },
];

const DashboardSection = () => (
  <section className="relative py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-4">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
          It's easy to make your own SMM panel
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-16">
          Control Everything from Your
          <span className="text-highlight"> Dashboard</span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 relative space-y-4">
          <div className="absolute -inset-4 bg-primary/5 blur-[60px] rounded-3xl" />
          <img
            src="https://smmpanelwp.com/wp-content/uploads/2026/03/dashboard-preview.jpg"
            alt="Dashboard Preview"
            className="relative rounded-2xl glow-border w-full"
          />
          <div className="relative rounded-2xl border border-border/80 bg-card/80 backdrop-blur-sm p-4 md:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <LayoutDashboard size={16} className="text-primary" />
                WordPress-style workflow
              </div>
              <span className="text-xs text-muted-foreground">
                Theme + plugin settings synced
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              <div className="rounded-lg border border-border/70 bg-background/70 px-3 py-2">
                <p className="text-xs text-muted-foreground">Page Templates</p>
                <p className="text-sm font-semibold text-foreground">
                  12 ready layouts
                </p>
              </div>
              <div className="rounded-lg border border-border/70 bg-background/70 px-3 py-2">
                <p className="text-xs text-muted-foreground">Widgets</p>
                <p className="text-sm font-semibold text-foreground">
                  Drag and drop blocks
                </p>
              </div>
              <div className="rounded-lg border border-border/70 bg-background/70 px-3 py-2">
                <p className="text-xs text-muted-foreground">Integrations</p>
                <p className="text-sm font-semibold text-foreground">
                  Payment and API tools
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border/80 bg-card/70 backdrop-blur-sm p-5 md:p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <f.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {f.desc}
                  </p>
                  <div className="space-y-2">
                    {f.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-2 text-sm text-foreground/90"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DashboardSection;
