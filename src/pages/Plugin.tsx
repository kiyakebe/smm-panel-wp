import * as React from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Gem,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Shield,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link, NavLink } from "react-router-dom";
import Footer from "@/components/Footer";

const pluginHighlights = [
  { value: 100, suffix: "+", title: "Active Installations" },
  { value: 99, suffix: "%", title: "Uptime Performance" },
  { value: 24, suffix: "/7", title: "Support Available" },
];

const specialPoints = [
  "Made for SMM panels only – All tools are built for managing SMM services, orders, and users.",
  "No extra plugins needed – It already has a user dashboard and order tracking system.",
  "Simple and modern design – Easy to use, looks great on both desktop and mobile.",
  "API ready – Works with most SMM providers that support standard API formats.",
  "Automatic order sync – Keeps your service list, price, and order status updated.",
  "Fully customizable – Change text, layout, and colors directly from the admin panel.",
];

const pluginFeatureCards = [
  {
    icon: ShoppingCart,
    title: "Easy to use",
    desc: "Install it, connect your API, add services, and start selling. That’s it.",
  },
  {
    icon: Shield,
    title: "Secure",
    desc: "Your API key and data stay safe inside your WordPress dashboard.",
  },
  {
    icon: Rocket,
    title: "Fast",
    desc: "Quick setup and instant response when syncing services or placing orders.",
  },
  {
    icon: Gem,
    title: "Powerfull",
    desc: "Import thousands of services, track every order, and handle everything in one place.",
  },
];

const pluginScreens = [
  {
    title: "Manage your Panels",
    image: "/manage-panel.png",
  },
  {
    title: "Fetch their Services",
    image: "/fetch-service.png",
  },
  {
    title: "Turn these services as Products",
    image: "/turn-to-products.png",
  },
  {
    title: "Check Order Status",
    image: "/check-order-status.png",
  },
];

const freePlanItems = [
  "5 SMM API connection",
  "Add up to 10 services from each API Connection",
  "Basic user dashboard",
  "Manual order updates in WooCommerce",
  "Simple layout",
];

const proPlanItems = [
  "Multiple API connections",
  "Unlimited services",
  "Auto order sync and status update",
  "Automatic updates and sync with WooCommerce",
  "Dashboard Notification",
  "Email Notification on Low Balance and Order Status",
  "Priority support",
];

const quickCards = [
  {
    icon: LayoutDashboard,
    title: "Built for Admins",
    desc: "Everything sits inside your WordPress dashboard.",
  },
  {
    icon: Zap,
    title: "Instant Sync",
    desc: "Services and statuses update without manual friction.",
  },
  {
    icon: Sparkles,
    title: "Smooth UX",
    desc: "Clean panel workflow for you and your customers.",
  },
];

const SectionDivider = () => (
  <div className="max-w-[1200px] mx-auto px-4">
    <div className="h-px bg-border/80" />
  </div>
);

