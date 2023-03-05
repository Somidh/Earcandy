import Link from "next/link";
import type { FC } from "react";

type Props = {
  post: any;
};
const BookCard: FC<Props> = ({ post }) => {
  return (
    <div className="w-[13rem] overflow-hidden rounded-lg bg-[#C6DBCE]">
      {/* replaced with image */}
      <img
        src={`https://pvvbzesrxmiuksjjhqac.supabase.co/storage/v1/object/public/images/${post.cover}`}
        alt={post.title}
      />
      <div className="h-[8rem] w-[13rem] bg-[#303933]"></div>
      <div className="flex flex-col gap-3 p-3">
        <h3 className="text-center font-medium text-[#303933]">
          {post?.title}
        </h3>
        <Link
          className="self-end rounded-full bg-[#303933] px-3 py-1 text-white"
          href="/"
        >
          5 Parts{" "}
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
