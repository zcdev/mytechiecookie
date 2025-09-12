import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "@/styles/globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "My Techie Cookie",
  description: "What type of coder are you? Click to reveal your fortune.",
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
