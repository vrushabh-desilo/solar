"use client";

import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
             <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                  Security First
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight">Privacy <span className="text-accent italic">Policy</span></h1>
                <p className="text-xl text-muted-foreground mb-16">Last updated: February 25, 2026. Your trust is our most valuable asset. Here is how we protect your data.</p>
             </Reveal>

             <div className="space-y-12">
                {[
                  { icon: Eye, title: "Data Collection", content: "We collect only the information necessary to provide accurate solar audits, including your property location, energy consumption data, and contact details for report delivery." },
                  { icon: Lock, title: "Information Security", content: "All data sent to Solaris is encrypted using industry-standard TLS. Your property images and electrical details are stored in secure, air-gapped server environments." },
                  { icon: ShieldCheck, title: "Third Party Policy", content: "We never sell your data. We only share lead information with certified installation partners if you explicitly request a physical site visit or hardware purchase." },
                  { icon: FileText, title: "Your Rights", content: "You have the right to request a full dump of your data or its immediate deletion from our systems at any time by contacting privacy@solaris-energy.com." }
                ].map((item, i) => (
                  <Reveal key={item.title} delay={0.1*i} x={-20}>
                    <div className="flex flex-col md:flex-row gap-8">
                       <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
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
