import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/providers/storyblokProvider";
import { storyBlokComponents } from "@/utils/storyblok";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pop Boilerplate",
  description: "Generated by Pop Boilerplate",
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: storyBlokComponents,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoryblokProvider>
        <body className={inter.className}>
          {children}
          <Analytics mode="production" />
        </body>
      </StoryblokProvider>
    </html>
  );
}
