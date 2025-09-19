import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Cpu, Monitor, Settings, Globe, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Built-in Cybersecurity",
    description: "Advanced firewall, SIEM integration, and DoS/Brute-force protection ensure your automation systems stay secure.",
    color: "text-brand-green"
  },
  {
    icon: Cpu,
    title: "Raspberry Pi Powered",
    description: "High-performance computing on energy-efficient hardware, perfect for industrial automation applications.",
    color: "text-brand-red"
  },
  {
    icon: Monitor,
    title: "Real-time Dashboard",
    description: "Web-based monitoring and control interface with customizable features tailored to your industry needs.",
    color: "text-brand-green"
  },
  {
    icon: Settings,
    title: "OpenPLC Ready",
    description: "Pre-configured and ready to use with OpenPLC runtime, eliminating complex setup procedures.",
    color: "text-brand-red"
  },
  {
    icon: Globe,
    title: "SSL/TLS Communication",
    description: "Encrypted communication protocols ensure data integrity and secure remote access capabilities.",
    color: "text-brand-green"
  },
  {
    icon: Lock,
    title: "Cost-Effective Solution",
    description: "80% more affordable than traditional PLCs while providing enterprise-grade security and functionality.",
    color: "text-brand-red"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            Why Choose <span className="text-brand-red">OPSEC+</span>?
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Combining industrial-grade automation with enterprise cybersecurity in a 
            ready-to-deploy package that revolutionizes how you approach automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group rounded-2xl border border-white/30 bg-white/70 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-brand-red/30 animate-slide-up motion-reduce:animate-none"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-red/10 to-brand-red-light/10 ring-1 ring-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-brand-dark">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-brand-gray leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;