"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Zap, Shield, Factory, Building, Settings, Wrench, Wallet, BarChart3, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  { name: "Residential", href: "/solutions/residential", icon: Sun, desc: "Power your home with clean energy" },
  { name: "Commercial", href: "/solutions/commercial", icon: Building, desc: "Scale solar for your business" },
  { name: "Industrial", href: "/solutions/industrial", icon: Factory, desc: "Heavy-duty power for factories" },
  { name: "Gov & Utility", href: "/solutions/government-utility", icon: Shield, desc: "Large scale utility projects" },
  { name: "Maintenance", href: "/solutions/maintenance-amc", icon: Wrench, desc: "Expert care for your systems" },
];

const products = [
  { name: "Solar Panels", href: "/products/panels", icon: Zap },
  { name: "Inverters", href: "/products/inverters", icon: Zap },
  { name: "Batteries", href: "/products/batteries", icon: Zap },
  { name: "EV Chargers", href: "/products/ev-chargers", icon: Zap },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Sun className="h-8 w-8 text-primary group-hover:rotate-90 transition-transform duration-500" />
              <Zap className="h-4 w-4 text-secondary absolute -bottom-1 -right-1" />
            </div>
            <span className="text-2xl font-bold font-heading tracking-tight">
              SOLARIS<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Solutions <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="invisible group-hover:visible absolute top-full -left-4 pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="glass w-[600px] grid grid-cols-2 gap-4 p-6 rounded-2xl shadow-2xl">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                    >
                      <item.icon className="h-6 w-6 text-primary group-hover/item:scale-110 transition-transform" />
                      <div>
                        <div className="font-semibold text-sm">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">Products</Link>
            <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</Link>
            <Link href="/calculator" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
              <BarChart3 className="h-4 w-4 text-accent" /> Calculator
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-primary text-background font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Solutions</div>
                {solutions.map((item) => (
                  <Link key={item.href} href={item.href} className="text-xl font-semibold" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/products" className="text-xl font-semibold" onClick={() => setIsOpen(false)}>Products</Link>
                <Link href="/projects" className="text-xl font-semibold" onClick={() => setIsOpen(false)}>Projects</Link>
                <Link href="/calculator" className="text-xl font-semibold text-accent" onClick={() => setIsOpen(false)}>Calculator</Link>
                <Link href="/contact" className="text-xl font-semibold text-primary" onClick={() => setIsOpen(false)}>Contact</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
