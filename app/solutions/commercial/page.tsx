import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Check, ArrowRight, Building, BarChart3, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function CommercialSolar() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30" 
            alt="Commercial Solar" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
             <h1 className="text-6xl md:text-8xl font-heading font-black mb-6">
               Commercial <br /> <span className="text-secondary italic">Power</span> Systems
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
               Scale your business sustainably. Reduce operational overheads and demonstrate environmental leadership with our high-ROI commercial solar architecture.
             </p>
             <Link href="/contact" className="px-10 py-5 bg-primary text-background font-black rounded-full inline-flex items-center gap-2 hover:scale-105 transition-all">
                Request Corporate Audit <ArrowRight className="h-5 w-5" />
             </Link>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: BarChart3, title: "Drastic OpEx Reduction", desc: "Lock in low energy rates for 25+ years and protect your business from tariff hikes." },
              { icon: Building, title: "Tax & Financial Benefits", desc: "Maximize ROI with accelerated depreciation, tax credits, and green building certifications." },
              { icon: Zap, title: "Zero Downtime", desc: "Seamless grid integration with optional battery storage ensures your operations never stop." },
            ].map((b, i) => (
              <Reveal key={b.title} delay={0.1*i}>
                <div className="glass p-10 rounded-[40px] border-white/10 h-full">
                  <div className="text-secondary mb-6 h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
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

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <Reveal y={0}>
               <div className="relative rounded-[40px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Commercial Building" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay" />
               </div>
             </Reveal>

             <div>
                <Reveal>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Empower Your <span className="text-secondary italic">Brand</span></h2>
                </Reveal>
                <div className="space-y-6">
                  {[
                     "Custom rooftop and carport solar structures",
                     "Real-time corporate energy monitoring dashboards",
                     "ESG goal alignment and reporting tools",
                     "Scalable modular inverter configurations",
                     "Dedicated commercial project management"
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
