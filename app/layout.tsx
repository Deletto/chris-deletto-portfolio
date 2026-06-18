import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chris D'Eletto | Game Audio Portfolio",
  description:
    "Game audio director, composer, sound designer, and music producer for games, film, television, and artist projects.",
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
