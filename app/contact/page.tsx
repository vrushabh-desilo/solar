"use client";

import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Side: Info */}
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  Contact Us
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight">
                  Let's Power <br /> Your <span className="text-secondary italic">Future</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-12 max-w-md">
                  Have questions about solar? Our engineers are ready to help you plan your transition to clean energy.
                </p>
              </Reveal>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email Us", val: "hello@solaris-energy.com", sub: "Response within 2 hours" },
                  { icon: Phone, label: "Call Us", val: "+1 (555) 123-4567", sub: "Mon-Fri, 9am - 6pm" },
                  { icon: MapPin, label: "Visit Us", val: "123 Solar Street, CA 90210", sub: "Global HQ" },
                ].map((item, i) => (
                  <Reveal key={item.label} delay={0.1 * i} y={20}>
                    <div className="flex items-start gap-6 group">
                      <div className="h-14 w-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all shrink-0">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</div>
                        <div className="text-xl font-bold text-white mb-1">{item.val}</div>
                        <div className="text-xs text-muted-foreground">{item.sub}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Side: Form */}
            <Reveal delay={0.4} y={0}>
              <div className="glass p-10 md:p-12 rounded-[40px] border-white/10 shadow-2xl relative">
                <div className="absolute -top-10 -right-10 h-32 w-32 bg-primary/20 blur-3xl rounded-full" />
                
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                  <MessageSquare className="text-primary h-6 w-6" /> Send a Message
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                       <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                       <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                     <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all appearance-none">
                        <option>Residential Inquiry</option>
                        <option>Commercial Solutions</option>
                        <option>Maintenance & Support</option>
                        <option>Partnership</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                     <textarea rows={4} placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"></textarea>
                  </div>

                  <button className="w-full py-5 bg-primary text-background font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all group">
                    <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                    Send Message
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4 text-xs text-muted-foreground justify-center">
                  <Clock className="h-4 w-4 text-primary" /> Our team typically responds within 118 minutes.
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 pb-24">
        <Reveal width="100%" y={50}>
           <div className="container mx-auto h-[400px] glass rounded-[40px] border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-cover bg-center grayscale opacity-50" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass p-6 rounded-2xl flex flex-col items-center gap-4 border-primary/20">
                  <div className="h-10 w-10 bg-primary rounded-full animate-ping absolute opacity-50" />
                  <MapPin className="h-10 w-10 text-primary relative" />
                  <span className="font-bold text-white tracking-widest text-xs uppercase">Open in Google Maps</span>
                </div>
              </div>
           </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
