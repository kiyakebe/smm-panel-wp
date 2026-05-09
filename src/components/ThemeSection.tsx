import { Layout, ShoppingCart, Search } from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Easy to Setup",
    desc: "Dashboard, order pages, and user portal",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Support",
    desc: "Built-in customer portal and order tracking system.",
  },
  {
    icon: Search,
    title: "SEO Friendly",
    desc: "Built-in SEO optimization for higher search rankings.",
  },
];

const ThemeSection = () => (
  <section id="theme" className="relative py-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Pure Panel
            <span className="text-highlight"> WordPress Theme</span>
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
            href="/theme"
            className="inline-block mt-4 px-8 py-4 rounded-xl text-base font-semibold text-primary-foreground bg-primary border border-[#F9A73A]/40 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Check out Pure Panel Theme →
          </a>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-primary/5 blur-[60px] rounded-3xl" />
          <img
            src="https://smmpanelwp.com/wp-content/uploads/2025/10/Github-Readme-Thumbnail.jpg"
            alt="Pure Panel WordPress Theme Preview"
            className="relative rounded-2xl glow-border w-full"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ThemeSection;
