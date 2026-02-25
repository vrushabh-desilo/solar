"use client";

import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Gavel, Scale, ShieldAlert, FileCheck } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
             <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
                  Legal
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight">Terms of <span className="text-secondary italic">Service</span></h1>
                <p className="text-xl text-muted-foreground mb-16 italic">By using the Solaris platform, you agree to the following operational and legal standards.</p>
             </Reveal>

             <div className="grid grid-cols-1 gap-12">
                {[
                  { icon: Scale, title: "Service Scope", content: "Solaris provides energy audit estimates and consultation. Physical installations are performed only after signed engineering contracts and site-specific structural verification." },
                  { icon: Gavel, title: "Warranty Limits", content: "Hardware warranties are provided by manufacturers (e.g., Panel/Inverter brands). Solaris provides a separate 10-year workmanship warranty for all managed installations." },
                  { icon: ShieldAlert, title: "Project Timelines", content: "Installation dates are estimates. Timelines are subject to local utility approval, weather conditions, and government subsidy processing speeds." },
                  { icon: FileCheck, title: "Accountability", content: "User is responsible for providing accurate billing data. Inaccurate inputs into the Solar Calculator will result in unreliable energy estimates." }
                ].map((item, i) => (
                  <Reveal key={item.title} delay={0.1*i} width="100%">
                    <div className="glass p-10 rounded-[40px] border-white/5 hover:border-white/10 transition-all flex flex-col md:flex-row gap-8 items-start">
                       <div className="h-16 w-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                          <item.icon className="h-8 w-8" />
                       </div>
                       <div>
                          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">{item.content}</p>
                       </div>
                    </div>
                  </Reveal>
                ))}
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
