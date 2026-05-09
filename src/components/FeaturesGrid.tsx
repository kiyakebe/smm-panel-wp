import {
  Globe,
  Settings,
  BarChart3,
  DollarSign,
  Zap,
  ShoppingCart,
  Code,
  TrendingUp,
  Users,
  CreditCard,
} from "lucide-react";

const topFeatures = [
  { icon: Globe, label: "SEO Friendly Website" },
  { icon: Settings, label: "User Friendly Setup" },
  { icon: BarChart3, label: "All Data Analytics" },
  { icon: DollarSign, label: "Earn More Money" },
];

const cards = [
  {
    icon: Zap,
    title: "Quick Setup",
    desc: "Get your SMM panel running in minutes. No coding skills needed.",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Ready",
    desc: "Works with WooCommerce out of the box. Start selling right away.",
  },
  {
    icon: Code,
    title: "API Integration",
    desc: "Connect with any provider API. Automate your entire workflow.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    desc: "Scale from startup to enterprise. Our tools grow with you.",
  },
  {
    icon: Users,
    title: "User Management",
    desc: "Built-in customer portal and order tracking system.",
  },
  {
    icon: CreditCard,
    title: "Payment Ready",
    desc: "Accept payments through all major gateways instantly.",
  },
];

const iconBgs = [
  "bg-primary/20",
  "bg-primary/15",
  "bg-primary/25",
  "bg-primary/20",
  "bg-primary/15",
  "bg-primary/25",
];

const FeaturesGrid = () => (
  <section className="relative py-24">
    <div className="absolute inset-0 dot-pattern opacity-20" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-6">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
          Everything You
          <span className="text-highlight"> Need</span>
        </h2>
        <p className="text-muted-foreground text-lg mt-3 max-w-2xl mx-auto">
          From setup to scaling, we've got the tools to run your SMM panel
          smoothly.
        </p>
      </div>

      {/* Top feature icons */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {topFeatures.map((f) => (
          <div
            key={f.label}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary font-medium hover:bg-primary/10 hover:border-primary/40 transition-all duration-200 cursor-default"
          >
            <f.icon size={16} />
            {f.label}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((f, i) => (
          <div
            key={f.title}
            className="glow-card rounded-2xl p-6 group hover-lift"
          >
            <div
              className={`w-12 h-12 rounded-xl ${iconBgs[i]} border border-primary/30 flex items-center justify-center mb-4`}
            >
              <f.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">
              {f.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
