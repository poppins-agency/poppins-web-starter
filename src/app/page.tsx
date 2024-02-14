import { getStoryblokApi } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <h1>Story: {data.story.name}</h1>
    </div>
  );
}

export async function fetchData() {
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
