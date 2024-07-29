import { fetchHomepageData } from "@/queries/pages/home";

export default async function Home() {
  const { data } = await fetchHomepageData();
  return (
    <div>
      <h1>Story: {data.story.name}</h1>
    </div>
  );
}
