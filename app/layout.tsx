import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import SideBar from "@/components/header/SideBar";
import { SidebarProvider } from "@/providers/sidebarProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProsERP - Operational Control System",
  description:
    "ProsERP is a cloud-based operational control system that helps businesses manage their operations and financials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden scroll-smooth`}
      >
        <SidebarProvider>
          <SideBar />
          <Header />
          <main className="px-2 md:px-8 pb-10 mt-20 md:mt-28">{children}</main>
          <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}
