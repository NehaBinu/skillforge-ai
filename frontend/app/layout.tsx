import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", weight: ["500", "700"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}