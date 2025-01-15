import Link from "next/link";
import { StartupCardProps, StartupPost } from "../(root)/page";
import { formatDate } from "@/libs/formatDate";
import Image from "next/image";

const StartupCard = ({ post }: { post: StartupPost }) => {
  const {
    _createdAt,
    author: { _id: authorId, name },
    title,
    views,
    category,
    image,
    description,
    _id,
  } = post;
  return (
    <li className="bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 font-sans">
      <div className="flex justify-between">
        <p className="rounded-[70px] bg-primary-100 p-3">
          {formatDate(_createdAt.toDateString())}
        </p>
        <p>{views} views</p>
      </div>
      <div className="flex justify-between items-center mt-5 mb-3">
        <div className="flex flex-col">
          <Link className="font-medium text-[16px] text-black" href={`/user/${authorId}`}>
            <p>{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className=" font-semibold text-[26px]">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placeholder.co/600×400"
            alt="placeholder"
            width={40}
            height={60}
            className="rounded-[70px]"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`} className="font-mono mb-4">
        {description}
      </Link>
      <img
        src={image}
        alt="placeholder"
        className=" w-full h-[164px] rounded-[10px] object-cover"
      />
      <div className="flex justify-between mt-6">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p>level</p>
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
