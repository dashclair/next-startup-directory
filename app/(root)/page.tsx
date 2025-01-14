import SearchForm from "../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query as string
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
    </>
  );
}
