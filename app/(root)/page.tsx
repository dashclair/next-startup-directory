import { sanityFetch } from "@/sanity/lib/live";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupCardType } from "../../components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { auth } from "@/auth";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query as string;

  const params = { search: query || null };
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  const session = await auth();
  return (
    <>
      <section className="pink-heading">
        <h1 className="bg-secondary px-6 py-3 font-sans relative tag-tri font-bold rounded-lg uppercase">
          Pitch, Vote, and Grow
        </h1>
        <p className="heading">
          Pitch Your Startup, Connect with Entrepreneurs
        </p>
        <p className="font-mono text-white text-center">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="py-10 px-6">
        <p className="text-2xl font-sans font-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="text-lg font-mono">No posts found</p>
          )}
        </ul>
      </section>
    </>
  );
}
