import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We switched from a patched custom theme to this setup and finally got stable updates without breaking checkout.",
    name: "Mikhael R.",
    role: "Panel Operator, Jakarta",
    result: "Launch time dropped from 3 weeks to 4 days",
    rating: 5,
  },
  {
    quote:
      "The order pages feel cleaner now, and support tickets about missing API mappings are almost gone.",
    name: "Nadine T.",
    role: "Growth Lead, SocialLab",
    result: "Support workload reduced by 38%",
    rating: 5,
  },
  {
    quote:
      "I needed a WordPress-native workflow for my team. Managing templates and plugin settings is now straightforward.",
    name: "Samuel D.",
    role: "Founder, Boost District",
    result: "Team onboarding became a same-day task",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="relative py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
          Built for Real
          <span className="text-highlight"> Panel Teams</span>
        </h2>
        <p className="text-muted-foreground text-lg mt-3 max-w-2xl mx-auto">
          Feedback from operators who moved to a faster, WordPress-ready setup.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="glow-card rounded-2xl p-7 md:p-8 hover-lift"
          >
            <div className="flex items-center justify-between mb-5">
              <Quote size={28} className="text-primary/40" />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>
            <p className="text-foreground leading-relaxed mb-5 text-sm">
              "{t.quote}"
            </p>
            <div className="rounded-lg border border-border/80 bg-background/40 px-3 py-2 mb-5">
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                Result
              </p>
              <p className="text-sm font-medium text-foreground">{t.result}</p>
            </div>
            <div className="pt-3 border-t border-border/70">
              <p className="font-heading font-semibold text-foreground text-sm">
                {t.name}
              </p>
              <p className="text-muted-foreground text-xs mt-1">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
