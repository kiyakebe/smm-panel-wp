import { ShoppingCart, Plug, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "WooCommerce Integration Built-in",
    desc: "Built-in customer portal and order tracking system.",
  },
  {
    icon: Plug,
    title: "API Connectivity Support",
    desc: "API connections to major providers.",
  },
  {
    icon: LayoutDashboard,
    title: "All in One Place",
    desc: "Get notified about the order status on WordPress Dashboard.",
  },
];

const PluginSection = () => (
  <section id="plugin" className="relative py-24">
    <div className="absolute inset-0 dot-pattern opacity-20" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            SMM Panel
            <span className="text-highlight"> Manager Plugin</span>
          </h2>
          <div className="space-y-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <f.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="/plugin"
            className="inline-block mt-4 px-8 py-4 rounded-xl text-base font-semibold text-primary-foreground bg-primary border border-[#F9A73A]/40 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Check out SMM Panel Manager Plugin →
          </a>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-primary/5 blur-[60px] rounded-3xl" />
          <img
            src="https://smmpanelwp.com/wp-content/uploads/2025/10/SMM-plugin-desktop-view.png"
            alt="SMM Panel Manager Plugin Preview"
            className="relative rounded-2xl glow-border w-full"
          />
        </div>
      </div>
    </div>
  </section>
);

export default PluginSection;
