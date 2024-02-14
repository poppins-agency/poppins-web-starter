import { getStoryblokApi } from "@storyblok/react/rsc";

export async function fetchHomepageData() {
  const version = process.env.NEXT_PUBLIC_STORYBLOK_VERSION as
    | "draft"
    | "published";

  const storyblokApi = getStoryblokApi();

  return storyblokApi.get(
    `cdn/stories/home`,
    { version },
    { cache: "no-store" }
  );
}
