import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glowbe Nexus | Build your financial future with intention",
  description:
    "Explore investment portfolios, track your financial growth, and build your understanding of the markets with tools designed to support more informed decisions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className={`${plusJakarta.className} flex min-h-full flex-col text-foreground`}>
        {children}
      </body>
    </html>
  );
}
