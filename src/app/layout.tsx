import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEC Links",
  description:
    "TEC PA & Lighting: Providing high quality sound, lighting and audio-visual services to organisations both within and outside the University of Nottingham Students’ Union.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased p-2">{children}</body>
    </html>
  );
}
