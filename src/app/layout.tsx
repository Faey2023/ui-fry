import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../Components/Shared/Navbar/NavBar";
import Footer from "../Components/Shared/Footer/Footer";
import { Providers } from "../Components/Shared/Theme Button/providers";

const clash = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Variable.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/ClashDisplay-Variable.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/ClashDisplay-Variable.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/ClashDisplay-Variable.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/ClashDisplay-Variable.ttf",
      weight: "900",
    },
  ],
  variable: "--font-clash",
});

export const metadata: Metadata = {
  title: "Ui Fry",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <html lang="en" suppressHydrationWarning> */}
      <body className={`${clash.variable}`}>
        <div className="px-10 font-clash">
          <Providers>
            <NavBar />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
