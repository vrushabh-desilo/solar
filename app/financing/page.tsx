"use client";

import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Wallet, Rocket, Landmark, ShieldCheck, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function FinancingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <Reveal>
              <h1 className="text-5xl md:text-8xl font-heading font-black mb-8">
                Solar <span className="text-primary italic">Financing</span> <br /> & Subsidies
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Solar is an investment that pays for itself. We make the transition seamless with low-interest financing, government subsidy handling, and shared-saving models.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Wallet, 
                title: "Capital Purchase", 
                desc: "Own your system from day one. Maximum long-term ROI and immediate tax benefits.",
                features: ["Immediate ROI", "25+ Yr Asset", "Full tax credits"]
              },
              { 
                icon: Rocket, 
                title: "Solar Subsidy", 
                desc: "We manage the entire application process for government renewable incentives.",
                features: ["30-40% Cost Offset", "Paperwork Managed", "Verified Equipment"]
              },
              { 
                icon: Landmark, 
                title: "Low-Interest Loans", 
                desc: "Partner bank solar loans with monthly payments often lower than your current bills.",
                features: ["Zero Down Option", "Easy Approval", "Bill Neutrality"]
              }
            ].map((v, i) => (
              <Reveal key={v.title} delay={0.1*i}>
                <div className="glass p-10 rounded-[40px] border-white/5 h-full flex flex-col">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                    <v.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                  <p className="text-muted-foreground mb-8 flex-1">{v.desc}</p>
                  <ul className="space-y-3 pt-6 border-t border-white/5">
                    {v.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm font-medium">
                        <Check className="h-4 w-4 text-accent" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass p-12 md:p-20 rounded-[60px] border-white/10 text-center relative overflow-hidden">
             <div className="relative z-10 max-w-3xl mx-auto">
                <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-8" />
                <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 italic">"We handle the complexity, you enjoy the autonomy."</h2>
                <p className="text-lg text-muted-foreground mb-12">Solaris has partnered with over 15 major financial institutions to ensure you get the best rates in the industry.</p>
                <Link href="/contact" className="px-12 py-5 bg-primary text-background font-black rounded-full hover:scale-105 transition-all inline-flex items-center gap-3 shadow-xl shadow-primary/20">
                   Check Your Eligibility <ArrowRight className="h-5 w-5" />
                </Link>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
