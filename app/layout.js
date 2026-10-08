import { GoogleTagManager } from "@next/third-parties/google";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata = {
  title: "Portfolio of Mia Tran - Data Analyst | Analytics Engineer | Data Enthusiast",
  description:
    "This is the portfolio of Mia Tran. I am a data analyst and an analytics engineer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans text-ink antialiased" suppressHydrationWarning>
        <ToastContainer />
        <Navbar />
        <main className="relative mx-auto min-h-screen max-w-6xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <ScrollToTop />
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
