import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/utils/AuthContext";
import Header from "@/components/Header";
import { ProfileProvider } from "@/utils/ProfileContext";
import Footer from "@/components/Footer";
import { BooksProvider } from "@/utils/BooksContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BooksProvider>
          <ProfileProvider>
            <AuthProvider>
              <Header />
              {children}
              <Footer />
            </AuthProvider>
          </ProfileProvider>
        </BooksProvider>
      </body>
    </html>
  );
}
