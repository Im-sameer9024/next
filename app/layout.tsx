import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Yellow Dairies - Discover Your Best Trip",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        {children}
      </body>
    </html>
  );
}
