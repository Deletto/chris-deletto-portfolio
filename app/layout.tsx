import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game Audio Composer & Sound Designer | Chris D'Eletto",
  description:
    "AAA game audio director, composer, and sound designer with credits on Evil Dead: The Game and Saber Interactive titles. Available for music, sound design, and UE5 implementation.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chris D'Eletto",
  jobTitle: "Game Audio Director, Composer, Sound Designer",
  url: "https://www.chrisdeletto.com",
  sameAs: [
    "https://www.instagram.com/delettomusic",
    "https://www.linkedin.com/in/chrisdeletto",
  ],
  knowsAbout: [
    "Game Audio",
    "Music Composition",
    "Sound Design",
    "Unreal Engine 5",
    "Wwise",
    "FMOD",
  ],
};

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {gaMeasurementId ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          type="application/ld+json"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
