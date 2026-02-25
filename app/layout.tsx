import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Solaris - Premium Solar Energy Solutions",
    template: "%s | Solaris",
  },
  description: "Advanced solar energy solutions for residential, commercial, and industrial needs. Experience sustainable power with industry-leading efficiency.",
  keywords: ["solar energy", "solar panels", "clean energy", "renewable energy", "solar installation", "commercial solar", "industrial solar"],
  authors: [{ name: "Solaris Team" }],
  creator: "Solaris",
  publisher: "Solaris",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solaris-premium.vercel.app",
    siteName: "Solaris",
    title: "Solaris - Premium Solar Energy Solutions",
    description: "Advanced solar energy solutions for residential, commercial, and industrial needs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solaris Solar Energy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solaris - Premium Solar Energy Solutions",
    description: "Advanced solar energy solutions for residential, commercial, and industrial needs.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-white",
          inter.variable,
          outfit.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
