import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";

import { formatDate } from "@/libs/formatDate";

import markdownit from "markdown-it";

const md = markdownit();

const StartupDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
  const parsedContent = md.render(post?.pitch || "");

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
      <section className="mx-auto py-10 px-6">
        <Image src={post.image} alt="image"className="mx-auto" width={1000} height={500}/>
        <div className="flex max-w-4xl font-sans justify-between mx-auto items-center">
          <div className="flex gap-5 items-center">
            <Link href={`/user/${post.author?._id}`}>
              <img
                src={post.author?.image as string}
                alt="placeholder"
                width={64}
                height={64}
                className="rounded-[70px]"
              />
            </Link>
            <div>
              <p className="text-[20px] font-sans font-bold">
                {post.author.name}
              </p>
              <p className="text-[16px] font-sans font-bold">
                {post.author.username}
              </p>
            </div>
          </div>
          <p className="bg-primary-100 rounded-[70px] px-3 py-1">
            {post.category}
          </p>
        </div>
        <div className="mx-auto max-w-4xl font-sans my-12">
          {parsedContent ? (
            <article
              className="max-w-4xl text-cennter prose break-all font-sans"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className=" font-sans">No result</p>
          )}
        </div>
        <hr className="divider"></hr>
      </section>
    </>
  );
};

export default StartupDetailsPage;
