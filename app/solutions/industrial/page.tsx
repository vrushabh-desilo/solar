import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Check, ArrowRight, Factory, Zap, Shield, Settings } from "lucide-react";
import Link from "next/link";

export default function IndustrialSolar() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30" 
            alt="Industrial Solar" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
             <h1 className="text-6xl md:text-8xl font-heading font-black mb-6">
               Industrial <br /> <span className="text-accent italic">Mega</span> Watts
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
               High-tension solar solutions for heavy manufacturing. We engineering high-capacity systems capable of powering entire factory floors with zero compromise.
             </p>
             <Link href="/contact" className="px-10 py-5 bg-primary text-background font-black rounded-full inline-flex items-center gap-2 hover:scale-105 transition-all">
                Book Engineering Site Visit <ArrowRight className="h-5 w-5" />
             </Link>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "MW-Scale Generation", desc: "Designed for intensive energy profiles, our systems handle massive peak loads reliably." },
              { icon: Settings, title: "Grid Independence", desc: "Microgrid capabilities to keep your production lines running even during grid failures." },
              { icon: Shield, title: "Rugged Durability", desc: "Built to withstand industrial environments, chemical exposure, and high vibration levels." },
            ].map((b, i) => (
              <Reveal key={b.title} delay={0.1*i}>
                <div className="glass p-10 rounded-[40px] border-white/10 h-full">
                  <div className="text-accent mb-6 h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <b.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <Reveal y={0}>
               <div className="relative rounded-[40px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2070&auto=format&fit=crop" alt="Factory Solar" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
               </div>
             </Reveal>

             <div>
                <Reveal>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Heavy-Duty <span className="text-accent italic">Energy</span></h2>
                </Reveal>
                <div className="space-y-6">
                  {[
                     "High-voltage central inverter stations",
                     "Bifacial modules for maximum ground-albedo gain",
                     "SCADA-ready monitoring & control integration",
                     "Steel reinforced mounting for heavy wind loads",
                     "24/7 on-site emergency support options"
                  ].map((item, i) => (
                    <Reveal key={item} delay={0.1*i} x={-20}>
                      <div className="flex items-center gap-4">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-lg font-medium text-white/90">{item}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
