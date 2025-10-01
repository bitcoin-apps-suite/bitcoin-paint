import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bitcoin Paint Studio",
  description: "Create, collect, and trade digital painting NFTs on Bitcoin",
  keywords: ["Bitcoin", "Paint", "NFT", "Studio", "Digital Painting", "Blockchain", "Crypto Painting"],
  authors: [{ name: "Bitcoin Paint Studio" }],
  creator: "Bitcoin Paint Studio",
  publisher: "Bitcoin Paint Studio",
  openGraph: {
    title: "Bitcoin Paint Studio",
    description: "Create, collect, and trade digital painting NFTs on Bitcoin",
    type: "website",
    locale: "en_US",
    siteName: "Bitcoin Paint Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bitcoin Paint Studio - Create & Trade Painting NFTs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Paint Studio",
    description: "Create, collect, and trade digital painting NFTs on Bitcoin",
    images: ["/twitter-image.png"],
    creator: "@bitcoinpaint",
  },
  icons: {
    icon: "/icon-192.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}