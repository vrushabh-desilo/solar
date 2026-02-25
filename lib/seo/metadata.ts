import { Metadata } from "next";

export function constructMetadata({
  title = "Solaris - Premium Solar Energy Solutions",
  description = "Advanced solar energy solutions for residential, commercial, and industrial needs.",
  image = "/og-image.jpg",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@solaris",
    },
    icons: "/favicon.ico",
    metadataBase: new URL("https://solaris-premium.vercel.app"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function generateLDJS(type: string, data: any) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    }),
  };
}
