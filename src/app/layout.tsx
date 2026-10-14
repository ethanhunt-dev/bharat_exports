import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { QuoteModalProvider } from "@/context/QuoteModalContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SVMR Exports | Premier Indian B2B Export House",
  description:
    "Government Recognized Three-Star Export House providing institutional grades, guaranteed phytosanitary compliance, and direct Visakhapatnam port transshipment.",
  keywords: [
    "SVMR Exports",
    "Indian B2B Export House",
    "Basmati Rice Exporters",
    "Indian Spices Export",
    "Visakhapatnam Port",
    "APEDA Certified Exporters",
    "Guntur Chilli Export",
    "Organic Turmeric Exporter",
    "Indian Raw Cotton Textiles",
  ],
  authors: [{ name: "SVMR Exports Corporate Portal" }],
  openGraph: {
    title: "SVMR Exports | Premier Indian B2B Export House",
    description: "Generational Indian agro and textile export house operating through Visakhapatnam Port to 40+ countries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed min-h-screen flex flex-col">
        <QuoteModalProvider>
          <Header />
          <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)] flex-1">
            {children}
          </main>
          <Footer />
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
