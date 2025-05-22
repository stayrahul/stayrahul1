import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { siteConfig } from "@/config";
import { ThemeProvider } from "./provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#000319",
  colorScheme: "dark",
};

export const metadata: Metadata = siteConfig;

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <head>
        {/* Load Google AdSense library */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7883738601124403"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}

          {/* Verbal Ad Unit */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7883738601124403"
            data-ad-slot="6450896650"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />

          {/* Initialize the ad unit */}
          <Script
            id="adsbygoogle-verbal"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
