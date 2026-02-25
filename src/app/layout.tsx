import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wojtek Rosłonek | E-commerce Specialist",
  description: "Portfolio — E-commerce Operations Specialist, automatyzacje, integracje systemów.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
