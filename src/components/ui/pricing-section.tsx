import { Button } from "@/components/ui/button";
import { LeadFormButton } from "@/components/ui/lead-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, Mail, MapPin } from "lucide-react";

const pricingPlans = [
  {
    name: "Direct Product",
    description: "Perfect for small businesses and startups",
    startingFrom: 100,
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
    description: "Comprehensive solution with ongoing support",
    startingFrom: 200,
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
  <section className="py-20 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-3 md:mb-4">
            Simple, <span className="text-brand-red">Transparent Pricing</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-brand-gray max-w-3xl mx-auto">
            Choose the package that fits your automation needs. Both options include enterprise-grade security at a fraction of traditional PLC costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden rounded-2xl border bg-white/80 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 animate-slide-up motion-reduce:animate-none h-full flex flex-col ${
                plan.popular 
                  ? 'border-transparent ring-1 ring-brand-red/40 shadow-lg'
                  : 'border-white/30 hover:border-brand-red/40'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 text-white text-center py-2">
                  <Badge className="bg-gradient-to-r from-brand-red to-brand-red-light text-white border-white/20 shadow-sm">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className={`text-center pt-12`}>
                <CardTitle className="text-2xl font-bold text-brand-dark">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-brand-gray">Starting from</span>{' '}
                  <span className="text-4xl font-extrabold text-brand-red">${plan.startingFrom}</span>
                </div>
                <p className="text-brand-gray mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6 flex-1 grid grid-rows-[auto,1fr,auto] h-full">
                <ul className="space-y-3 row-start-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-gray">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="row-start-3">
                  <LeadFormButton 
                  className={`w-full hover:shadow-lg transition-all group ${plan.popular ? '' : 'border'}`}
                  source={`pricing:${plan.name}`}
                >
                  Inquire Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </LeadFormButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact strip removed as requested; contact lives in Footer now */}

        {/* Value Proposition */}
        <div className="mt-12 text-center animate-fade-in">
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