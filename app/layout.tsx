import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Script from "next/script";
import KameleoonCookie from "./components/Kameleoon/KameleoonCookie";
import KameleoonProvider from "./components/Kameleoon/KameleoonProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kameleoon - FF",
  description: "Feature Flag Kameleoon",
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
    <html lang="en" className="h-full">
      <KameleoonCookie />
      <head>
        <Script
          type="text/javascript"
          src="//hpy9fwy751.kameleoon.io/engine.js"
          async={true}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />

        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
