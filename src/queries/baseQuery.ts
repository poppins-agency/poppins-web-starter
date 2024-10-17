import { getStoryblokApi } from "@storyblok/react/rsc";

export async function fetchSBPageData(
  slug: string,
  relationships?: string[]
): Promise<any | null> {
  try {
    const version = process.env.NEXT_PUBLIC_STORYBLOK_VERSION as
      | "draft"
      | "published";

    let storyblokApi = getStoryblokApi();
    if (!storyblokApi) {
      storyblokApi = getStoryblokApi();
    }
    const { data } = await storyblokApi.get(
      `cdn/stories/${slug}`,
      { version, resolve_relations: relationships },
      { cache: "no-cache" }
    );
    return data.story.content;
  } catch (error) {
    console.error(error);
    return null;
  }
}
