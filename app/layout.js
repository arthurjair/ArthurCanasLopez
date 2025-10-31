import { Figtree, Inter } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${figtree.className} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
