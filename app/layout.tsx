import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledRoot } from "./StyledRoot";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Challenge woovi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <StyledRoot>
            <NavBar />
            <section className="">{children}</section>
            <Footer />
          </StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
