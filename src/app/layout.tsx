import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: "Ranger" };

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html
      className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
      lang="en"
    >
      <body className={inter.className}>{props.children}</body>
    </html>
  );
}
