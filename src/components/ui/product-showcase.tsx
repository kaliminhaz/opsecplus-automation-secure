import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cpu, Zap, Gauge, Shield, ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";

const ProductShowcase = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-brand-dark to-brand-dark relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-128 h-128 bg-brand-red/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-6 bg-brand-red/20 text-brand-red-light border-brand-red/30 text-sm px-6 py-3">
            Industrial-Grade Hardware
          </Badge>
          <h2 className="text-display-lg lg:text-display-xl font-bold mb-8 text-white tracking-tight">
            Engineered for <span className="text-gradient bg-gradient-to-r from-brand-red-light via-brand-gold to-brand-green-light bg-clip-text text-transparent">Mission-Critical</span> Operations
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
            Professional-grade automation hardware designed for the most demanding industrial environments, 
            with enterprise security built into every component.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-center mb-20">
          {/* Product 1 - Main Unit */}
          <div className="text-center animate-slide-up">
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green/30 to-brand-blue/30 rounded-3xl blur-3xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="relative glass-card rounded-3xl p-10 border-2 border-white/10 shadow-premium hover:shadow-glow transition-all duration-700">
                <img 
                  src={product1} 
                  alt="Opsec+ Main Control Unit" 
                  className="w-full h-auto max-w-sm mx-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Status Indicators */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse shadow-lg"></div>
                  <div className="w-3 h-3 bg-brand-blue rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Main Control Unit</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Core processing hub with integrated security features, wireless connectivity, 
              and real-time industrial protocol support.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2 text-brand-green">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-blue">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">Active</span>
              </div>
            </div>
          </div>

          {/* Product 2 - Internal Architecture */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-red/30 to-brand-gold/30 rounded-3xl blur-3xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="relative glass-card rounded-3xl p-10 border-2 border-white/10 shadow-premium hover:shadow-glow transition-all duration-700">
                <img 
                  src={product2} 
                  alt="Opsec+ Advanced Architecture" 
                  className="w-full h-auto max-w-sm mx-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Performance Indicators */}
                <div className="absolute bottom-4 left-4 glass rounded-2xl px-4 py-2 text-white">
                  <div className="text-xs opacity-80">Performance</div>
                  <div className="text-sm font-bold flex items-center">
                    <Gauge className="w-4 h-4 mr-1 text-brand-gold" />
                    Optimal
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Advanced Architecture</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Raspberry Pi 4 with custom PCB design, optimized for industrial environments 
              with enhanced thermal management and ESD protection.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2 text-brand-red">
                <Cpu className="w-5 h-5" />
                <span className="text-sm font-medium">ARM64</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-gold">
                <Gauge className="w-5 h-5" />
                <span className="text-sm font-medium">4GB RAM</span>
              </div>
            </div>
          </div>

          {/* Product 3 - Connectivity */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '600ms' }}>
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-brand-green/30 rounded-3xl blur-3xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="relative glass-card rounded-3xl p-10 border-2 border-white/10 shadow-premium hover:shadow-glow transition-all duration-700">
                <img 
                  src={product3} 
                  alt="Opsec+ Connectivity Hub" 
                  className="w-full h-auto max-w-sm mx-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Connection Status */}
                <div className="absolute top-4 left-4 glass rounded-2xl px-4 py-2 text-white">
                  <div className="text-xs opacity-80">Network</div>
                  <div className="text-sm font-bold text-brand-green">Connected</div>
                </div>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Connectivity Hub</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Comprehensive I/O interface with Ethernet, USB, and industrial protocol support 
              for seamless integration with existing systems.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2 text-brand-blue">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-medium">Gigabit</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-green">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Encrypted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { label: "ARM64", value: "Quad-Core", detail: "1.8GHz Processor", color: "brand-red" },
            { label: "Memory", value: "4GB", detail: "DDR4 RAM", color: "brand-gold" },
            { label: "Storage", value: "256GB", detail: "Industrial SSD", color: "brand-blue" },
            { label: "Rating", value: "IP65", detail: "Industrial Grade", color: "brand-green" }
          ].map((spec, index) => (
            <Card key={index} className="glass-card text-center p-8 animate-scale-in hover:shadow-glow transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              <div className={`text-4xl font-bold text-brand-${spec.color} mb-2`}>{spec.value}</div>
              <div className="text-xl font-semibold text-white mb-1">{spec.label}</div>
              <div className="text-gray-400 text-sm">{spec.detail}</div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="glass-card rounded-3xl p-12 border-2 border-white/10 max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Experience Industrial Excellence
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how OPSEC+ delivers enterprise-grade performance with uncompromising security.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="hero" size="xl" className="group">
                Request Technical Demo
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl">
                Download Datasheet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;