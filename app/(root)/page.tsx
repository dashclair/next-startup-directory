import SearchForm from "../components/SearchForm";
import StartupCard, { StartupCardType } from "../components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query as string;
  const posts = await client.fetch(STARTUPS_QUERY);

  return (
    <>
      <section className="pink-heading">
        <h1 className="bg-secondary px-6 py-3 font-sans relative tag-tri font-bold rounded-lg uppercase">
          Pitch, Vote, and Grow
        </h1>
        <p className="heading">
          Pitch Your Startup, Connect with Entrepreneurs
        </p>
        <p className="font-sans text-white">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="py-10 px-6">
        <p className="text-2xl font-sans font-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p>no posts found</p>
          )}
        </ul>
      </section>
    </>
  );
}
