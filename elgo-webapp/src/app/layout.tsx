import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./constants/style";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ElgoElectric",
  description: "Bringing you Smart Energy, Tasty Savings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <UserProvider>
        <body>
          <div className='bg-primary w-full overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar/>
              </div>
            </div>
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
