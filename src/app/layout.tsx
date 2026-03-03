import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mostafa Nassr | Full Stack Developer",
  description:
    "Full Stack Developer with 5+ years of experience building high-performance applications with React, TypeScript, and Node.js at companies like S&P Global, Tesla, and UnitedHealth Group.",
  keywords: [
    "Mostafa Nassr",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Node.js",
    "Software Engineer",
  ],
  authors: [{ name: "Mostafa Nassr" }],
  openGraph: {
    title: "Mostafa Nassr | Full Stack Developer",
    description:
      "Full Stack Developer building high-performance applications with React, TypeScript, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
