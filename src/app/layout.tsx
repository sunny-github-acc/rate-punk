import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./styles/globals.modules.sass";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RATEPUNK",
  description: "We search for the best hotel rates!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </>
  );
}
