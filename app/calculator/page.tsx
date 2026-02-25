"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Reveal } from "@/components/ui/reveal";
import { Slider } from "lucide-react"; // I'll use custom inputs for better UI
import { BarChart3, TrendingDown, Sun, Calculator, ArrowRight, Mail } from "lucide-react";

export default function SolarCalculator() {
  const [bill, setBill] = useState(200);
  const [roofSize, setRoofSize] = useState(500);
  const [results, setResults] = useState({
    systemSize: 0,
    cost: 0,
    yearlySavings: 0,
    payback: 0,
    co2: 0,
  });

  useEffect(() => {
    // Simple calculation logic
    const systemSize = Math.round((bill / 40) * 10) / 10; // Simple ratio
    const cost = systemSize * 1500; // Estimated $1500 per kW
    const yearlySavings = bill * 12 * 0.9; // 90% reduction
    const payback = cost / yearlySavings;
    const co2 = systemSize * 1.5; // Tons per year

    setResults({
      systemSize,
      cost,
      yearlySavings,
      payback: Math.round(payback * 10) / 10,
      co2: Math.round(co2 * 10) / 10,
    });
  }, [bill]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-muted/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal width="100%">
              <h1 className="text-5xl md:text-6xl font-heading font-black mb-6">
                Solar <span className="text-primary">Savings</span> Calculator
              </h1>
            </Reveal>
            <Reveal delay={0.2} width="100%">
              <p className="text-lg text-muted-foreground">
                Estimate your potential savings and system size in seconds. Optimized for global energy tariffs.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Inputs */}
            <Reveal delay={0.3}>
              <div className="glass p-10 rounded-[40px] border-white/10 h-full">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                   Your Info
                </h3>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Monthly Bill ($)</label>
                      <span className="text-2xl font-black text-primary">${bill}</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="2000" 
                      step="10"
                      value={bill} 
                      onChange={(e) => setBill(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Roof Area (sq.ft)</label>
                      <span className="text-2xl font-black text-secondary">{roofSize}</span>
                    </div>
                    <input 
                      type="range" 
                      min="100" 
                      max="5000" 
                      step="50"
                      value={roofSize} 
                      onChange={(e) => setRoofSize(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary"
                    />
                  </div>

                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                    <p className="text-xs text-muted-foreground italic">
                      * Costs are estimated based on premium Tier-1 Mono PERC panels and industry-average installation rates. Actual prices may vary by region and site complexity.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Results */}
            <Reveal delay={0.4}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass p-8 rounded-3xl border-primary/20 bg-primary/5">
                    <div className="text-primary mb-4"><Calculator className="h-8 w-8" /></div>
                    <div className="text-3xl font-black">{results.systemSize} kW</div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Recommended Size</div>
                  </div>
                  <div className="glass p-8 rounded-3xl border-accent/20 bg-accent/5">
                    <div className="text-accent mb-4"><TrendingDown className="h-8 w-8" /></div>
                    <div className="text-3xl font-black">${results.yearlySavings.toLocaleString()}</div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Yearly Savings</div>
                  </div>
                </div>

                <div className="glass p-10 rounded-[40px] border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Sun className="h-40 w-40 text-primary" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-6">Investment Overview</h4>
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between border-b border-white/5 pb-2">
                           <span className="text-muted-foreground">Estimated Cost</span>
                           <span className="font-bold text-white">${results.cost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                           <span className="text-muted-foreground">Payback Period</span>
                           <span className="font-bold text-accent">{results.payback} Years</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                           <span className="text-muted-foreground">25yr CO2 Reduction</span>
                           <span className="font-bold text-secondary">{results.co2 * 25} Tons</span>
                        </div>
                    </div>
                    
                    <button className="w-full py-4 bg-primary text-background font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all">
                      <Mail className="h-5 w-5" /> Email Detailed Report
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
