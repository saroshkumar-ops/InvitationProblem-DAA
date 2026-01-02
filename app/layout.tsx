import type { Metadata } from "next";
import { Orbitron, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Invitation Problem | Graph Algorithm Optimization",
  description: "An interactive exploration of graph algorithms and minimum spanning trees through a real-world delivery optimization scenario",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans">
        {/* Noise Overlay */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
