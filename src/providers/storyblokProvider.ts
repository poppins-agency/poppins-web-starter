"use client";

import { storyBlokComponents } from "@/lib/storyblok";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { ReactNode } from "react";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: storyBlokComponents,
});

export default function StoryblokProvider({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