const Plugin = () => {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const [slideCount, setSlideCount] = React.useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = React.useState(false);
  const [counterValues, setCounterValues] = React.useState<number[]>(() =>
    pluginHighlights.map(() => 0),
  );
  const [startCounters, setStartCounters] = React.useState(false);
  const highlightsRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const previousTitle = document.title;
    const newTitle =
      "SMM Panel Manager Plugin for WordPress | SMM Panel For WP";
    const newDescription =
      "Build a complete SMM panel inside WordPress with the SMM Panel Manager Plugin. Connect provider APIs, sync services, automate orders, and manage everything from one dashboard.";
    const metaName = "description";
    let descriptionTag = document.querySelector(
      `meta[name=\"${metaName}\"]`,
    ) as HTMLMetaElement | null;
    const previousDescription = descriptionTag?.content ?? "";
    let createdMetaTag = false;

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = metaName;
      document.head.appendChild(descriptionTag);
      createdMetaTag = true;
    }

    document.title = newTitle;
    descriptionTag.content = newDescription;

    return () => {
      document.title = previousTitle;
      if (createdMetaTag && descriptionTag?.parentNode) {
        descriptionTag.parentNode.removeChild(descriptionTag);
      } else if (descriptionTag) {
        descriptionTag.content = previousDescription;
      }
    };
  }, []);

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap() + 1);
    };

    setSlideCount(carouselApi.scrollSnapList().length);
    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  React.useEffect(() => {
    if (!carouselApi || isCarouselPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 3800);

    return () => window.clearInterval(timer);
  }, [carouselApi, isCarouselPaused]);

  React.useEffect(() => {
    const node = highlightsRef.current;
    if (!node || startCounters) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStartCounters(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [startCounters]);

  React.useEffect(() => {
    if (!startCounters) {
      return;
    }

    const duration = 1400;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      setCounterValues(
        pluginHighlights.map((item) => Math.floor(item.value * easedProgress)),
      );

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [startCounters]);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-[1200px] rounded-2xl border border-white/10 backdrop-blur-2xl bg-background/75 ring-1 ring-black/20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl overflow-hidden bg-card border border-[#F9A73A]/40">
              <img
                src="/smm panel wordpress logo.png"
                alt="SMM Panel logo"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-heading font-bold text-lg">
              SMM Panel<span className="text-[#F9A73A]"> For WP</span>
            </span>
          </Link>

          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
            <NavLink
              to="/theme"
              className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
            >
              Theme
            </NavLink>
            <NavLink
              to="/plugin"
              className="px-4 py-2 rounded-lg bg-[#F9A73A] text-black"
            >
              Plugin
            </NavLink>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border/70 bg-card/35 pt-32 md:pt-36 pb-24 md:pb-28">
        <div
          className="absolute inset-0 opacity-24"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_45%,transparent_92%)] bg-[linear-gradient(112deg,rgba(249,167,58,0.06)_0%,transparent_58%)]" />
        <div className="absolute left-0 top-0 h-full w-20 border-r border-dashed border-white/8" />
        <div className="absolute right-0 top-0 h-full w-20 border-l border-dashed border-white/8" />

        <div className="hidden lg:flex absolute left-8 top-20 items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#F9A73A]/80">
          <span className="h-px w-8 bg-[#F9A73A]/55" />
          Plugin Runtime
        </div>

        <div className="hidden lg:block absolute right-10 top-20 h-44 w-44">
          <div className="absolute inset-0 rounded-2xl border border-[#F9A73A]/28" />
          <div className="absolute inset-3 rounded-2xl border border-white/15" />
          <div className="absolute inset-6 rounded-2xl border border-[#F9A73A]/18" />
        </div>

        <div className="absolute -bottom-6 left-10 hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/45">
          <span className="h-px w-10 bg-[#F9A73A]/50" />
          Plugin Operations Grid
        </div>

        <div className="max-w-[1200px] mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-10 items-center">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.16em] mb-4 animate-fade-up">
              SMM Panel Manager Plugin
            </p>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl leading-[1.05] animate-fade-up-delay-1">
              Start your own SMM Panel right inside WordPress
            </h1>
            <p className="mt-5 text-lg md:text-2xl font-semibold text-primary animate-fade-up-delay-2">
              no coding, no headache.
            </p>

            <div className="mt-8 mb-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 animate-fade-up-delay-3 relative z-20">
              <a
                href="#plans"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl text-primary-foreground bg-primary border border-[#F9A73A]/40 hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 font-semibold"
              >
                Get Plugin Now
              </a>
              <a
                href="#screens"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl border border-primary/35 bg-background/70 hover:bg-background transition-colors font-semibold"
              >
                View Screens
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl relative z-10">
              {quickCards.map((item) => (
                <article
                  key={item.title}
                  className="glow-card rounded-xl p-4 hover-lift group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center mb-2">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative glow-card rounded-2xl p-3 md:p-4">
              <img
                src="/manage-panel.png"
                alt="SMM Panel Manager Plugin"
                className="w-full rounded-xl"
              />
            </div>

            <div className="absolute -top-4 left-4 rounded-xl bg-background/90 backdrop-blur border border-primary/25 px-3 py-2 ring-1 ring-white/10 floating-slow">
              <p className="text-[11px] text-muted-foreground">API Powered</p>
              <p className="text-sm font-semibold">Top SMM Providers</p>
            </div>

            <div className="absolute -bottom-4 right-4 rounded-xl bg-background/90 backdrop-blur border border-primary/25 px-3 py-2 ring-1 ring-white/10 floating">
              <p className="text-[11px] text-muted-foreground">Launch Ready</p>
              <p className="text-sm font-semibold">Orders in Minutes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="glow-card rounded-2xl p-6 border border-[#F9A73A]/24">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-[11px] uppercase tracking-wider text-red-300 mb-4">
              <AlertTriangle size={14} />
              Issue
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3">
              Running an SMM panel manually is chaotic
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Selling services without proper sync often means broken prices,
              outdated status, and manual follow-up for every order. Teams lose
              hours fixing preventable mistakes.
            </p>
          </article>
          <article className="glow-card rounded-2xl p-6 border border-[#F9A73A]/24">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-wider text-emerald-300 mb-4">
              <ShieldCheck size={14} />
              Solution
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3">
              One plugin handles the full workflow
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Connect your provider API once, import services, automate status
              updates, and manage customers from the WordPress dashboard with
              fewer moving parts.
            </p>
          </article>
        </div>
      </section>

      <SectionDivider />

      <section
        ref={highlightsRef}
        className="relative py-16 bg-card/20 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-16"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(249,167,58,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,167,58,0.08) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div className="absolute left-6 top-6 rounded-full border border-[#F9A73A]/25 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#F9A73A]/90">
            Adoption Metrics
          </div>
          <div className="absolute right-8 bottom-14 h-32 w-px bg-[#F9A73A]/30" />
          <div className="absolute right-10 bottom-14 h-1.5 w-1.5 rounded-full bg-[#F9A73A]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="glow-card rounded-2xl p-3 max-w-sm w-full mx-auto lg:mx-0">
            <img
              src="/why-people-love-it.jpg"
              alt="Why people love this plugin"
              className="w-full rounded-xl"
            />
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center lg:text-left">
              Why People Love This Plugin
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pluginHighlights.map((item, index) => (
                <article
                  key={item.title}
                  className="glow-card rounded-xl p-6 text-center hover-lift"
                >
                  <p className="font-heading font-extrabold text-5xl text-primary">
                    {counterValues[index]}
                    {item.suffix}
                  </p>
                  <p className="text-lg font-semibold mt-1">{item.title}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/20">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              What makes SMM Panel Manager Plugin special
            </h2>
            <div className="relative pl-5 md:pl-7 space-y-3 before:absolute before:left-1 before:top-1 before:bottom-1 before:w-px before:bg-[#F9A73A]/25">
              {specialPoints.map((point, index) => (
                <div
                  key={point}
                  className="relative rounded-lg border border-white/10 bg-card/45 px-3 py-3 md:px-4 md:py-3.5 transition-colors hover:border-[#F9A73A]/30"
                >
                  <span className="absolute -left-[22px] top-3.5 h-2.5 w-2.5 rounded-full border border-[#F9A73A]/60 bg-background" />
                  <div className="flex items-start gap-2">
                    <span className="text-[11px] font-semibold text-[#F9A73A] pt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glow-card rounded-2xl p-3 max-w-md w-full ml-auto group">
            <img
              src="/what-makes-it-special.jpg"
              alt="What makes plugin special"
              className="w-full rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            The SMM Panel Manager Plugin
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pluginFeatureCards.map((item) => (
              <article
                key={item.title}
                className="glow-card rounded-xl p-5 hover-lift group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section
        id="screens"
        className="relative py-16 bg-card/20 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-14 [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_24px)]" />
          <div className="absolute left-6 top-6 rounded-full border border-[#F9A73A]/28 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#F9A73A]">
            Screen Matrix
          </div>
          <div className="absolute left-0 top-0 h-full w-16 border-r border-dashed border-white/10" />
          <div className="absolute right-0 top-0 h-full w-16 border-l border-dashed border-white/10" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-3">
            Plugin Screens
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            Here’s a quick look inside the panel. The dashboard is simple and
            clean. You can see all orders, track payments, check API status, and
            manage users easily.
          </p>

          <div
            className="relative"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            <Carousel
              setApi={setCarouselApi}
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {pluginScreens.map((screen) => (
                  <CarouselItem
                    key={screen.title}
                    className="basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/3"
                  >
                    <article className="glow-card rounded-xl p-2.5 md:p-3 group h-full">
                      <img
                        src={screen.image}
                        alt={screen.title}
                        className="w-full rounded-lg aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                      <p className="text-center text-sm mt-2 font-medium">
                        {screen.title}
                      </p>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 border-primary/40 bg-background/90 hover:bg-background h-10 w-10" />
              <CarouselNext className="right-2 top-1/2 -translate-y-1/2 border-primary/40 bg-background/90 hover:bg-background h-10 w-10" />
            </Carousel>

            <div className="flex justify-center mt-5 gap-2">
              {Array.from({ length: slideCount }).map((_, index) => (
                <span
                  key={index}
                  className={`h-2 rounded-full transition-all ${currentSlide === index + 1 ? "w-6 bg-primary" : "w-2 bg-primary/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section
        id="plans"
        className="relative py-16 bg-background overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-8 top-8 text-[11px] uppercase tracking-[0.22em] text-[#F9A73A]/45">
            Pricing Ledger
          </div>
          <div className="absolute right-8 bottom-10 text-[11px] uppercase tracking-[0.22em] text-white/30">
            Plugin Tiers
          </div>
          <div className="absolute left-8 bottom-8 h-8 w-8 border-l border-b border-[#F9A73A]/28" />
          <div className="absolute right-8 top-10 h-24 w-px bg-white/10" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">
              Our Plans
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Start free and upgrade when you need more control. Both plans are
              built to help you launch and grow your SMM panel fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="glow-card rounded-2xl p-7">
              <h3 className="font-heading font-bold text-4xl text-primary">
                Free
              </h3>
              <p className="text-muted-foreground mb-5 text-lg">
                with Limited access
              </p>
              <ul className="space-y-3 text-sm">
                {freePlanItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 rounded-xl text-primary-foreground bg-primary border border-[#F9A73A]/40 hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 font-semibold">
                Get Now
              </button>
            </article>

            <article className="glow-card rounded-2xl p-7 border-primary/40 bg-card/35">
              <h3 className="font-heading font-bold text-4xl text-primary">
                Pro
              </h3>
              <p className="text-muted-foreground text-lg mt-1">
                <span className="line-through mr-2">$45</span>
                <span className="text-primary font-bold text-3xl">$20</span>
                <span className="ml-2">for full access</span>
              </p>
              <ul className="space-y-3 text-sm mt-5">
                {proPlanItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 rounded-xl text-primary-foreground bg-primary border border-[#F9A73A]/40 hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 font-semibold">
                Buy Now
              </button>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Plugin;
