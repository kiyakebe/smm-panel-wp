const socialCards = [
  { name: "Instagram", stat: "+12.4k", top: "18%", left: "12%", delay: "" },
  {
    name: "Facebook",
    stat: "+8.9k",
    top: "38%",
    left: "9%",
    delay: "floating-delay",
  },
  {
    name: "YouTube",
    stat: "+5.2k",
    top: "55%",
    left: "11%",
    delay: "floating-slow",
  },
  { name: "X", stat: "+22.1k", top: "14%", right: "12%", delay: "" },
  {
    name: "TikTok",
    stat: "+31.7k",
    top: "32%",
    right: "9%",
    delay: "floating-delay",
  },
  {
    name: "Snapchat",
    stat: "+4.8k",
    top: "52%",
    right: "11%",
    delay: "floating-slow",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border/80" />

      {/* Floating platform cards */}
      {socialCards.map((s) => (
        <div
          key={s.name}
          className={`absolute hidden xl:flex items-center gap-2 rounded-xl border border-primary/30 bg-card/80 backdrop-blur-sm px-3 py-2 text-xs font-semibold text-foreground ${s.delay || "floating"}`}
          style={
            { top: s.top, left: s.left, right: s.right } as React.CSSProperties
          }
        >
          <span className="text-primary">●</span>
          <span>{s.name}</span>
          <span className="text-primary font-bold">{s.stat}</span>
        </div>
      ))}

      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 relative z-10 w-full">
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <p className="text-primary/80 text-base md:text-lg italic mb-4 animate-fade-up">
            Want to make your own SMM Panel the EZ way?
          </p>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up">
            Power Your
            <span className="text-highlight"> SMM Panel </span>
            with Premium WordPress Themes & Plugins
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-up-delay-1">
            Crafted for speed, security, and seamless integration. Launch your
            panel with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up-delay-2">
            <button className="px-8 py-4 rounded-xl text-base font-semibold text-primary-foreground bg-primary border border-[#F9A73A]/40 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200">
              Know More →
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative">
          <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-primary/20" />
          <div className="absolute w-[520px] h-[520px] rounded-full border border-primary/10" />
          <img
            src="https://smmpanelwp.com/wp-content/uploads/2026/03/Gemini_Generated_Image_1w5d2r1w5d2r1w5d.png"
            alt="SMM Panel Hero"
            className="relative z-10 w-72 md:w-96 lg:w-[420px] floating"
          />
          <div className="absolute bottom-10 right-4 rounded-xl border border-primary/30 bg-card/80 backdrop-blur-sm px-3 py-2 flex items-center gap-2 z-20">
            <span className="text-lg">🚀</span>
            <div>
              <p className="text-sm font-bold text-foreground">500+</p>
              <p className="text-[11px] text-muted-foreground">
                Panels Launched
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
