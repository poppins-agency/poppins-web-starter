import { Metadata, ResolvingMetadata } from "next";

export const getDynamicSEOData = async (
  seo: {
    _uid?: string;
    title?: string;
    plugin?: string;
    og_image?: string;
    og_title?: string;
    description?: string;
    twitter_image?: string;
    twitter_title?: string;
    og_description?: string;
    twitter_description?: string;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: seo?.title,
    description: seo?.description,
    openGraph: {
      title: seo?.og_title || seo?.title,
      description: seo?.og_description || seo?.description,
      images: [
        seo?.og_image || "",
        seo?.twitter_image || "",
        ...previousImages,
      ],
    },
  };
};
