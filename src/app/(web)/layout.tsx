import type  Metadata from "next";
import { Poppins as PoppinsFont } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import Toast from "@/components/Toast/Toast";

const poppins = PoppinsFont({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "El-Caaz Farms and Resorts",
  description:
    "El-Caaz Farms and Resorts is a serene getaway destination that combines the charm of a lush agricultural setting with the comforts of a modern resort. Nestled in a picturesque location, it offers visitors an opportunity to experience farm life, enjoy fresh organic produce, and relax in well-appointed accommodations. With a variety of recreational activities, nature trails, and farm-to-table dining, El-Caaz is perfect for families, couples, and individuals seeking a unique blend of relaxation, adventure, and sustainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
        crossOrigin="anonymous"
        />
      </head>
      <body className={poppins.variable}>
        <NextAuthProvider>
          <ThemeProvider>
            <Toast />
            <main className="font-normal">
              <Header />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
