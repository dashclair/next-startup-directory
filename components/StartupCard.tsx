import Link from "next/link";
import { formatDate } from "@/libs/formatDate";
import Image from "next/image";
import { Author, Startup } from "@/sanity/types";

export type StartupCardType = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    _createdAt,
    title,
    views,
    category,
    image,
    description,
    _id,
    author,
  } = post;
  return (
    <li className="bg-white border-[5px] h-full border-black py-6 px-5 rounded-[22px] shadow-200 font-sans">
      <div className="flex justify-between">
        <p className="rounded-[70px] bg-primary-100 p-3">
          {formatDate(_createdAt)}
        </p>
        <p>{views} views</p>
      </div>
      <div className="flex justify-between items-center mt-5 mb-3">
        <div className="flex flex-col">
          <Link
            className="font-medium text-[16px] text-black"
            href={`/user/${author?._id}`}
          >
            <p>{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className=" font-semibold text-[26px]">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image as string}
            alt="placeholder"
            width={40}
            height={60}
            className="rounded-[70px]"
          />
        </Link>
      </div>
      <div className="my-4">
        <Link href={`/startup/${_id}`} className="font-mono">
          {description}
        </Link>
      </div>
      <img
        src={image}
        alt="placeholder"
        className=" w-full h-[164px] rounded-[10px] object-cover"
      />
      <div className="flex justify-between mt-4">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p>{category}</p>
        </Link>
        <Link
          href={`/startup/${_id}`}
          className="bg-black text-white rounded-[70px] px-5 py-2"
        >
          Details
        </Link>
      </div>
    </li>
  );
};

export default StartupCard;
