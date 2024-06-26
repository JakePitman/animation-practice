import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AnimationProvider } from "./AnimationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R3F Template",
  description: "R3F Template, with Next, Tailwind and Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
