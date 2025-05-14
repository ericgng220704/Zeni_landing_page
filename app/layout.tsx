import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeni",
  description:
    "Manage your expenses with ease using Zeni. Create budgets, track transactions, and gain valuable financial insights.",
  openGraph: {
    title: "Zeni - Landing page",
    description:
      "Manage your expenses with ease using Zeni. Create budgets, track transactions, and gain valuable financial insights.",
    url: "https://zeni-landing-page.vercel.app/",
    siteName: "Zeni - landing page",
    images: [
      {
        url: "/thumbnail_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeni - Landing page",
    description:
      "Manage your expenses with ease using Zeni. Create budgets, track transactions, and gain valuable financial insights.",
    images: ["/thumbnail_logo.png"],
  },
  icons: {
    icon: "/meta_icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
