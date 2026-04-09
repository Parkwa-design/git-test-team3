import type { Metadata } from "next";
import "./globals.css";
import Header from "@/presentation/layout/Header";
import Footer from "@/presentation/layout/Footer";

export const metadata: Metadata = {
  title: "Achim - 고요한 아침의 기록",
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
        {/* Noto Sans & Serif KR (Migrated from index.html) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@300;400;500;700&family=Cardo:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
