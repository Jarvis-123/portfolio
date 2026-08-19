import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/content/site";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const ogImageUrl = `${site.siteUrl}/linkedin-share.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} · ${site.title}, ${site.company}`,
    template: `%s · ${site.name}`,
  },
  description: site.heroLine,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: `${site.name} · ${site.title}, ${site.company}`,
    description: site.heroLine,
    siteName: site.name,
    url: site.siteUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 627,
        alt: `${site.name} portfolio`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.title}, ${site.company}`,
    description: site.heroLine,
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plex.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only left-4 top-4 z-50 rounded-full bg-lavender text-sm text-white focus:z-50 focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
