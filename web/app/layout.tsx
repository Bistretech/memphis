import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Memphis Capital | Business Strategy & Capital Sourcing",
  description: "Advisory firm specializing in Business Strategy, Capital Sourcing, and Market Research to empower businesses and drive growth.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://memphiscapital.co.ke",
    siteName: "Memphis Capital",
    title: "Memphis Capital | Business Strategy & Capital Sourcing",
    description: "Advisory firm specializing in Business Strategy, Capital Sourcing, and Market Research to empower businesses and drive growth.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Memphis Capital"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Memphis Capital | Business Strategy & Capital Sourcing",
    description: "Advisory firm specializing in Business Strategy, Capital Sourcing, and Market Research to empower businesses and drive growth.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}