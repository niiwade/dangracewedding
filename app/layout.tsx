import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrelineScript from "@/components/PrelineScript";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "#DANNEL2025",
  description: "Official Wedding Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-cormorant">
        <Analytics />
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
