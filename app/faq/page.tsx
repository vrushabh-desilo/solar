"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Plus, Minus, Search, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "How many solar panels do I need for my home?",
    a: "The number of panels depends on your average monthly energy consumption, roof orientation, and local sunlight hours. A typical home requires between 15-25 panels for 100% offset. Use our Calculator tool for a personalized estimate."
  },
  {
    q: "Do solar panels work at night or during cloudy weather?",
    a: "Solar panels do not generate energy at night, which is why battery storage or net metering is essential. In cloudy weather, panels still produce energy at about 10-25% of their peak efficiency."
  },
  {
    q: "What maintenance is required for solar panels?",
    a: "Solar systems are low-maintenance. We recommend professional cleaning twice a year and an annual electrical inspection. Our AMC plans cover all these services so you can just enjoy the savings."
  },
  {
    q: "What is the lifespan of a solar energy system?",
    a: "Most Tier-1 solar panels come with a 25-year performance warranty, but they often continue producing power for 30-40 years with a slight decrease in efficiency over time."
  },
  {
    q: "Will solar panels damage my roof?",
    a: "No. Professional installation actually protects the portion of the roof they cover. Our certified technicians use high-quality flashing and mounting systems that are 100% leak-proof."
  }
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal width="100%">
               <h1 className="text-5xl md:text-7xl font-heading font-black mb-6">Common <span className="text-primary italic">Questions</span></h1>
               <p className="text-lg text-muted-foreground">Everything you need to know about switching to solar energy. If your question is not listed, reach out to our team.</p>
            </Reveal>
          </div>

          <div className="max-w-4xl mx-auto">
             {faqs.map((faq, i) => (
               <Reveal key={i} delay={0.1*i} width="100%">
                  <div className={`mb-4 overflow-hidden rounded-[30px] border transition-all duration-500 ${open === i ? 'bg-primary/5 border-primary/20 shadow-lg' : 'bg-muted/10 border-white/5 hover:border-white/10'}`}>
                     <button 
                        onClick={() => setOpen(open === i ? null : i)}
                        className="w-full flex items-center justify-between p-8 text-left outline-none"
                     >
                        <span className="text-xl font-bold flex items-center gap-4">
                           <HelpCircle className={`h-6 w-6 transition-colors ${open === i ? 'text-primary' : 'text-muted-foreground'}`} />
                           {faq.q}
                        </span>
                        <div className={`h-10 w-10 rounded-full glass flex items-center justify-center shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 bg-primary text-background border-primary' : ''}`}>
                          {open === i ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                        </div>
                     </button>
                     <div className={`transition-all duration-500 ease-in-out ${open === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-8 pb-8 pl-14 text-muted-foreground leading-relaxed text-lg border-t border-white/5 pt-6">
                           {faq.a}
                        </div>
                     </div>
                  </div>
               </Reveal>
             ))}
          </div>

          <Reveal delay={0.6} width="100%">
            <div className="mt-20 glass p-10 rounded-[40px] border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
               <div>
                  <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                  <p className="text-muted-foreground">Our solar consultants are available for a 1-on-1 discovery call.</p>
               </div>
               <Link href="/contact" className="px-8 py-4 bg-primary text-background font-black rounded-full hover:scale-105 transition-all">
                  Chat With an Expert
               </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
