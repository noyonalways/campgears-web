import { inter, lato, quickSand, roboto } from "@/lib/fonts";
import Providers from "@/lib/providers";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home - Campgears",
  description: "Campgears is camping accessories e-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${quickSand.variable} ${lato.variable} ${inter.variable} font-inter`}
      >
        <Providers>
          {children}
          <Toaster position="top-center" richColors />
        </Providers>
      </body>
    </html>
  );
}
