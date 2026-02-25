"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sun, Building, Factory, Shield, Zap, Wrench, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const categories = [
  {
    title: "Residential",
    icon: Sun,
    desc: "Seamless solar integration for modern homes. Reduce bills and gain energy independence.",
    href: "/solutions/residential",
    color: "primary",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Commercial",
    icon: Building,
    desc: "Optimized solar solutions for businesses and retail spaces with high ROI.",
    href: "/solutions/commercial",
    color: "secondary",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Industrial",
    icon: Factory,
    desc: "High-capacity power systems for factories and large-scale manufacturing units.",
    href: "/solutions/industrial",
    color: "accent",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Gov & Utility",
    icon: Shield,
    desc: "Turnkey utility-scale solar farms and government infrastructure projects.",
    href: "/solutions/government-utility",
    color: "primary",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Products",
    icon: Zap,
    desc: "Premium solar panels, high-efficiency inverters, and smart energy storage.",
    href: "/products",
    color: "secondary",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2058&auto=format&fit=crop"
  },
  {
    title: "Maintenance",
    icon: Wrench,
    desc: "Comprehensive AMC services and 24/7 monitoring to ensure peak performance.",
    href: "/solutions/maintenance-amc",
    color: "accent",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2070&auto=format&fit=crop"
  },
];

export function SolutionsGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
                Solar Solutions for <span className="text-secondary italic">Every Need</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-muted-foreground text-lg">
                Whether you're powering a small cottage or a massive industrial park, we have the engineering expertise to light your path.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.4}>
            <Link href="/solutions" className="group flex items-center gap-2 font-bold text-sm tracking-widest text-primary hover:text-white transition-colors">
              VIEW ALL SOLUTIONS <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Reveal key={category.title} delay={0.1 * index} y={30}>
              <Link
                href={category.href}
                className="group relative flex flex-col h-[400px] overflow-hidden rounded-3xl border border-white/5 hover:border-white/20 transition-all"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">
                    <Image 
                      src={category.image} 
                      alt={category.title} 
                      fill 
                      className="object-cover" 
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent group-hover:via-background/40 transition-all duration-500 z-10" />
                
                {/* Content */}
                <div className="relative mt-auto p-8 z-20">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-${category.color}/20 border border-${category.color}/30 text-${category.color} group-hover:bg-${category.color} group-hover:text-background transition-all duration-300`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-heading text-white">{category.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-6 group-hover:text-white/80 transition-colors">
                    {category.desc}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    Learn More <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
