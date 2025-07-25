import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({ subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: '--font-poppins',
 });

export const metadata: Metadata = {
  title: "FGDCM - FG Degree College for Men Kharian Cantt",
  description: "FG Degree College for Men Kharian Cantt is serving in education sector for years. Join us in our mission to make a difference.",
  icons: {
       icon: '/logo1.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
