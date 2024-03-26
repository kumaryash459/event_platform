import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "next-themes";




const poppins = Poppins({
   subsets: ["latin"],
   weight:['400','500','600','700'],
   variable:'--font-poppins'
 });

export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is an event organising Platform",
  
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      
    <html lang="en">
      <body className={poppins.variable}>
        
        {children}
        </body>
      <link rel="icon" href="/logo2.png" type="image/svg+xml" />
    </html>
    
    </ClerkProvider>
    
  );
}
