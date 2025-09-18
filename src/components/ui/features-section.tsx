import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Cpu, Monitor, Settings, Globe, Lock, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Cybersecurity",
    description: "Military-grade firewall, advanced SIEM integration, and real-time threat detection with automated response protocols.",
    color: "text-brand-green",
    bgGradient: "from-brand-green/10 to-brand-green/5",
    benefits: ["99.9% threat prevention", "Real-time monitoring", "Automated response"]
  },
  {
    icon: Cpu,
    title: "High-Performance Computing",
    description: "ARM64 quad-core processor with 4GB DDR4 RAM, optimized for demanding industrial automation workloads.",
    color: "text-brand-red",
    bgGradient: "from-brand-red/10 to-brand-red/5",
    benefits: ["Sub-millisecond response", "Edge computing ready", "AI/ML capable"]
  },
  {
    icon: Monitor,
    title: "Intelligent Dashboard",
    description: "Advanced web-based interface with predictive analytics, customizable widgets, and mobile-responsive design.",
    color: "text-brand-blue",
    bgGradient: "from-brand-blue/10 to-brand-blue/5",
    benefits: ["Real-time analytics", "Mobile optimized", "Custom widgets"]
  },
  {
    icon: Settings,
    title: "Zero-Config Deployment",
    description: "Pre-configured OpenPLC runtime with automated setup scripts and intelligent hardware detection protocols.",
    color: "text-brand-gold",
    bgGradient: "from-brand-gold/10 to-brand-gold/5",
    benefits: ["5-minute setup", "Auto-configuration", "Plug & play"]
  },
  {
    icon: Globe,
    title: "Secure Connectivity",
    description: "Enterprise-grade SSL/TLS encryption with VPN support and secure remote access capabilities worldwide.",
    color: "text-brand-green",
    bgGradient: "from-brand-green/10 to-brand-green/5",
    benefits: ["End-to-end encryption", "Global VPN access", "Zero-trust security"]
  },
  {
    icon: Lock,
    title: "Enterprise Value",
    description: "Deliver 80% cost savings compared to traditional PLCs while maintaining enterprise-grade security and reliability.",
    color: "text-brand-red",
    bgGradient: "from-brand-red/10 to-brand-red/5",
    benefits: ["80% cost reduction", "Enterprise security", "5-year warranty"]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-secondary/30 via-background to-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.02]"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-6 bg-brand-red/10 text-brand-red border-brand-red/20 text-sm px-4 py-2">
            Industry Leading Features
          </Badge>
          <h2 className="text-display-lg lg:text-display-xl font-bold text-brand-dark mb-8 tracking-tight">
            Why Industry Leaders Choose{" "}
            <span className="text-gradient bg-gradient-to-r from-brand-red via-brand-red-light to-brand-gold bg-clip-text text-transparent">
              OPSEC+
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-brand-gray-light max-w-4xl mx-auto font-medium leading-relaxed">
            Experience the future of industrial automation with our revolutionary platform that combines 
            cutting-edge technology with enterprise-grade security in a ready-to-deploy solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden hover:shadow-premium transition-all duration-700 border-0 bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm animate-slide-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl p-px">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl h-full">
                  <CardHeader className="text-center pb-6 pt-8">
                    <div className={`mx-auto w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <feature.icon className={`w-10 h-10 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-brand-dark mb-3 tracking-tight">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 px-8 pb-8">
                    <p className="text-brand-gray leading-relaxed text-lg">
                      {feature.description}
                    </p>
                    
                    {/* Benefits List */}
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-3">
                          <CheckCircle className={`w-5 h-5 ${feature.color} flex-shrink-0`} />
                          <span className="text-brand-dark font-medium text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="pt-4">
                      <button className={`group/link flex items-center space-x-2 ${feature.color} hover:opacity-80 transition-opacity font-semibold`}>
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-white/40 shadow-premium max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-xl text-brand-gray-light mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already leveraging OPSEC+ for secure, cost-effective automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-brand-red to-brand-red-light text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="border-2 border-brand-gray/30 text-brand-dark px-8 py-4 rounded-2xl font-semibold hover:border-brand-red/50 hover:shadow-lg transition-all duration-300">
                Download Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;