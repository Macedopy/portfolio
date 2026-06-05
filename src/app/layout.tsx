import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import GlobalModals from "@/components/GlobalModals";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My static portfolio generated with Next.js",
  authors: [{ name: "Bruno Macedo Lemos" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <GlobalModals />
        </LanguageProvider>
      </body>
    </html>
  );
}
