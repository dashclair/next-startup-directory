import Image from "next/image";
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";

export interface StartupCardProps {
  _createdAt?: Date;
  title: string;
  description: string;
  image?: string;
  views: number;
  _id: number;
}

const posts = [
  {
    _createdAt: new Date(),
    views: 30,
    author: { _id: 1 },
    _id: 1,
    description:
      "A mobile app that helps users track and reduce their carbo and best ins...",
    image:
      "https://img.freepik.com/premium-photo/toys-against-pink-background_1048944-22938314.jpg?w=826",
    category: "Ecology",
    title: "EcoTrack",
  },
  {
    _createdAt: new Date(),
    views: 30,
    author: { _id: 2, name: "Adrian" },
    _id: 2,
    description:
      "A mobile app that helps users track and reduce their carbo and best ins...",
    image:
      "https://img.freepik.com/premium-photo/toys-against-pink-background_1048944-22938314.jpg?w=826",
    category: "Ecology",
    title: "EcoTrack",
  },
  {
    _createdAt: new Date(),
    views: 30,
    author: { _id: 3, name: "Adrian" },
    _id: 3,
    description:
      "A mobile app that helps users track and reduce their carbo and best ins...",
    image:
      "https://img.freepik.com/premium-photo/toys-against-pink-background_1048944-22938314.jpg?w=826",
    category: "Ecology",
    title: "EcoTrack",
  },
  {
    _createdAt: new Date(),
    views: 30,
    author: { _id: 4, name: "Adrian" },
    _id: 4,
    description:
      "A mobile app that helps users track and reduce their carbo and best ins...",
    image:
      "https://img.freepik.com/premium-photo/toys-against-pink-background_1048944-22938314.jpg?w=826",
    category: "Ecology",
    title: "EcoTrack",
  },
];

export type StartupPost = (typeof posts)[number];

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query as string;

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
            posts.map((post: StartupPost) => (
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
