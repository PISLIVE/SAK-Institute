import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import QuickConnect from "@/components/QuickConnect";
import NoticeTicker from "@/components/NoticeTicker";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sakcollege.edu"),
  title: "SAK College of Nursing | Empowering Future Healthcare Leaders",
  description: "Welcome to SAK College, a premier institution for higher education in nursing. Explore our GNM, B.Sc, and M.Sc programs.",
  keywords: ["Nursing College", "GNM", "B.Sc Nursing", "Healthcare Education", "SAK College", "Assam Nursing"],
  openGraph: {
    title: "SAK College of Nursing",
    description: "Empowering Future Healthcare Leaders through excellence in nursing education.",
    url: "https://sakcollege.edu",
    siteName: "SAK College",
    images: [
      {
        url: "/gallery11.jpeg",
        width: 1200,
        height: 630,
        alt: "SAK College Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAK College of Nursing",
    description: "Empowering Future Healthcare Leaders through excellence in nursing education.",
    images: ["/gallery11.jpeg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SplashScreen />
        <NoticeTicker />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <QuickConnect />
      </body>
    </html>
  );
}
