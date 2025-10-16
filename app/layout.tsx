import { Geist } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const geist = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Launch MVP - Modern Landing Page",
  description: "A modern Next.js landing page with dark mode and smooth animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
