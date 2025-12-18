import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Apiários dos Sonhos | Mel Artesanal em Brasília DF";
const siteDescription =
  "Produzimos mel de aroeira, mel cipó-uva do Cerrado e experiências apícolas boutique em Vicente Pires, Brasília DF, com entrega rápida e presença na Feira do Produtor.";

const siteUrl = "https://apiariosdossonhos.com.br";
const phoneNumber = "+55 61 99999-0000";
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#negocio`,
  name: "Apiários dos Sonhos",
  description: siteDescription,
  url: siteUrl,
  telephone: phoneNumber,
  image: `${siteUrl}/logo%20normal.png`,
  priceRange: "R$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Feira do Produtor, Box 12 - Vicente Pires",
    addressLocality: "Brasília",
    addressRegion: "DF",
    addressCountry: "BR",
    postalCode: "72130-505",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -15.81687,
    longitude: -48.03283,
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Distrito Federal",
    },
    {
      "@type": "City",
      name: "Brasília",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Mel de Aroeira do Cerrado",
        description:
          "Mel bruto de aroeira colhido em apiários responsáveis em Vicente Pires, Brasília DF.",
      },
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Mel Cipó Uva do Cerrado",
        description:
          "Mel cipó-uva artesanal com notas frutadas, extraído no cerrado brasiliense.",
      },
      availability: "https://schema.org/InStock",
    },
  ],
  hasMap:
    "https://www.google.com/maps/place/Feira+do+Produtor+-+Vicente+Pires,+Bras%C3%ADlia+-+DF",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Apiários dos Sonhos Brasília",
  },
  description: siteDescription,
  keywords: [
    "mel artesanal brasília",
    "mel de aroeira",
    "mel cipó uva",
    "mel do cerrado",
    "apiário em vicente pires",
    "feira do produtor vicente pires",
    "mel cru df",
    "propolis brasilia",
    "experiências apícolas",
  ],
  applicationName: "Apiários dos Sonhos",
  category: "LocalBusiness",
  authors: [{ name: "Apiários dos Sonhos" }],
  creator: "Apiários dos Sonhos",
  publisher: "Apiários dos Sonhos",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    locale: "pt_BR",
    type: "website",
    determiner: "the",
    images: [
      {
        url: "/logo normal.png",
        width: 1200,
        height: 630,
        alt: "Logotipo Apiários dos Sonhos em fundo escuro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo normal.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "BR-DF",
    "geo.placename": "Brasília",
    "geo.position": "-15.81687;-48.03283",
    ICBM: "-15.81687, -48.03283",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-page font-sans text-cream antialiased`}
      >
        <Script
          id="structured-data-local-business"
          type="application/ld+json"
          strategy="afterInteractive"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-night"
        >
          Ir para conteúdo principal
        </a>
        <Navbar />
        <main id="conteudo" className="flex-1 pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
