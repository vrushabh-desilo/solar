"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Shield, Zap, Search, ArrowRight, BarChart3, CloudRain, Sun, Battery } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = ["All", "Panels", "Inverters", "Batteries", "EV Chargers"];

const products = [
  {
    name: "Solaris Ultra-X",
    category: "Panels",
    specs: "550W | 22.8% Efficiency",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop",
    desc: "Next-gen N-Type cells with industry-leading efficiency and Bifacial technology."
  },
  {
    name: "PureSine Inverter Pro",
    category: "Inverters",
    specs: "Single Phase | 5kW - 10kW",
    image: "https://images.unsplash.com/photo-1558444479-58ef14162ff9?q=80&w=2070&auto=format&fit=crop",
    desc: "Compact, silent, and cloud-connected. Monitor your energy from anywhere."
  },
  {
    name: "Lumina Wall 2",
    category: "Batteries",
    specs: "14kWh | 10-Yr Life",
    image: "https://images.unsplash.com/photo-1620714223084-8dfaa62bed06?q=80&w=2076&auto=format&fit=crop",
    desc: "LFP chemistry for maximum safety. Power your home through the night."
  },
  {
    name: "HyperCharge EV",
    category: "EV Chargers",
    specs: "Level 2 | 22kW Max",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    desc: "Smart solar charging. Prioritize your excess energy for your vehicle."
  }
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts = activeTab === "All" 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
             <div className="max-w-2xl">
                <Reveal>
                  <h1 className="text-5xl md:text-7xl font-heading font-black mb-6">
                    Our <span className="text-primary italic">Hardware</span> Catalog
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We only source Tier-1 equipment from the world's most innovative manufacturers. Tested for durability in extreme climates.
                  </p>
                </Reveal>
             </div>
             
             <Reveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-2 glass p-2 rounded-2xl border-white/5">
                   {categories.map((cat) => (
                     <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === cat ? 'bg-primary text-background' : 'hover:bg-white/5 text-muted-foreground hover:text-white'}`}
                     >
                       {cat}
                     </button>
                   ))}
                </div>
             </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProducts.map((p, i) => (
              <Reveal key={p.name} delay={0.1*i} y={30} width="100%">
                 <div className="glass group rounded-[40px] border-white/10 overflow-hidden flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5 relative overflow-hidden h-[250px] md:h-auto min-h-[300px]">
                       <Image 
                         src={p.image} 
                         alt={p.name} 
                         fill
                         className="object-cover group-hover:scale-110 transition-transform duration-700"
                       />
                       <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                            {p.category}
                          </span>
                       </div>
                    </div>
                    <div className="md:w-3/5 p-8 flex flex-col">
                       <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{p.specs}</div>
                       <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{p.name}</h3>
                       <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                          {p.desc}
                       </p>
                       <Link href="/contact" className="w-fit flex items-center gap-2 font-bold text-xs uppercase tracking-[0.2em] text-white hover:text-primary transition-colors">
                          Technical Specs <ArrowRight className="h-4 w-4" />
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
