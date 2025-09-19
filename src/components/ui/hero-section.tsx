import { Button } from "@/components/ui/button";
import { Shield, Zap, Settings, ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.png"; // Ensure this line is present

const HeroSection = () => {
  return (
  <section className="relative min-h-[90vh] md:min-h-screen bg-brand-hero text-white overflow-hidden pt-16">
      {/* Background product image layer */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-[-2rem] sm:right-[-4rem] md:right-[-6rem] lg:right-[-10rem] xl:right-[-14rem] z-0 h-full w-[120%] sm:w-[110%] md:w-[90%] lg:w-[75%] xl:w-[68%] bg-[position:right_68%] md:bg-[position:right_74%] lg:bg-[position:right_76%] xl:bg-[position:right_78%] bg-[length:100%_auto] md:bg-[length:110%_auto] lg:bg-[length:115%_auto] opacity-50 sm:opacity-70 md:opacity-100"
        style={{
          backgroundImage: `url(${product1})`,
          backgroundRepeat: "no-repeat",
          filter: "drop-shadow(0 50px 150px rgba(0,0,0,0.55))",
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 6%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 6%, rgba(0,0,0,1) 92%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Subtle vignette and gradient highlight over the image for readability */}
  <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(80%_50%_at_90%_40%,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_60%)]"></div>
  <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-l from-brand-hero/60 sm:from-brand-hero/40 md:from-brand-hero/20 via-brand-hero/10 to-transparent"></div>

  <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-12 gap-6 lg:gap-10 items-center py-14 md:py-16">
        {/* Left Content */}
  <div className="space-y-6 animate-fade-in motion-reduce:animate-none lg:col-span-6 xl:col-span-5 max-w-2xl">
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
            <span className="text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">Next-Gen</span>{" "}
            <span className="bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(255,255,255,0.1)]">
              Secure Automation
            </span>{" "}
            <span className="text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">Product & Service</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
            Revolutionary Raspberry Pi-based OpenPLC system with enterprise-grade cybersecurity. 
            <span className="text-brand-red font-semibold"> 80% more affordable</span> than traditional PLCs.
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-brand-green" />
              <span className="text-white/70">Advanced Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-brand-green" />
              <span className="text-white/70">Plug & Play</span>
            </div>
            <div className="flex items-center space-x-2">
              <Settings className="w-5 h-5 text-brand-green" />
              <span className="text-white/70">Fully Customizable</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="hero" size="lg" className="group">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
              View Demo
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-6 pt-8">
            <div>
              <div className="text-2xl font-bold text-white">$100</div>
              <div className="text-sm text-white/60">Starting Price</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/60">Security Monitoring</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">99%</div>
              <div className="text-sm text-white/60">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        {/* Right spacer for image breathing room */}
        <div className="hidden lg:block lg:col-span-6 xl:col-span-7" />
      </div>
    </section>
  );
};

export default HeroSection;