import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProvider } from "@/context/AppProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProvider>
        <body className={`flex flex-col ${inter.className} bg-slate-900`}>{children}</body>
        {/* <body className={inter.className}>
          <main className="flex items-center justify-center w-full">{children}</main>
        </body> */}
      </AppProvider>
    </html>
  );
}
