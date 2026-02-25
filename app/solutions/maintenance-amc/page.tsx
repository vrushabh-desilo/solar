import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Check, ArrowRight, Wrench, BarChart3, Clock, Settings } from "lucide-react";
import Link from "next/link";

export default function MaintenanceAMC() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30" 
            alt="Maintenance Solar" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
             <h1 className="text-6xl md:text-8xl font-heading font-black mb-6">
               Expert <br /> <span className="text-accent italic">Maintenance</span> & AMC
             </h1>
             <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
               Ensure your solar investment performs at 100% for decades. Our certified technical teams provide 24/7 monitoring and preventive care for systems of all sizes.
             </p>
             <Link href="/contact" className="px-10 py-5 bg-primary text-background font-black rounded-full inline-flex items-center gap-2 hover:scale-105 transition-all">
                Get Maintenance Plan <ArrowRight className="h-5 w-5" />
             </Link>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Wrench, title: "Proactive Cleaning", desc: "Regular robotic and manual cleaning to eliminate dust shading and power loss." },
              { icon: Clock, title: "24/7 Remote Monitoring", desc: "We track every panel's performance in real-time to detect issues before they occur." },
              { icon: BarChart3, title: "Performance Reports", desc: "Detailed monthly analytics on generation, health, and ROI metrics." },
            ].map((b, i) => (
              <Reveal key={b.title} delay={0.1*i}>
                <div className="glass p-10 rounded-[40px] border-white/10 h-full">
                  <div className="text-accent mb-6 h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <b.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <Reveal y={0}>
               <div className="relative rounded-[40px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1558444479-c84824d61582?q=80&w=2070&auto=format&fit=crop" alt="Technician" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
               </div>
             </Reveal>

             <div>
                <Reveal>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Protect Your <span className="text-accent italic">Yield</span></h2>
                </Reveal>
                <div className="space-y-6">
                  {[
                     "Comprehensive annual maintenance contracts",
                     "Inverter health checks and firmwire updates",
                     "Thermal imaging for hot-spot detection",
                     "Electrical safety and earthing audits",
                     "Guaranteed response times within 12 hours"
                  ].map((item, i) => (
                    <Reveal key={item} delay={0.1*i} x={-20}>
                      <div className="flex items-center gap-4">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-lg font-medium text-white/90">{item}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
