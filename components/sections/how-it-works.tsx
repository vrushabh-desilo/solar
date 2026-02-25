"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, FileText, CheckCircle2, Zap, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Consultation & Audit",
    icon: Search,
    desc: "We analyze your energy needs, roof orientation, and local climate to design the perfect system.",
    color: "primary",
  },
  {
    title: "Customized Design",
    icon: FileText,
    desc: "Our engineers create a detailed 3D blueprint maximizing every ray of sunlight for peak efficiency.",
    color: "secondary",
  },
  {
    title: "Subsidy & Financing",
    icon: Rocket,
    desc: "We handle all the paperwork for government subsidies and help you secure low-interest solar loans.",
    color: "accent",
  },
  {
    title: "Rapid Installation",
    icon: Zap,
    desc: "Our certified technicians install your system in as little as 48 hours with minimal disruption.",
    color: "primary",
  },
  {
    title: "Activation & Savings",
    icon: CheckCircle2,
    desc: "Experience the thrill of watching your meter run backwards and your energy bills drop to zero.",
    color: "secondary",
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        containerRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-100vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
      return () => pin.kill();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden bg-muted/20">
      <div ref={triggerRef}>
        <div ref={containerRef} className="h-screen w-[200vw] flex items-center relative">
          
          {/* Landing Title */}
          <div className="w-screen h-full flex flex-col justify-center px-12 md:px-24">
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] mb-4">The Process</h4>
            <h2 className="text-5xl md:text-7xl font-heading font-black max-w-2xl leading-tight">
              From First Spark to <span className="text-secondary italic">Total Autonomy</span>
            </h2>
            <div className="mt-12 flex items-center gap-4 text-muted-foreground animate-bounce">
              <span className="text-sm font-bold uppercase tracking-widest">Scroll to explore</span>
              <div className="h-1 w-20 bg-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary animate-progress" />
              </div>
            </div>
          </div>

          {/* Steps Timeline */}
          <div className="flex h-full items-center gap-24 px-24">
            {steps.map((step, index) => (
              <div key={index} className="w-[400px] flex-shrink-0 relative">
                <div className="absolute -top-24 left-0 text-[10rem] font-black text-white/5 leading-none pointer-events-none">
                  0{index + 1}
                </div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-${step.color}/20 text-${step.color} border border-${step.color}/30 shadow-[0_0_30px_rgba(251,191,36,0.1)]`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-heading">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.desc}
                </p>
                {index !== steps.length - 1 && (
                  <div className="absolute top-1/2 -right-32 w-20 h-px bg-gradient-to-r from-primary/30 to-transparent hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
