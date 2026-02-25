"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { MapPin, Calendar, Power, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Eco-Tech Industrial Park",
    location: "California, USA",
    capacity: "2.4 MW",
    year: "2023",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "GreenValley Residential Complex",
    location: "Berlin, DE",
    capacity: "450 kW",
    year: "2024",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Solaris Utility Scale Farm",
    location: "Nevada Desert",
    capacity: "120 MW",
    year: "2022",
    category: "Gov & Utility",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "SkyHigh Office Towers",
    location: "Dubai, UAE",
    capacity: "1.2 MW",
    year: "2023",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <h1 className="text-5xl md:text-7xl font-heading font-black mb-6">
                Our <span className="text-secondary italic">Global</span> Impact
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Exploring some of our most challenging and successful solar installations across the globe. From skyscraper facades to desert microgrids.
              </p>
            </Reveal>
          </div>

          <div className="columns-1 md:columns-2 gap-12 space-y-12">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={0.1*i} width="100%">
                 <div className="group relative break-inside-avoid rounded-[40px] overflow-hidden bg-muted/20 border border-white/5 hover:border-white/20 transition-all">
                    <div className="relative overflow-hidden aspect-[4/5] md:aspect-video lg:aspect-[4/3]">
                       <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                       <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                       <div className="absolute top-6 right-6">
                           <span className="px-4 py-2 glass rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20">
                              {p.category}
                           </span>
                       </div>
                    </div>
                    
                    <div className="p-10">
                       <h3 className="text-3xl font-bold mb-6 text-white leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                       <div className="grid grid-cols-2 gap-6 mb-8 pt-6 border-t border-white/5">
                          <div className="space-y-1">
                             <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                <MapPin className="h-3 w-3" /> Location
                             </div>
                             <div className="font-bold text-sm text-white/90">{p.location}</div>
                          </div>
                          <div className="space-y-1">
                             <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                <Power className="h-3 w-3" /> Capacity
                             </div>
                             <div className="font-bold text-sm text-secondary">{p.capacity}</div>
                          </div>
                       </div>
                       <Link href="/contact" className="group/btn flex items-center justify-between p-4 px-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                          <span className="text-sm font-bold uppercase tracking-widest">Case Study</span>
                          <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                       </Link>
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
