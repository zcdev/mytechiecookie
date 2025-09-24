import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "@/styles/globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"]
});

metadataBase: new URL("https://mytechiecookie.com");

export const metadata: Metadata = {
  title: "Techie Cookie 🥠 | Fortune Cookies for Developers",
  description: "Crack open a cookie and get your daily dose of dev wisdom, humor, and fortunes tailored for coders.",
  keywords: [
    "fortune cookies",
    "developer humor",
    "TypeScript",
    "React",
    "Next.js",
    "coding inspiration",
  ],
  openGraph: {
    title: "Techie Cookie 🥠 | Fortune Cookies for Developers",
    description: "Daily dev wisdom and fun fortunes. Crack a cookie and code on.",
    url: "https://mytechiecookie.com",
    siteName: "Techie Cookie",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Techie Cookie app preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techie Cookie 🥠 | Fortune Cookies for Developers",
    description: "Daily dev wisdom and fun fortunes. Crack a cookie and code on.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shareTechMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
