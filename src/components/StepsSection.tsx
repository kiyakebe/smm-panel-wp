const steps = [
  {
    image: "https://smmpanelwp.com/wp-content/uploads/2025/10/wordpress.png",
    alt: "WordPress",
    title: "Install WordPress",
    desc: "Set up your WordPress site in minutes with any hosting provider.",
  },
  {
    image: "https://smmpanelwp.com/wp-content/uploads/2025/10/mockup.png",
    alt: "Theme Mockup",
    title: "Install OUR Pure Panel Theme",
    desc: "Upload and activate our premium theme built for SMM panels.",
  },
  {
    image: "https://smmpanelwp.com/wp-content/uploads/2025/10/plug-in.png",
    alt: "Plugin",
    title: "Install OUR SMM Panel Manager Plugin",
    desc: "Add our manager plugin for API connections and order tracking.",
  },
  {
    image: "https://smmpanelwp.com/wp-content/uploads/2025/10/launch.png",
    alt: "Launch",
    title: "Launch Your SMM Panel",
    desc: "Go live and start accepting orders from customers worldwide.",
  },
];

const StepsSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 dot-pattern opacity-30" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
          Learn How You Make Your Own SMM Panel
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
          The Easiest Way to Create Your Own
          <span className="text-highlight"> SMM Panel</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="glow-card rounded-2xl p-6 text-center group hover-lift"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-card border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 p-2">
              <img
                src={step.image}
                alt={step.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-sm font-bold text-primary mb-2">0{i + 1}</div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
