import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ben - Coach sportif à Épinal et ses alentours",
  description:
    "Je m'appel Ben, je suis éducateur sportif et instructeur de boxe anglaise depuis plus de 20 ans. Je propose de la boxe et des circuits training pour de la remise en forme et du renforcement musculaire à Épinal et ses alentours.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
