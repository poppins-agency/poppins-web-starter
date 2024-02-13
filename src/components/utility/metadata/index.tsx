import React from "react";
import Head from "next/head";

export default interface MetaTagType {
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
}
interface MetaTagsProps {
  metaTags?: MetaTagType;
}

const defaultConfig = {
  title: "Insert title here",
  plugin: "Insert plugin here",
  og_image: "Insert image url here",
  og_title: "Insert title here",
  description: "Insert description here",
  twitter_image: "Insert image url here ",
  twitter_title: "Insert title here",
  og_description: "Insert description here",
  twitter_description: "Insert description here",
};

export function MetaTags({ metaTags }: MetaTagsProps) {
  return (
    <Head>
      <title>{metaTags?.title || defaultConfig.title}</title>
      <meta
        name="description"
        content={metaTags?.description || defaultConfig.description}
      />
      <meta name="author" content={"House Of Poppins"}></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta
        name="twitter:title"
        content={metaTags?.twitter_title || defaultConfig.twitter_title}
      ></meta>
      <meta
        name="twitter:description"
        content={
          metaTags?.twitter_description || defaultConfig.twitter_description
        }
      ></meta>
      <meta
        name="twitter:image"
        content={metaTags?.twitter_image || defaultConfig.twitter_image}
      ></meta>

      <meta
        property="og:image"
        content={metaTags?.og_image || defaultConfig.og_image}
      ></meta>
      <meta
        property="og:title"
        content={metaTags?.og_title || defaultConfig.og_title}
      ></meta>
      <meta
        property="og:description"
        content={metaTags?.og_description || defaultConfig.og_description}
      />
      {/* <meta property="article:publisher" content=""></meta>
      <meta property="article:author" content=""></meta> */}
    </Head>
  );
}
