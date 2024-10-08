import { Inter } from "next/font/google";
import "./globals.css";
import "./index.scss";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/partials/header/page";
import Footer from "./components/partials/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muse",
  description: "Developed in Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Head>
          <link rel="icon" href={FaviconLogo} />
        </Head> */}
        <NextUIProvider>
          <Header />
          <div className="main-content min-h-[calc(100vh-70px)] bg-white pt-[90px]">
            {children}
          </div>
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
