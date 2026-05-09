import * as React from "react";
import {
  CheckCircle2,
  Gauge,
  Gem,
  Layers3,
  MonitorSmartphone,
  Paintbrush,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  WandSparkles,
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

const whyUseCards = [
  {
    icon: MonitorSmartphone,
    title: "Responsive",
    desc: "Every panel screen keeps its layout quality from phone to desktop without extra tweaking.",
    note: "Mobile-first layout logic",
  },
  {
    icon: Paintbrush,
    title: "Customizable",
    desc: "Tune brand colors, typography, sections, and spacing from the customizer with live preview.",
    note: "No-code visual control",
  },
  {
    icon: Gem,
    title: "Powerfull",
    desc: "Designed for speed and SEO while handling large service catalogs and frequent updates.",
    note: "Performance and growth ready",
  },
];

const heroQuickCards = [
  {
    icon: Gauge,
    title: "Performance Core",
    metric: "92+",
    detail: "Average Lighthouse-ready layout structure",
  },
  {
    icon: ShieldCheck,
    title: "Woo Stable",
    metric: "100%",
    detail: "Checkout and product flow built for WooCommerce",
  },
  {
    icon: Layers3,
    title: "Panel Blocks",
    metric: "18",
    detail: "Reusable theme sections for homepage and sales pages",
  },
];

const specialPoints = [
  "Dedicated to SMM Panels only — Perfectly designed for panels, order pages, and user dashboards.",
  "No extra plugins needed — You can run your panel site with only this theme and the SMM Panel Manager Plugin.",
  "Easy setup and clean design — Comes with pre-built homepage sections for quick setup.",
  "WooCommerce ready — Prefer using WooCommerce for payments, it’s already supported.",
  "Optimized for SEO — Clean structure helps your site rank faster on Google.",
];

const compatibilityTools = [
  {
    title: "Google PageSpeed Insights",
    image: "/google-search-insight.webp",
    imageClass: "h-full w-full object-cover object-center",
    frameClass: "bg-black/35",
  },
  {
    title: "WooCommerce",
    image: "/woocommerce.png",
    imageClass: "h-[70%] w-[88%] object-contain object-center",
    frameClass: "bg-white/95",
  },
  {
    title: "SEO Ready",
    image: "/seo.png",
    imageClass: "h-[64%] w-[82%] object-contain object-center",
    frameClass: "bg-white/95",
  },
];

const pagesYouGet = [
  {
    title: "Blog Page",
    image: "/Blog.png",
  },
  {
    title: "Home Page",
    image: "/home.png",
  },
  {
    title: "Shop Page",
    image: "/shop.png",
  },
  {
    title: "Cart/Checkout Page",
    image: "/cart.png",
  },
  {
    title: "Contact Page",
    image: "/contact.png",
  },
  {
    title: "404 Page",
    image: "/404.png",
  },
];

const freePlanItems = [
  "Installation Guide",
  "Full Customization Access",
  "404 and Contact Page",
  "WooCommerce page Customed with Theme",
  "Advanced homepage sections (Testimonials, Services, FAQ, etc.)",
  "More color schemes and typography controls",
  "Dedicated support & lifetime updates",
];

const proPlanItems = [
  "Installation Guide",
  "Full Customization Access",
  "404 and Contact Page",
  "WooCommerce Customized with Theme",
  "Advanced homepage sections (Testimonials, Services, FAQ, etc.)",
  "More color schemes and typography controls",
  "Dedicated support & lifetime updates",
];

const setupSteps = [
  {
    title: "Install the theme",
    desc: "Download it from our website and upload it in WordPress.",
  },
  {
    title: "Activate it",
    desc: "Connect it with your SMM Panel Manager Plugin.",
  },
  {
    title: "Customize as you like",
    desc: "Change colors, layout, and fonts from the theme customizer and make it look like your brand.",
  },
];

const SectionDivider = () => (
  <div className="max-w-[1200px] mx-auto px-4">
    <div className="h-px bg-border/80" />
  </div>
);

const Theme = () => {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const [slideCount, setSlideCount] = React.useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = React.useState(false);

  React.useEffect(() => {
    const previousTitle = document.title;
    const newTitle = "Pure Panel Theme for WordPress | SMM Panel For WP";
    const newDescription =
      "Launch a professional SMM panel website with the Pure Panel WordPress Theme. Fast, WooCommerce-ready, customizable, and built for conversion-focused panel businesses.";
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
    }, 4200);

    return () => window.clearInterval(timer);
  }, [carouselApi, isCarouselPaused]);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>

      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-[1200px] rounded-2xl border border-white/10 backdrop-blur-2xl bg-background/75 ring-1 ring-black/20">
        <div className="px-4 md:px-6 py-3 flex items-center justify-between">
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
              className="px-4 py-2 rounded-lg bg-[#F9A73A] text-black"
            >
              Theme
            </NavLink>
            <NavLink
              to="/plugin"
              className="px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
            >
              Plugin
            </NavLink>
          </nav>
        </div>
      </header>

      <section
        id="content"
        className="relative overflow-hidden bg-card/40 pt-36 md:pt-40 pb-20 border-b border-border/60"
      >
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_45%,transparent_90%)] bg-[linear-gradient(115deg,rgba(249,167,58,0.08)_0%,transparent_55%)]" />
        <div className="absolute left-0 top-0 h-full w-28 border-r border-dashed border-white/10" />
        <div className="absolute right-0 top-0 h-full w-28 border-l border-dashed border-white/10" />

        <div className="hidden lg:block absolute left-8 top-28 rounded-2xl border border-[#F9A73A]/30 bg-card/75 backdrop-blur-sm px-4 py-3 w-52">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#F9A73A] mb-1">
            Theme Signal
          </p>
          <p className="text-sm font-medium text-foreground">
            Conversion-focused layout engine
          </p>
          <div className="mt-3 space-y-2">
            <div className="h-1.5 rounded-full bg-[#F9A73A]/30 w-full" />
            <div className="h-1.5 rounded-full bg-white/20 w-3/4" />
          </div>
        </div>

        <div className="hidden lg:block absolute right-10 top-24 h-56 w-56">
          <div className="absolute inset-0 rounded-full border border-[#F9A73A]/25" />
          <div className="absolute inset-5 rounded-full border border-white/15" />
          <div className="absolute inset-10 rounded-full border border-[#F9A73A]/20" />
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F9A73A]" />
          <span className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/75" />
          <span className="absolute left-5 bottom-7 h-2 w-2 rounded-full bg-[#F9A73A]/85" />
        </div>

        <div className="absolute -bottom-6 left-10 hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/45">
          <span className="h-px w-10 bg-[#F9A73A]/50" />
          Pure Panel Blueprint
        </div>
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-4 animate-fade-up">
                Premium WordPress Theme
              </p>
              <h1 className="font-heading font-extrabold text-4xl md:text-6xl leading-tight text-foreground animate-fade-up-delay-1">
                The Power of WordPress gets Combined with SMM Panels
              </h1>
              <div className="mt-6 space-y-4 text-foreground/90 text-base leading-relaxed animate-fade-up-delay-2">
                <p>
                  Ever wanted to run your own SMM panel with a clean and modern
                  design?
                </p>
                <p>
                  This theme is made just for that. It gives your SMM panel a
                  professional look while keeping everything simple to manage
                  inside WordPress.
                </p>
                <p>
                  You don’t need to hire a designer or edit a single line of
                  code. Just install the theme, connect your SMM plugin, and
                  your panel site is ready to launch.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up-delay-3">
                <a
                  href="#plans"
                  className="px-6 py-3 rounded-xl text-primary-foreground bg-primary border border-[#F9A73A]/40 hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 font-semibold"
                >
                  Get Theme Now
                </a>
                <a
                  href="#setup"
                  className="px-6 py-3 rounded-xl border border-primary/35 bg-background/70 hover:bg-background transition-colors font-semibold"
                >
                  Watch Setup
                </a>
              </div>

              <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
                {heroQuickCards.map((item) => (
                  <article
                    key={item.title}
                    className="relative overflow-hidden rounded-2xl border border-[#F9A73A]/25 bg-card/85 px-4 py-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#F9A73A]/45"
                  >
                    <div className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-[#F9A73A]/15 blur-xl" />
                    <div className="relative z-10 flex items-start justify-between gap-2">
                      <div className="h-9 w-9 rounded-lg border border-[#F9A73A]/35 bg-[#F9A73A]/10 flex items-center justify-center">
                        <item.icon size={17} className="text-[#F9A73A]" />
                      </div>
                      <span className="font-heading text-lg font-bold text-foreground">
                        {item.metric}
                      </span>
                    </div>
                    <h3 className="relative z-10 mt-3 font-heading text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="relative z-10 mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-[2rem]" />
              <div className="relative glow-card rounded-2xl p-3 md:p-4">
                <img
                  src="/home.png"
                  alt="Pure Panel Theme preview"
                  className="w-full rounded-xl"
                />
              </div>

              <div className="absolute -top-4 left-4 rounded-xl bg-background/90 backdrop-blur border border-primary/25 px-3 py-2 ring-1 ring-white/10 floating-slow">
                <p className="text-[11px] text-muted-foreground">
                  Designed For
                </p>
                <p className="text-sm font-semibold text-foreground">
                  SMM Panel Owners
                </p>
              </div>

              <div className="absolute -bottom-4 right-4 rounded-xl bg-background/90 backdrop-blur border border-primary/25 px-3 py-2 ring-1 ring-white/10 floating">
                <p className="text-[11px] text-muted-foreground">
                  Launch Speed
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Setup in Minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            The Pure Panel WordPress Theme
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Pure Panel is built for SMM business owners who want to give their
            WordPress site a panel-style interface. It works perfectly with the
            SMM Panel Manager Plugin and brings a modern, clean layout to
            showcase your services, orders, and customer area.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="relative py-16 bg-card/20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(249,167,58,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,167,58,0.08) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
          <div className="absolute left-4 top-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#F9A73A]/70">
            <span className="h-px w-8 bg-[#F9A73A]/60" />
            Compatibility Layer
          </div>
          <div className="absolute left-6 top-14 h-32 w-32 rounded-2xl border border-[#F9A73A]/25 rotate-3" />
          <div className="absolute left-14 top-22 h-32 w-32 rounded-2xl border border-white/12 -rotate-6" />
          <div className="absolute right-8 bottom-12 h-40 w-40 rounded-full border border-[#F9A73A]/24" />
          <div className="absolute right-20 bottom-24 h-20 w-20 rounded-full border border-white/20" />
          <div className="absolute right-12 top-12 h-24 w-1 bg-gradient-to-b from-[#F9A73A]/50 to-transparent" />
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full border-l border-dashed border-white/8" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="relative z-10 text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#F9A73A] font-semibold mb-3">
              Why Teams Choose It
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl">
              Why Use Pure Panel Theme
            </h2>
            <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
              Not a generic multipurpose template. This is a focused sales theme
              shaped for panel operations, checkout flow, and service discovery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUseCards.map((card, index) => (
              <article
                key={card.title}
                className="relative glow-card rounded-2xl p-6 hover-lift group transition-all duration-300 border border-[#F9A73A]/20 hover:border-[#F9A73A]/40"
              >
                <div className="absolute top-4 right-4 text-xs font-semibold text-[#F9A73A]">
                  0{index + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#F9A73A]/12 border border-[#F9A73A]/30 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <card.icon className="text-[#F9A73A]" size={22} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
                <div className="mt-4 inline-flex items-center rounded-full border border-[#F9A73A]/35 bg-[#F9A73A]/10 px-3 py-1 text-[11px] font-medium text-[#F9A73A]">
                  {card.note}
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10 space-y-2 relative z-10">
            <p className="text-muted-foreground">
              Pure Panel is tested and works great with:
            </p>
            <p className="text-foreground/90">
              WordPress, WooCommerce, Google SEO tools, and PageSpeed Insights.
            </p>
            <p className="text-muted-foreground">
              It’s lightweight, fast, and built using best practices for modern
              WordPress themes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 relative z-10">
            {compatibilityTools.map((tool) => (
              <article
                key={tool.title}
                className="rounded-2xl border border-[#F9A73A]/22 bg-card/80 p-6 hover-lift group"
              >
                <div
                  className={`h-32 md:h-36 rounded-xl border border-[#F9A73A]/25 p-3 mb-4 flex items-center justify-center overflow-hidden ${tool.frameClass}`}
                >
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className={`${tool.imageClass} transition-transform duration-500 group-hover:scale-[1.04]`}
                  />
                </div>
                <p className="font-heading text-lg font-semibold text-center">
                  {tool.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              What makes Pure Panel Theme Special
            </h2>
            <div className="space-y-4">
              {specialPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={18} />
                  <p className="text-muted-foreground leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glow-card rounded-2xl p-3 group">
            <img
              src="pure-panel.png"
              alt="Pure Panel Theme special section preview"
              className="w-full rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="relative py-16 bg-card/20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-20 [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_16px)]" />
          <div className="absolute left-6 top-6 rounded-full border border-[#F9A73A]/35 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#F9A73A]">
            Template Matrix
          </div>
          <div className="absolute -left-16 top-14 h-52 w-52 rounded-full border border-[#F9A73A]/18" />
          <div className="absolute -left-8 top-22 h-52 w-52 rounded-full border border-white/10" />
          <div className="absolute right-8 top-10 h-20 w-20 rounded-xl border border-[#F9A73A]/24 rotate-12" />
          <div className="absolute right-16 top-20 h-20 w-20 rounded-xl border border-white/10 -rotate-12" />
          <div className="absolute right-10 bottom-10 flex flex-col gap-3">
            <span className="h-2 w-16 rounded-full bg-[#F9A73A]/35" />
            <span className="h-2 w-10 rounded-full bg-white/20" />
            <span className="h-2 w-20 rounded-full bg-[#F9A73A]/25" />
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9A73A]/12 border border-[#F9A73A]/35 text-[#F9A73A] text-xs font-semibold uppercase tracking-wider mb-4">
            6 Prebuilt Layouts
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">
            Different Pages You Get
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The theme comes with pre-designed pages like Home, Services, Order
            Page, Dashboard, and Checkout. You can also add more pages or edit
            existing ones using Elementor or the WordPress Customizer.
          </p>

          <div
            className="mt-10 relative left-1/2 -translate-x-1/2 w-screen max-w-none px-4 md:px-8 lg:px-12"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            <Carousel
              setApi={setCarouselApi}
              opts={{ align: "start", loop: true }}
              className="w-full max-w-[1400px] mx-auto"
            >
              <CarouselContent>
                {pagesYouGet.map((item) => (
                  <CarouselItem
                    key={item.title}
                    className="basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/3"
                  >
                    <article className="relative overflow-hidden rounded-2xl border border-[#F9A73A]/22 bg-card/85 p-3 md:p-4 text-left group transition-all duration-300 hover:border-[#F9A73A]/45 hover:-translate-y-1">
                      <div className="absolute top-3 right-3 rounded-full border border-[#F9A73A]/35 bg-[#F9A73A]/12 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#F9A73A]">
                        Template
                      </div>
                      <div className="rounded-xl border border-[#F9A73A]/22 bg-black/35 p-1.5 md:p-2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full rounded-lg aspect-[16/10] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <h3 className="font-heading font-semibold mt-4 text-xl">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Ready to customize in WordPress Customizer or Elementor.
                      </p>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 border-[#F9A73A]/40 bg-background/90 hover:bg-background h-10 w-10" />
              <CarouselNext className="right-3 top-1/2 -translate-y-1/2 border-[#F9A73A]/40 bg-background/90 hover:bg-background h-10 w-10" />
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

      <section className="relative py-16 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-8 top-8 text-[11px] uppercase tracking-[0.22em] text-[#F9A73A]/45">
            Blueprint Layer
          </div>
          <div className="absolute right-8 bottom-10 text-[11px] uppercase tracking-[0.22em] text-white/30">
            Modular Pages
          </div>
          <div className="absolute left-8 bottom-8 h-14 w-14 border border-white/10 rounded-lg" />
          <div className="absolute left-14 bottom-14 h-14 w-14 border border-[#F9A73A]/25 rounded-lg" />
          <div className="absolute right-8 top-10 h-32 w-px bg-white/10" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">
              Our Plans
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Pick a plan that fits your goals. Start free if you’re just
              testing, or get the Pro version for full control and
              customization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="glow-card rounded-2xl p-7">
              <h3 className="font-heading font-bold text-2xl">Free</h3>
              <p className="text-muted-foreground mb-5">with Limited access</p>
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

            <article className="glow-card rounded-2xl p-7 border-primary/40">
              <h3 className="font-heading font-bold text-2xl">Pro</h3>
              <p className="text-muted-foreground">
                <span className="line-through mr-2">$45</span>
                <span className="text-primary font-bold text-xl">$20</span>
              </p>
              <p className="text-muted-foreground mb-5">for full access</p>
              <ul className="space-y-3 text-sm">
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

      <SectionDivider />

      <section className="py-16 bg-card/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">
              Watch How to setup Pure Panel Theme
            </h2>
          </div>

          <div className="glow-card rounded-2xl p-3 md:p-4 mb-10 max-w-3xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-primary/20 bg-black/40">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/XHOmBV4js_E"
                  title="Watch How to setup Pure Panel Theme"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {setupSteps.map((step, index) => (
              <article
                key={step.title}
                className="glow-card rounded-xl p-6 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  {index === 0 ? (
                    <ShoppingCart size={20} className="text-primary" />
                  ) : index === 1 ? (
                    <Rocket size={20} className="text-primary" />
                  ) : (
                    <WandSparkles size={20} className="text-primary" />
                  )}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Theme;
