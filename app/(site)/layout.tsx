import type { Metadata } from "next";

import { Inter, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import { nohemi } from "../fonts";
import SmoothScroll from "../components/SmoothScroll";
import Noise from "../components/Noise";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jeevan Aaron",
    template: "%s | Jeevan Aaron",
  },
  description: "Developer, videographer, cinephile. This is where I build things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable} ${nohemi.variable}`}>
      <body>
        <SmoothScroll />
        <Noise />
        {children}
      </body>
    </html>
  );
}
