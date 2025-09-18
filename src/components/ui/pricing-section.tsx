import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, Sparkles } from "lucide-react";

const pricingPlans = [
  {
    name: "Professional",
    price: 250,
    description: "Perfect for growing businesses",
    features: [
      "OPSEC+ Hardware Unit",
      "OpenPLC Pre-configured", 
      "Advanced Security Suite",
      "Web Dashboard Access",
      "Priority Email Support",
      "1 Year Premium Warranty"
    ],
    popular: false,
    gradient: "from-brand-blue/20 to-brand-green/20"
  },
  {
    name: "Enterprise",
    price: 500,
    description: "Complete solution with white-glove service",
    features: [
      "Everything in Professional",
      "White-Glove Installation",
      "Custom Configuration & Training",
      "24/7 SOC Monitoring",
      "Dedicated Account Manager", 
      "Remote Maintenance & Updates",
      "Advanced Analytics Dashboard",
      "2 Year Enterprise Warranty"
    ],
    popular: true,
    gradient: "from-brand-red/20 to-brand-gold/20"
  }
];

const PricingSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.02]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-6 bg-brand-gold/20 text-brand-gold border-brand-gold/30 text-sm px-6 py-3">
            <Sparkles className="w-4 h-4 mr-2" />
            Enterprise Pricing
          </Badge>
          <h2 className="text-display-lg lg:text-display-xl font-bold text-brand-dark mb-8 tracking-tight">
            Transparent <span className="text-gradient bg-gradient-to-r from-brand-red via-brand-gold to-brand-green bg-clip-text text-transparent">Enterprise Pricing</span>
          </h2>
          <p className="text-xl lg:text-2xl text-brand-gray-light max-w-4xl mx-auto font-medium leading-relaxed">
            Choose the perfect package for your automation needs. Both options deliver enterprise-grade 
            security at a fraction of traditional PLC costs with guaranteed ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl animate-slide-up ${
                plan.popular 
                  ? 'border-brand-red shadow-lg scale-105' 
                  : 'border-border hover:border-brand-red/50'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-red to-brand-red-light text-white text-center py-2">
                  <Badge className="bg-white/20 text-white border-white/30">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <CardTitle className="text-2xl font-bold text-brand-dark">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-brand-red">${plan.price}</span>
                  <span className="text-brand-gray ml-2">one-time</span>
                </div>
                <p className="text-brand-gray mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-gray">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.popular ? "Get Started Now" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              Compare with Traditional PLCs
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-red mb-2">80%</div>
                <div className="text-brand-gray">Cost Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-red mb-2">5x</div>
                <div className="text-brand-gray">Faster Deployment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-red mb-2">100%</div>
                <div className="text-brand-gray">Security Included</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;