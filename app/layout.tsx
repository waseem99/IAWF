import type { Metadata, Viewport } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: "IAWF — Global Wildland Fire Community | Concept",
  description:
    "Proposal-stage homepage concept for the International Association of Wildland Fire, focused on global community, knowledge, events and membership.",
  robots: { index: false, follow: false },
  metadataBase: new URL("https://iawf-concept.vercel.app")
};

export const viewport: Viewport = {
  themeColor: "#153a3a",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
