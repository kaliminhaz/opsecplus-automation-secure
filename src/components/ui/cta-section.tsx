import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-red to-brand-red-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your Automation?
          </h2>
          <p className="text-xl mb-12 opacity-90 animate-slide-up">
            Join hundreds of businesses already using OPSEC+ for secure, 
            cost-effective industrial automation. Get started today.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6 animate-scale-in">
              <Shield className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-sm opacity-90">Built-in firewall and SIEM protection</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6 animate-scale-in" style={{ animationDelay: '200ms' }}>
              <Clock className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Quick Deployment</h3>
              <p className="text-sm opacity-90">Setup in minutes, not months</p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white p-6 animate-scale-in" style={{ animationDelay: '400ms' }}>
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
              <p className="text-sm opacity-90">99% uptime with 24/7 monitoring</p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              className="bg-white text-brand-red hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Your Free Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Download Datasheet
            </Button>
          </div>

          <p className="mt-8 text-sm opacity-75">
            No long-term contracts • 30-day money-back guarantee • Free technical support
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;