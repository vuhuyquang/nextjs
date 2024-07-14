import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/scss/app.scss";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog cá nhân",
  description: "Đây là blog cá nhân của tôi, nơi tôi chia sẻ về cuộc sống, công nghệ và những điều thú vị.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <main className="container mx-auto w-screen max-w-full pt-[76px]">
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
