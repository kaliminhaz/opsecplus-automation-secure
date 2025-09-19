import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";

const ProductShowcase = () => {
  return (
  <section className="relative py-20 md:py-32 bg-brand-dark text-white overflow-hidden">
      {/* Background grid + floating particles */}
      <BackgroundDecor />

      <div className="container mx-auto px-6 relative">
        {/* Intro */}
  <div className="mb-12 md:mb-20 text-center animate-fade-in">
          <Badge className="mb-5 bg-brand-red/20 text-brand-red-light border-brand-red/30">
            Industrial Hardware
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight">
            Professional-Grade{" "}
            <span className="text-brand-red-light">Automation Hardware</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Engineered for reliability, designed for security, built for the future of industrial automation.
          </p>
        </div>

        {/* Showcase layout */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Highlights Left */}
          <div className="lg:col-span-3 space-y-8">
            <HighlightCard
              title="Main Control Unit"
              desc="Core processing unit with integrated security features and wireless connectivity."
            />
            <HighlightCard
              title="Advanced Architecture"
              desc="Raspberry Pi 4 with custom PCB design optimized for industrial environments."
            />
            <HighlightCard
              title="Connectivity Hub"
              desc="Multiple I/O ports, Ethernet, and USB connections for comprehensive integration."
            />
          </div>

          {/* Centerpiece Video */}
          <div className="lg:col-span-6">
            <HeroVideo />
          </div>

          {/* Images Right */}
          <div className="lg:col-span-3 space-y-10">
            <ImageTile src={product2} alt="Opsec+ Internal Components" aura="red" />
            <ImageTile src={product3} alt="Opsec+ Connectivity" aura="green" />
          </div>
        </div>

        {/* Specs Strip */}
  <SpecBelt />
      </div>
    </section>
  );
};

/* ---------------- Subcomponents ---------------- */

const HighlightCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md 
    hover:border-brand-red/40 hover:shadow-xl hover:shadow-brand-red/20 
    transition-all duration-500 group">
    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-red-light">
      {title}
    </h3>
    <p className="text-gray-300 text-sm">{desc}</p>
  </div>
);

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="relative group">
      <AspectRatio ratio={16 / 9}>
        {!videoError ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-3xl shadow-2xl 
              border border-white/10 transform transition-transform duration-700 
              group-hover:scale-[1.015] group-hover:rotate-0"
            autoPlay
            muted={muted}
            loop
            playsInline
            preload="metadata"
            poster={product1}
            onError={() => setVideoError(true)}
          >
            <source src="/showcase.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src={product1}
            alt="Fallback"
            className="w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10"
          />
        )}
      </AspectRatio>

      {/* Aura glow */}
      <div
        className="absolute inset-0 rounded-3xl -z-10 blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 100%, rgba(245,67,54,0.25), transparent 70%)",
        }}
      />

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex gap-3">
        <button
          onClick={togglePlay}
          className="h-10 w-10 rounded-full bg-white/10 border border-white/20 
            backdrop-blur-sm text-white hover:bg-white/20 transition"
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {playing ? <Pause className="h-5 w-5 mx-auto" /> : <Play className="h-5 w-5 mx-auto" />}
        </button>
        <button
          onClick={toggleMute}
          className="h-10 w-10 rounded-full bg-white/10 border border-white/20 
            backdrop-blur-sm text-white hover:bg-white/20 transition"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <VolumeX className="h-5 w-5 mx-auto" /> : <Volume2 className="h-5 w-5 mx-auto" />}
        </button>
      </div>
    </div>
  );
};

const ImageTile = ({ src, alt, aura }: { src: string; alt: string; aura: "red" | "green" }) => (
  <div className="relative group">
    <img
      src={src}
      alt={alt}
      className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10 
        transition-transform duration-700 transform group-hover:scale-[1.03] group-hover:-rotate-1"
    />
    <div
      className={`absolute inset-0 rounded-2xl -z-10 blur-3xl opacity-50 ${
        aura === "red" ? "bg-brand-red/30" : "bg-brand-green/30"
      }`}
    />
  </div>
);

const SpecBelt = () => (
  <div className="mt-20 px-6 py-5 rounded-2xl bg-white/10 border border-white/15 
    backdrop-blur-md flex flex-wrap justify-center gap-x-10 gap-y-4 text-base text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
    <SpecItem label="ARM64" value="· Quad-Core" />
    <SpecItem label="4GB" value="· DDR4" />
    <SpecItem label="256GB" value="· SSD" />
    <SpecItem label="IP65" value="· Rated" />
  </div>
);

const SpecItem = ({ label, value }: { label: string; value: string }) => (
  <span className="whitespace-nowrap inline-flex items-center gap-2">
    <span className="inline-flex h-2 w-2 rounded-full bg-brand-red/70" />
    <span className="font-semibold tracking-wide">{label}</span>
    <span className="text-gray-200/90">{value}</span>
  </span>
);

const BackgroundDecor = () => (
  <>
    {/* Grid */}
    <div
      className="absolute inset-0 opacity-20 -z-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
    {/* Top glow */}
    <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl bg-brand-red/20 opacity-40 -z-10" />
    {/* Bottom glow */}
    <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl bg-brand-green/20 opacity-40 -z-10" />
  </>
);

export default ProductShowcase;
