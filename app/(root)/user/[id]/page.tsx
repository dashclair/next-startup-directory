import { auth } from "@/auth";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import {
  AUTHOR_BY__ID_QUERY,
  STARTUP_BY_ID_QUERY,
  STARTUP_BY_USER_ID_QUERY,
} from "@/sanity/lib/queries";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();

  console.log(session?.id)

  if (!session?.id) {
    return redirect("/");
  }

  const { id } = await params;

  const user = await client.fetch(AUTHOR_BY__ID_QUERY, { id });
  const posts = await client.fetch(STARTUP_BY_USER_ID_QUERY, { id });

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <h1 className="bg-white w-[90%] rounded-2xl border-4 border-black text-center py-2 font-sans font-bold text-[24px] absolute top-[-15px] shadow-100 after:absolute after:content-[''] after:-top-1 after:right-0 after:-skew-y-3 after:bg-black after:-z-[1] after:rounded-[20px] after:w-full after:h-[60px] before:absolute before:content-[''] before:-bottom-1 before:left-0  before:-skew-y-3 before:w-full before:h-[60px] before:bg-black  before:-z-[1] before:rounded-[20px]">
            {user.name}
          </h1>
          <Image
            alt="user-image"
            src={user.image}
            width={220}
            height={220}
            className="rounded-full border-8 border-white-100"
          />
          <h2 className="text-white text-[24px] font-extrabold font-sans pt-7 pb-3">
            @{user.username}
          </h2>
          <p className="text-white font-mono">{user?.bio}</p>
        </div>
        <ul className="grid grid-cols-3 gap-3 w-full max-md:grid-cols-2">
          {posts?.map((post) => <StartupCard post={post} />)}
        </ul>
      </section>
    </>
  );
}
