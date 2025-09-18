import { Button } from "@/components/ui/button";
import { Shield, Zap, Settings, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-secondary/30 flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center space-x-4 mb-6">
            <img src={logo} alt="Opsec+" className="h-12 w-12" />
            <span className="text-2xl font-bold text-brand-dark">OPSEC+</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-brand-dark">Secure</span>{" "}
            <span className="bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">
              Automation
            </span>{" "}
            <span className="text-brand-dark">Ready to Deploy</span>
          </h1>
          
          <p className="text-xl text-brand-gray leading-relaxed max-w-2xl">
            Revolutionary Raspberry Pi-based OpenPLC system with built-in cybersecurity, 
            firewall, SIEM, and SSL communication. The affordable alternative to traditional PLCs.
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-brand-green" />
              <span className="text-brand-gray">Advanced Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-brand-green" />
              <span className="text-brand-gray">Plug & Play</span>
            </div>
            <div className="flex items-center space-x-2">
              <Settings className="w-5 h-5 text-brand-green" />
              <span className="text-brand-gray">Fully Customizable</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="hero" size="lg" className="group">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>

          <div className="flex items-center space-x-8 pt-8">
            <div>
              <div className="text-2xl font-bold text-brand-dark">$250</div>
              <div className="text-sm text-brand-gray">Starting Price</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-dark">24/7</div>
              <div className="text-sm text-brand-gray">Security Monitoring</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-dark">99%</div>
              <div className="text-sm text-brand-gray">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        {/* Right Content - Product Image */}
        <div className="relative animate-scale-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-brand-green/20 rounded-2xl blur-2xl scale-110"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img 
                src="/src/assets/product-1.png" 
                alt="Opsec+ Device" 
                className="w-full h-auto max-w-md mx-auto animate-pulse-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;