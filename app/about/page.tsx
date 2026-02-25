import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Shield, Users, Target, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
             <Reveal>
               <h1 className="text-5xl md:text-8xl font-heading font-black mb-8">
                 Pioneering the <br /> <span className="text-primary italic">Solar</span> Standard
               </h1>
             </Reveal>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                <Reveal delay={0.2}>
                   <p className="text-xl text-white font-medium leading-relaxed">
                     Founded in 2018, Solaris was born from a simple mission: to make high-efficiency renewable energy accessible to everyone.
                   </p>
                </Reveal>
                <Reveal delay={0.3}>
                   <p className="text-lg text-muted-foreground leading-relaxed">
                     We don't just install panels; we engineer ecosystems. Our vertical integration and commitment to R&D have made us the leading provider of premium solar solutions for industrial and residential pioneers.
                   </p>
                </Reveal>
             </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: "Safety First", desc: "Rigorous standards for every roof." },
                { icon: Target, title: "Precision", desc: "Engineering to the nearest watt." },
                { icon: Users, title: "Integrity", desc: "Transparent pricing, always." },
                { icon: Award, title: "Excellence", desc: "Global award-winning designs." },
              ].map((v, i) => (
                <Reveal key={v.title} delay={0.1*i}>
                   <div className="glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center">
                      <v.icon className="h-10 w-10 text-primary mb-6" />
                      <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                      <p className="text-sm text-muted-foreground">{v.desc}</p>
                   </div>
                </Reveal>
              ))}
           </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
           <div className="glass p-12 md:p-20 rounded-[60px] border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                 <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop" className="w-full h-full object-cover opacity-10" alt="Team" />
              </div>
              <div className="relative z-10 max-w-2xl">
                 <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 leading-tight">Join the Mission to Decarbonize the Planet</h2>
                 <p className="text-lg text-muted-foreground mb-10">We're always looking for brilliant minds in engineering, design, and customer success. Let's build the future together.</p>
                 <Link href="/contact" className="px-8 py-4 bg-white text-background font-bold rounded-full hover:bg-primary transition-colors inline-block">View Open Positions</Link>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
