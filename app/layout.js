import { Figtree, Inter } from "next/font/google";
import "./globals.css";
import { assets } from '@/assets/assets'
import Image from "next/image";    

const figtree = Figtree({
  
  subsets: ["latin"], weight: ['700'],
});

const inter = Inter({
  subsets: ["latin"], weight: ['400','500','600', '700'],
});


export const metadata = {
  title: "Arthur's Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${figtree.className} ${inter.className} antialiased min-h-screen`}>
        {/* GLOBAL BACKGROUND (fixed behind all pages) */}
        <div className="fixed inset-0 -z-10">
          <Image
            src={assets.background}
            alt="Background"
            fill
            className="object-cover select-none pointer-events-none"
            priority
          />

          {/* Soft overlay for contrast */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Page content */}
        {children}
      </body>
    </html>
  );
}