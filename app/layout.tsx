import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/layout/Navbar";
import { Footer } from "@/components/shared/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "stinky tailor - Google Search",
  description:
    "Uniqueness. Be in a unique fabric inspired by africa. Female. Price: ¢500. If interested. Click on the 'Contact Us' button below.",

  // Open Graph
  openGraph: {
    title: "stinky tailor - Google Search",
    description:
      "Uniqueness. Be in a unique fabric inspired by africa. Female. Price: ¢500. If interested. Click on the 'Contact Us' button below.",
    images:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-9d7c8.appspot.com/o/WhatsApp%20Image%202024-05-10%20at%2014.55.20.jpeg?alt=media&token=159e220e-8780-4218-9254-ec1924d93f98",
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
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/></body>

    </html>
  );
}
