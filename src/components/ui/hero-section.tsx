import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Settings, ArrowRight, Play, Star, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";
import productImage from "@/assets/product-1.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-128 h-128 bg-brand-red/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-88 h-88 bg-brand-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10 py-20">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          {/* Premium Badge */}
          <div className="flex items-center space-x-4 mb-8">
            <img src={logo} alt="Opsec+" className="h-14 w-14 animate-glow" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-dark tracking-tight">OPSEC+</span>
              <Badge className="w-fit bg-brand-red/10 text-brand-red border-brand-red/20 text-xs mt-1">
                Enterprise Ready
              </Badge>
            </div>
          </div>
          
          {/* Hero Headline */}
          <div className="space-y-6">
            <h1 className="text-display-xl lg:text-display-2xl font-bold leading-none tracking-tight">
              <span className="text-brand-dark">Next-Gen</span>{" "}
              <span className="text-gradient animate-shimmer bg-gradient-to-r from-brand-red via-brand-red-light to-brand-gold bg-[length:200%_auto]">
                Secure Automation
              </span>{" "}
              <span className="text-brand-dark">Platform</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-brand-gray-light leading-relaxed max-w-2xl font-medium">
              Revolutionary Raspberry Pi-based OpenPLC system with enterprise-grade cybersecurity. 
              <span className="text-brand-red font-semibold"> 80% more affordable</span> than traditional PLCs.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/40 shadow-lg">
              <Shield className="w-5 h-5 text-brand-green animate-bounce-gentle" />
              <span className="text-brand-dark font-semibold">Military-Grade Security</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/40 shadow-lg">
              <Zap className="w-5 h-5 text-brand-gold animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
              <span className="text-brand-dark font-semibold">Instant Deployment</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/40 shadow-lg">
              <Settings className="w-5 h-5 text-brand-blue animate-bounce-gentle" style={{ animationDelay: '1s' }} />
              <span className="text-brand-dark font-semibold">100% Customizable</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Button variant="hero" size="xl" className="group shadow-elegant">
              Start Free Trial
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="glass" size="xl" className="group bg-white/10 backdrop-blur-md border-white/20">
              <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-dark mb-2 flex items-center justify-center">
                $250
                <TrendingUp className="w-6 h-6 text-brand-green ml-2" />
              </div>
              <div className="text-sm text-brand-gray font-medium">Starting Price</div>
              <div className="text-xs text-brand-green mt-1">80% Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-dark mb-2 flex items-center justify-center">
                24/7
                <Shield className="w-6 h-6 text-brand-red ml-2" />
              </div>
              <div className="text-sm text-brand-gray font-medium">Security Monitoring</div>
              <div className="text-xs text-brand-red mt-1">Zero Downtime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-dark mb-2 flex items-center justify-center">
                99.9%
                <Star className="w-6 h-6 text-brand-gold ml-2" />
              </div>
              <div className="text-sm text-brand-gray font-medium">Uptime SLA</div>
              <div className="text-xs text-brand-gold mt-1">Enterprise Grade</div>
            </div>
          </div>
        </div>

        {/* Right Content - Premium Product Showcase */}
        <div className="relative animate-scale-in lg:animate-float">
          <div className="relative">
            {/* Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red/30 via-brand-green/20 to-brand-gold/30 rounded-3xl blur-3xl scale-110 animate-pulse-glow"></div>
            
            {/* Glass Container */}
            <div className="relative glass-card rounded-3xl p-12 border-2 border-white/20 shadow-premium">
              <img 
                src={productImage}
                alt="Opsec+ Industrial Automation Device" 
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating UI Elements */}
              <div className="absolute -top-4 -right-4 bg-brand-green text-white rounded-2xl px-4 py-2 shadow-xl animate-bounce-gentle">
                <span className="text-sm font-bold">Live</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-6 py-3 text-white shadow-xl">
                <div className="text-xs opacity-80">Status</div>
                <div className="text-sm font-bold">Operational</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-gray/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-red rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;