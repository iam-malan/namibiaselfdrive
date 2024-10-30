import type { Metadata, Viewport } from "next";
import "./globals.css";

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
  title: "Namibia Self Drive - Adventure Awaits",
  description: "Discover the perfect blend of comfort and adventure with our premium 4x4 solutions designed for the modern explorer.",
  keywords: [
    "Namibia Self Drive",
    "4x4",
    "Safari",
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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
