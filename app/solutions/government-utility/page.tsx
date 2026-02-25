import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Check, ArrowRight, Shield, Globe, Building, Zap } from "lucide-react";
import Link from "next/link";

export default function GovernmentUtility() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30" 
            alt="Utility Solar" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
             <h1 className="text-6xl md:text-8xl font-heading font-black mb-6">
               Gov & <br /> <span className="text-primary italic">Utility</span> Scale
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
               Pioneering massive-scale renewable infrastructure. We partner with governments and utility providers to build solar farms that power entire cities.
             </p>
             <Link href="/contact" className="px-10 py-5 bg-primary text-background font-black rounded-full inline-flex items-center gap-2 hover:scale-105 transition-all">
                Partner with Solaris <ArrowRight className="h-5 w-5" />
             </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats/Benefits */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Globe, title: "Global Standards", desc: "Compliant with international grid codes and government safety protocols." },
              { icon: Shield, title: "Turnkey Infrastructure", desc: "From land acquisition to grid-tie-in, we manage the entire lifecycle." },
              { icon: Building, title: "Public Sector Expertise", desc: "Specialized in public-private partnerships and large-scale tender execution." },
            ].map((b, i) => (
              <Reveal key={b.title} delay={0.1*i}>
                <div className="glass p-10 rounded-[40px] border-white/10 h-full">
                  <div className="text-primary mb-6 h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
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

      {/* Utility Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <Reveal y={0}>
               <div className="relative rounded-[40px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=2096&auto=format&fit=crop" alt="Solar Farm" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
               </div>
             </Reveal>

             <div>
                <Reveal>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Powering the <span className="text-primary italic">Nation</span></h2>
                </Reveal>
                <div className="space-y-6">
                  {[
                     "Multi-megawatt solar farm blueprints",
                     "Substation design and grid integration",
                     "Advanced tracking systems for max yield",
                     "Long-term PPA (Power Purchase Agreement) support",
                     "Environmental impact assessment (EIA) support"
                  ].map((item, i) => (
                    <Reveal key={item} delay={0.1*i} x={-20}>
                      <div className="flex items-center gap-4">
                        <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
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
