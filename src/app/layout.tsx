import type { Metadata, Viewport } from "next";
import { Michroma, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://somerug.vercel.app"),
  title: "SOMERUG. Developer for hire.",
  description:
    "I build game systems, internal tools, and web products that hold up under real players and real traffic.",
  authors: [{ name: "SOMERUG", url: "https://somerug.vercel.app" }],
  creator: "SOMERUG",
  keywords: [
    "developer for hire",
    "freelance developer",
    "Next.js developer",
    "Roblox developer",
    "somerug",
  ],
  alternates: {
    canonical: "https://somerug.vercel.app",
  },
  openGraph: {
    title: "SOMERUG. Developer for hire.",
    description:
      "I build game systems, internal tools, and web products that hold up under real players and real traffic.",
    url: "https://somerug.vercel.app",
    siteName: "SOMERUG",
    images: [
      {
        url: "https://somerug.vercel.app/og.png",
        width: 1200,
        height: 675,
        alt: "SOMERUG",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOMERUG. Developer for hire.",
    description:
      "I build game systems, internal tools, and web products that hold up under real players and real traffic.",
    images: ["https://somerug.vercel.app/og.png"],
  },
  icons: {
    icon: "/icon",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${michroma.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-base text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
