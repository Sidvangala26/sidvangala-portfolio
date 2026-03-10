import type { Metadata } from "next";
import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { siteConfig } from "@/lib/site";
import { PageTransition } from "@/components/page-transition";
import { Spotlight } from "@/components/spotlight";
import { ScrollToTop } from "@/components/scroll-to-top";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} bg-luxury-black font-sans text-neutral-100 antialiased`}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <Spotlight />
		  <ScrollToTop />
          <div className="mesh-background" />
          <div className="relative min-h-screen overflow-hidden">
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}