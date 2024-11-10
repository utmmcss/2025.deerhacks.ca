import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeerHacks IV",
  description: "2025 hackathon hosted by MCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
