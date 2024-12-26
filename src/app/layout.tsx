import type { Metadata } from "next";
import "./globals.css";
import Footer from "../../components/Footer";
import SideIconBar from "../../components/SideIconBar";
import Nav from "../../components/Nav";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Poornima College Alumni Society",
  description: "Generated by PCAS TEAM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <div className="flex w-screen flex-col justify-center items-center">
          <div className="w-full md:ml-16 md:mr-16 xs:ml-8 xs:mr-8">
            <Nav />
          </div>
          <SideIconBar />
          {children}
          <div className="w-full flex justify-center md:ml-16 md:mr-16 xs:ml-8 xs:mr-8">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}