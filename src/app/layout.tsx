import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/providers/storyblokProvider";
import { storyblokComponents } from "@/utils/storyblokComponents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pop Boilerplate",
  description: "Generated by Pop Boilerplate",
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: storyblokComponents,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Analytics mode="production" />
        </body>
      </html>
    </StoryblokProvider>
  );
}
