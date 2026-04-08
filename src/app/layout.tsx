import type { Metadata } from "next";
import "./globals.css";
import Header from "@/presentation/layout/Header";
import Footer from "@/presentation/layout/Footer";

export const metadata: Metadata = {
  title: "ACHIM | Every morning, New Inspiration",
  description: "아침매거진 클론 프로젝트 - 6인의 협업 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
