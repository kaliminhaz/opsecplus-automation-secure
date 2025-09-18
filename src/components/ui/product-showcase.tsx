import { Badge } from "@/components/ui/badge";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-brand-red/20 text-brand-red-light border-brand-red/30">
            Industrial Hardware
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional-Grade <span className="text-brand-red-light">Automation Hardware</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engineered for reliability, designed for security, built for the future of industrial automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Product 1 */}
          <div className="text-center animate-slide-up">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-brand-green/20 rounded-2xl blur-2xl scale-110"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <img 
                  src={product1} 
                  alt="Opsec+ Main Unit" 
                  className="w-full h-auto max-w-xs mx-auto"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Main Control Unit</h3>
            <p className="text-gray-300">
              Core processing unit with integrated security features and wireless connectivity.
            </p>
          </div>

          {/* Product 2 */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-brand-red/20 rounded-2xl blur-2xl scale-110"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <img 
                  src={product2} 
                  alt="Opsec+ Internal Components" 
                  className="w-full h-auto max-w-xs mx-auto"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Advanced Architecture</h3>
            <p className="text-gray-300">
              Raspberry Pi 4 with custom PCB design optimized for industrial environments.
            </p>
          </div>

          {/* Product 3 */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '400ms' }}>
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-brand-green/20 rounded-2xl blur-2xl scale-110"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <img 
                  src={product3} 
                  alt="Opsec+ Connectivity" 
                  className="w-full h-auto max-w-xs mx-auto"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Connectivity Hub</h3>
            <p className="text-gray-300">
              Multiple I/O ports, Ethernet, and USB connections for comprehensive integration.
            </p>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-brand-red-light mb-2">ARM64</div>
            <div className="text-gray-300">Quad-Core Processor</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="text-3xl font-bold text-brand-red-light mb-2">4GB</div>
            <div className="text-gray-300">DDR4 RAM</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="text-3xl font-bold text-brand-red-light mb-2">256GB</div>
            <div className="text-gray-300">SSD Storage</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="text-3xl font-bold text-brand-red-light mb-2">IP65</div>
            <div className="text-gray-300">Industrial Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;