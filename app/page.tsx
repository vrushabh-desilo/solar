import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/sections/hero";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <Hero />
      
      <SolutionsGrid />

      {/* Trust / Stats Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                  Trusted by 10,000+ <span className="text-primary italic">Sustainable</span> Leaders
                </h2>
              </Reveal>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "CO2 Savings", value: "1.2M", unit: "Tons" },
                  { label: "Systems Live", value: "15k+", unit: "Active" },
                  { label: "Regions", value: "48", unit: "States" },
                  { label: "Support", value: "24/7", unit: "Expert" },
                ].map((stat, i) => (
                  <Reveal key={stat.label} delay={0.1 * i}>
                    <div className="p-6 rounded-2xl glass border-white/5">
                      <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{stat.label}</div>
                      <div className="text-[10px] text-muted-foreground">{stat.unit} monitored systems</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            
            <Reveal delay={0.4} y={0}>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                <div className="relative glass p-10 rounded-[40px] border-white/10 shadow-2xl">
                  <Quote className="h-12 w-12 text-primary/30 mb-6" />
                  <p className="text-2xl font-medium leading-relaxed mb-8 italic text-white/90">
                    "Switching to Solaris was the best investment we made for our manufacturing plant. The savings were immediate, and the installation was flawless."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-muted overflow-hidden">
                      <img src="https://i.pravatar.cc/150?u=1" alt="CEO" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-white">David Chen</div>
                      <div className="text-sm text-primary">CEO, EcoBuild Industries</div>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-primary text-primary" />)}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2064&auto=format&fit=crop" 
            alt="Solar" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <Reveal width="100%">
              <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 max-w-4xl mx-auto leading-tight">
                Ready to Own Your <span className="text-primary">Energy</span> Future?
              </h2>
            </Reveal>
            <Reveal delay={0.3} width="100%">
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Join thousands of homeowners and businesses who have already made the switch. Get your free personalized solar audit today.
              </p>
            </Reveal>
            <Reveal delay={0.4} width="100%">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="px-12 py-5 rounded-full bg-primary text-background font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-primary/30 flex items-center gap-3"
                >
                  Book Your Free Audit <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/calculator"
                  className="px-12 py-5 rounded-full glass text-white font-bold text-lg hover:bg-white/10 transition-all border border-white/10"
                >
                  Calculate ROI
                </Link>
              </div>
            </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
