import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Direct Product",
    price: 250,
    description: "Perfect for small businesses and startups",
    features: [
      "Opsec+ Hardware Unit",
      "OpenPLC Pre-configured",
      "Basic Security Package",
      "Web Dashboard Access",
      "Email Support",
      "1 Year Warranty"
    ],
    popular: false
  },
  {
    name: "Product + Service",
    price: 500,
    description: "Comprehensive solution with ongoing support",
    features: [
      "Everything in Direct Product",
      "Professional Installation",
      "Custom Configuration",
      "24/7 Security Monitoring",
      "Priority Phone Support",
      "Remote Maintenance",
      "Advanced Analytics",
      "2 Year Warranty"
    ],
    popular: true
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            Simple, <span className="text-brand-red">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Choose the package that fits your automation needs. Both options include 
            enterprise-grade security at a fraction of traditional PLC costs.
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