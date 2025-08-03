import "./assets/css/main.css";
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import Navigation from "./components/Navigation";
import Notification from "./components/Notification";
import ReduxProvider from "./lib/reduxProvider";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Geo-Síntesis",
  description: "Plataforma de inteligencia geoespacial",
  icons: {
    icon: '/logo2Canva.svg',
    // También puedes añadir diferentes tamaños si lo necesitas
    apple: '/logo2Canva.svg',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en" className={poppins.variable}>
        <body className="font-sans">
          <div className="bg-white">
            <slot name="header">
              <Navigation />
            </slot>
          </div>
          {children}
          <slot name="footer">
            <Notification />
            <Footer />
          </slot>
        </body>
      </html>
    </ReduxProvider>
  );
}
