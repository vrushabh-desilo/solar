import Link from "next/link";
import { Sun, Zap, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Sun className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-heading tracking-tight text-white">
                SOLARIS<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Pioneering the transition to sustainable energy with cutting-edge solar technology and premium service standards.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-background transition-all group">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-background transition-all">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-xs">Solutions</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: "Residential Solar", href: "/solutions/residential" },
                { name: "Commercial Solar", href: "/solutions/commercial" },
                { name: "Industrial Systems", href: "/solutions/industrial" },
                { name: "Gov & Utility Scale", href: "/solutions/government-utility" },
                { name: "Maintenance & AMC", href: "/solutions/maintenance-amc" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: "About Solaris", href: "/about" },
                { name: "Our Projects", href: "/projects" },
                { name: "Financing", href: "/financing" },
                { name: "Contact Hub", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">123 Solar Street, Green Energy Park, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">hello@solaris-energy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Solaris Energy Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-muted-foreground hover:text-white transition-colors text-xs">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-white transition-colors text-xs">Terms of Service</Link>
            <Link href="/site-map" className="text-muted-foreground hover:text-white transition-colors text-xs">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
