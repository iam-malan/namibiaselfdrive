import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { cn } from "../lib/utils";

const geist = localFont({
  src: [
    {
      path: './fonts/GeistVF.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#F5F5F0" },
  ],
};

export const metadata: Metadata = {
  title: "Safari Condo - Adventure Awaits",
  description: "Discover the perfect blend of comfort and adventure with our premium RV solutions designed for the modern explorer.",
  keywords: [
    "Safari Condo",
    "RV",
    "Camping",
    "Travel",
    "Adventure",
    "Outdoor",
    "Vehicles",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", geist.variable)}>
      <body className="bg-[#F5F5F0] text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
