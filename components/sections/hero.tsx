"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, animate } from "framer-motion";
import { ArrowRight, Play, Calculator, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    const controls = animate(0, target, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate: (value: number) => setCount(Math.floor(value)),
    });
    return controls.stop;
  }, [target]);

  return <>{count}{suffix}</>;
};

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" 
            alt="Solar Energy Background" 
            fill 
            priority
            className="object-cover transition-transform duration-[10s] hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                The Future of Energy is Here
              </div>
            </Reveal>

            <Reveal delay={0.2} y={50}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-[1.1] tracking-tight mb-8">
                Empowering <span className="text-primary italic">Life</span> With <span className="text-glow">Solar</span> Innovation
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Transition to clean energy with the world's most efficient solar technology. Designed for elegance, built for performance.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <Link
                  href="/contact"
                  className="group px-8 py-4 rounded-full bg-primary text-background font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
                >
                  Get Started 
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/calculator"
                  className="group px-8 py-4 rounded-full glass text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all"
                >
                  <Calculator className="h-5 w-5 text-accent" />
                  Calculate Savings
                </Link>

                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="flex items-center gap-3 text-sm font-bold text-white/80 hover:text-white transition-colors group cursor-pointer"
                >
                  <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-background transition-all">
                    <Play className="h-4 w-4 fill-current ml-1" />
                  </div>
                  Watch Story
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats Quick View */}
        <div className="absolute bottom-10 right-0 left-0 hidden lg:block">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-end">
              <Reveal delay={0.6} y={20}>
                <div className="glass p-8 rounded-3xl flex items-center gap-12">
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold font-heading text-primary min-w-[80px]">
                      <Counter target={25} suffix="%" />
                    </span>
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Efficiency</span>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold font-heading text-secondary min-w-[100px]">
                      <Counter target={10} suffix="k+" />
                    </span>
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Installations</span>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-4xl font-bold font-heading text-accent min-w-[80px]">
                      <Counter target={30} suffix="%" />
                    </span>
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Avg. Savings</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-24 -left-24 h-96 w-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-96 w-96 bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div 
              className="absolute inset-0 bg-background/90 backdrop-blur-2xl cursor-pointer" 
              onClick={() => setIsVideoOpen(false)}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl aspect-video rounded-[40px] overflow-hidden border border-white/10 bg-black shadow-2xl"
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-6 right-6 h-12 w-12 rounded-full glass border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all z-20 cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>
              
              <iframe 
                src="https://www.youtube.com/embed/S_S_vIpsW_Y?autoplay=1" 
                title="Solaris Story"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
