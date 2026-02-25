"use client";

import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Network, ArrowRight } from "lucide-react";
import Link from "next/link";

const links = [
  {
    cat: "Main Infrastructure",
    items: [
      { name: "Home", href: "/" },
      { name: "About Solaris", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Solar Calculator", href: "/calculator" },
    ]
  },
  {
    cat: "Energy Solutions",
    items: [
      { name: "Residential Solar", href: "/solutions/residential" },
      { name: "Commercial Solar", href: "/solutions/commercial" },
      { name: "Industrial Systems", href: "/solutions/industrial" },
      { name: "Gov & Utility Scale", href: "/solutions/government-utility" },
      { name: "Maintenance & AMC", href: "/solutions/maintenance-amc" },
    ]
  },
  {
    cat: "Product Ecosystem",
    items: [
      { name: "Hardware Catalog", href: "/products" },
      { name: "Solar Panels", href: "/products/panels" },
      { name: "Inverters", href: "/products/inverters" },
      { name: "Battery Storage", href: "/products/batteries" },
    ]
  },
  {
    cat: "Learning & Legal",
    items: [
      { name: "Projects Gallery", href: "/projects" },
      { name: "Solar Financing", href: "/financing" },
      { name: "Common FAQs", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ]
  }
];

export default function VisualSitemapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-20">
             <Reveal>
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                   <Network className="h-8 w-8" />
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-black mb-6">Visual <span className="text-primary italic">Sitemap</span></h1>
                <p className="text-lg text-muted-foreground">A complete map of our digital infrastructure. Find any page on the Solaris platform with ease.</p>
             </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {links.map((cat, i) => (
               <Reveal key={cat.cat} delay={0.1*i} width="100%">
                  <div className="space-y-6">
                     <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary pb-4 border-b border-primary/20">{cat.cat}</h3>
                     <ul className="space-y-4">
                        {cat.items.map(link => (
                          <li key={link.href}>
                             <Link href={link.href} className="group flex items-center justify-between text-lg font-medium text-white/80 hover:text-white transition-all">
                                {link.name}
                                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                             </Link>
                          </li>
                        ))}
                     </ul>
                  </div>
               </Reveal>
             ))}
          </div>

          {/* Decorative Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
