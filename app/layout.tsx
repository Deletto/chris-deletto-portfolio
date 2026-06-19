import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chris D'Eletto | Composer Reel & Game Audio",
  description:
    "Dark cinematic game audio portfolio for composer, sound designer, and audio director Chris D'Eletto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
