import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import SideBar from "@/components/header/SideBar";
import { SidebarProvider } from "@/providers/sidebarProvider";
import { VercelSpeedInsights } from "@/components/VercelSpeedInsights";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const APP_NAME = 'ProsERP';
const APP_DEFAULT_TITLE = 'ProsERP';
const APP_TITLE_TEMPLATE = '%s | ProsERP';
const APP_DESCRIPTION = 'Robust ERP for accounting, project management, payroll, inventory, and requisitions.';

export async function generateStaticParams() {
  return [{ lang: 'en-US' }];
}

export const viewport = {
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#2113AD' }],
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['nextjs', 'next14', 'pwa', 'next-pwa'],
  icons: [
    { rel: 'apple-touch-icon', url: '/assets/images/icons/logo512.png' },
    { rel: 'icon', url: '/assets/images/icons/logo512.png' },
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  other: {
    'msapplication-TileColor': '#2113AD',
    keywords:
      'Robust ERP, ProsERP, Accounts, Project Management, Inventory Management, Payroll, Requisitions',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <SidebarProvider>
          <SideBar />
          <Header />
          <main className="px-2 md:px-8 pb-10 mt-20 md:mt-28">{children}</main>
          <Footer />
          <VercelSpeedInsights />
        </SidebarProvider>
      </body>
    </html>
  );
}
