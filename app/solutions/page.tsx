"use client";

import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Sun, Building, Factory, Shield, Zap, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    title: "Residential Solar",
    icon: Sun,
    desc: "Complete energy independence for your home with premium high-efficiency panels and battery storage.",
    href: "/solutions/residential",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    color: "primary",
    features: ["Bill Reduction", "Smart Monitoring", "25-Yr Warranty"]
  },
  {
    title: "Commercial Solar",
    icon: Building,
    desc: "Scale your business with sustainable power. Reduce overheads and maximize corporate tax benefits.",
    href: "/solutions/commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    color: "secondary",
    features: ["High ROI", "ESG Compliance", "Net Metering"]
  },
  {
    title: "Industrial Solar",
    icon: Factory,
    desc: "Power entire manufacturing lines with MW-scale grid-independent solar microgrids.",
    href: "/solutions/industrial",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    color: "accent",
    features: ["3-Phase Power", "Central Inverters", "Load Balancing"]
  },
  {
    title: "Gov & Utility",
    icon: Shield,
    desc: "Partner with Solaris for infrastructure-grade utility farms and community solar projects.",
    href: "/solutions/government-utility",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    color: "primary",
    features: ["Grid-Tie Systems", "Turnkey EPC", "Policy Compliance"]
  },
  {
    title: "Product Ecosystem",
    icon: Zap,
    desc: "Access Tier-1 solar hardware, from bifacial panels to smart EV charging networks.",
    href: "/products",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2058&auto=format&fit=crop",
    color: "secondary",
    features: ["Tier-1 Modules", "Hybrid Inverters", "LFP Storage"]
  },
  {
    title: "Maintenance & AMC",
    icon: Wrench,
    desc: "Protect your yield with professional cleaning, thermal audits, and 24/7 remote monitoring.",
    href: "/solutions/maintenance-amc",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2070&auto=format&fit=crop",
    color: "accent",
    features: ["Robotic Cleaning", "Health Reports", "Hotspot Detection"]
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <Reveal>
              <h1 className="text-6xl md:text-8xl font-heading font-black mb-6">
                Engineered <br /> <span className="text-secondary italic">Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From luxury residences to mega-utility farms, our engineering teams build high-performance energy ecosystems for every vertical.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solutions Full Hub */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((item, i) => (
              <Reveal key={item.title} delay={0.1*i} width="100%">
                <div className="group relative glass rounded-[50px] overflow-hidden border border-white/5 hover:border-white/10 transition-all">
                   <div className="relative h-[300px] overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                      
                      {/* Icon Capsule */}
                      <div className="absolute bottom-8 left-8">
                         <div className={`h-16 w-16 rounded-3xl bg-${item.color}/10 border border-${item.color}/20 backdrop-blur-xl flex items-center justify-center text-${item.color}`}>
                            <item.icon className="h-8 w-8" />
                         </div>
                      </div>
                   </div>

                   <div className="p-10 pt-6">
                      <div className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">Division: {item.title.split(' ')[0]}</div>
                      <h3 className="text-3xl font-bold mb-4 font-heading text-white">{item.title}</h3>
                      <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                         {item.desc}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                         {item.features.map(f => (
                           <div key={f} className="text-[10px] font-black uppercase tracking-widest text-white/60 bg-white/5 px-3 py-2 rounded-full text-center">
                              {f}
                           </div>
                         ))}
                      </div>

                      <Link href={item.href} className="group/btn flex items-center justify-between p-6 px-10 rounded-full bg-white text-background font-black uppercase tracking-widest hover:bg-primary transition-all">
                        Explore Strategy
                        <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-all" />
                      </Link>
                   </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
           <div className="glass p-12 md:p-20 rounded-[60px] border-white/5 relative overflow-hidden bg-primary/5 text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 italic">Ready to benchmark your energy costs?</h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">Our consultants will build a detailed solar feasibility report for your project within 24 hours.</p>
              <Link href="/contact" className="px-12 py-5 bg-white text-background font-black rounded-full hover:bg-primary transition-all inline-block">Consult With Engineering</Link>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
