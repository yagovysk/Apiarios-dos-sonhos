import type { Metadata } from "next";
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

const siteTitle = "Apiários dos Sonhos";
const siteDescription =
  "Mel artesanal, própolis e experiências apícolas premium produzidos com cuidado, respeito às abelhas e compromisso ambiental.";

export const metadata: Metadata = {
  metadataBase: new URL("https://apiariosdossonhos.com.br"),
  title: {
    default: siteTitle,
    template: "%s | Apiários dos Sonhos",
  },
  description: siteDescription,
  keywords: [
    "mel artesanal",
    "apicultura",
    "produtos apícolas",
    "Apiários dos Sonhos",
    "própolis",
    "pólen",
    "loja de mel",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://apiariosdossonhos.com.br",
    siteName: siteTitle,
    locale: "pt_BR",
    type: "website",
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
    canonical: "https://apiariosdossonhos.com.br",
  },
  icons: {
    icon: "/favicon.ico",
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
