import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Clock, CheckCircle, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-brand-red via-brand-red-light to-brand-gold relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="bg-grid-pattern opacity-[0.1]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-128 h-128 bg-brand-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="mb-8 animate-fade-in">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-brand-gold animate-bounce-gentle" />
            <h2 className="text-display-lg lg:text-display-xl font-bold mb-8 tracking-tight">
              Transform Your Industrial Operations Today
            </h2>
            <p className="text-xl lg:text-2xl mb-12 opacity-95 font-medium leading-relaxed max-w-3xl mx-auto">
              Join industry leaders who trust OPSEC+ for secure, cost-effective automation. 
              Experience the future of industrial technology with enterprise-grade reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-card text-white p-8 animate-scale-in hover:scale-105 transition-all duration-500">
              <Shield className="w-16 h-16 mx-auto mb-6 text-brand-green animate-glow" />
              <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
              <p className="opacity-90 text-lg">Military-grade protection with 99.9% threat prevention</p>
            </Card>
            <Card className="glass-card text-white p-8 animate-scale-in hover:scale-105 transition-all duration-500" style={{ animationDelay: '200ms' }}>
              <Clock className="w-16 h-16 mx-auto mb-6 text-brand-gold animate-glow" />
              <h3 className="text-2xl font-bold mb-4">Rapid Deployment</h3>
              <p className="opacity-90 text-lg">From unboxing to operation in under 5 minutes</p>
            </Card>
            <Card className="glass-card text-white p-8 animate-scale-in hover:scale-105 transition-all duration-500" style={{ animationDelay: '400ms' }}>
              <CheckCircle className="w-16 h-16 mx-auto mb-6 text-brand-blue animate-glow" />
              <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
              <p className="opacity-90 text-lg">99.9% uptime with 24/7 monitoring and support</p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-slide-up mb-12">
            <Button 
              size="xl" 
              className="bg-white text-brand-red hover:bg-white/90 hover:scale-105 transition-all duration-500 shadow-2xl group font-bold text-lg"
            >
              Start Your Enterprise Trial
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 font-bold text-lg"
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-3xl mx-auto">
            <p className="text-lg opacity-90 mb-4">
              <strong>Enterprise Guarantee:</strong> 30-day money-back • Zero long-term contracts • Free migration support
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm opacity-80">
              <span>✓ SOC 2 Compliant</span>
              <span>✓ ISO 27001 Certified</span>
              <span>✓ GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

export default CTASection;