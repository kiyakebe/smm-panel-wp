import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import DashboardSection from "@/components/DashboardSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ThemeSection from "@/components/ThemeSection";
import PluginSection from "@/components/PluginSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="min-h-screen bg-background overflow-x-hidden">
    <Navbar />
    <HeroSection />

    <section className="border-y border-border/60 bg-card/20">
      <ThemeSection />
      <PluginSection />
    </section>

    <section className="border-b border-border/60">
      <StepsSection />
      <FeaturesGrid />
    </section>

    <section className="border-b border-border/60 bg-card/20">
      <DashboardSection />
      <TestimonialsSection />
    </section>

    <Footer />
  </main>
);

export default Index;
