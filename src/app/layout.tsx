import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishnu Portfolio",
  description: "Let's create something extraordinary together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster richColors position="top-right"/>
      </body>
    </html>
  );
}
