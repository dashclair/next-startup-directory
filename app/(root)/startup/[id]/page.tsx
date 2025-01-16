import { formatDate } from "@/libs/formatDate";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

const StartupDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
  console.log(id);

  if (!post) return notFound();
  return (
    <>
      <section className="pink-heading-details">
        <h1 className="bg-secondary px-6 py-3 font-sans relative tag-tri font-bold rounded-lg uppercase">
          {formatDate(post._createdAt)}
        </h1>
        <p className="heading">{post.title}</p>
        <p className="font-mono text-white text-center">{post.description}</p>
      </section>
      <section className="py-10 px-6">
        <Image src={post.image} alt="image" width={1000} height={530}/>
        <div>
          
        </div>
        {/* <p className="text-2xl font-sans font-semibold">
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
        </ul> */}
      </section>
    </>
  );
};

export default StartupDetailsPage;
