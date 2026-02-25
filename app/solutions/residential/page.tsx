import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Check, ArrowRight, Sun, Zap, Shield, Wallet } from "lucide-react";
import Link from "next/link";

export default function ResidentialSolar() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30" 
            alt="Residential Solar" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
             <h1 className="text-6xl md:text-8xl font-heading font-black mb-6">
               Residential <br /> <span className="text-primary italic">Solar</span> Solutions
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
               Lower your electricity bills, increase your home value, and join the clean energy revolution with our premium residential solar packages.
             </p>
             <Link href="/contact" className="px-10 py-5 bg-primary text-background font-black rounded-full inline-flex items-center gap-2 hover:scale-105 transition-all">
                Get a Free Quote <ArrowRight className="h-5 w-5" />
             </Link>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Zap, title: "Bill Reduction", desc: "Save up to 90% on your monthly electricity costs from day one." },
              { icon: Shield, title: "25-Yr Warranty", desc: "Industry-leading performance warranty on panels and inverters." },
              { icon: Wallet, title: "Investment Payback", desc: "Average system ROI achieved within 4-6 years." },
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

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <Reveal y={0}>
               <div className="relative rounded-[40px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" alt="Home Solar" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
               </div>
             </Reveal>

             <div>
                <Reveal>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Designed for <span className="text-primary italic">Aesthetics</span> & Efficiency</h2>
                </Reveal>
                <div className="space-y-6">
                  {[
                     "High-efficiency Mono PERC black panels",
                     "Premium all-black mounting hardware",
                     "Smart monitoring via iOS/Android app",
                     "Seamless battery backup integration",
                     "Weatherproof certified installation"
                  ].map((item, i) => (
                    <Reveal key={item} delay={0.1*i} x={-20}>
                      <div className="flex items-center gap-4">
                        <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
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

      {/* FAQ Placeholder */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <Reveal width="100%">
             <h2 className="text-4xl font-heading font-bold text-center mb-16">Frequently Asked Questions</h2>
           </Reveal>
           <div className="space-y-4">
              {[
                "How much does a typical 5kW solar system cost?",
                "Does solar work on cloudy or rainy days?",
                "How long does the installation process take?",
                "What kind of maintenance is required?"
              ].map((q, i) => (
                <Reveal key={q} delay={0.1*i} width="100%">
                   <div className="glass p-6 rounded-2xl border-white/5 hover:border-white/20 transition-all cursor-pointer group">
                      <div className="flex items-center justify-between font-bold text-lg">
                         {q}
                         <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                   </div>
                </Reveal>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
