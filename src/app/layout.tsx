import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
