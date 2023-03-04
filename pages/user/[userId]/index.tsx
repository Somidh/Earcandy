import AddBookModal from "@/components/AddBookModal";
import BookContainer from "@/components/BookContainer";
import FollowersModal from "@/components/FollowersModal";
import UserCard from "@/components/UserCard";
import Link from "next/link";
import { useState } from "react";

type Props = {};

function UserPage({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFollwerList, setIsOpenFollwerList] = useState<boolean>(false);

  console.log(isOpen);

  return (
    // remove margin top later
    <main className="mx-auto mt-[3rem] max-w-6xl">
      <AddBookModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <FollowersModal
        isOpenFollowerlist={isOpenFollwerList}
        setIsOpenFollowerlist={setIsOpenFollwerList}
      />
      <div className="flex justify-between">
        <UserCard />
        <div className="flex gap-4">
          <button
            className="text-[#303933]"
            onClick={() => setIsOpenFollwerList(true)}
          >
            <span className="mx-1 font-semibold">12K</span>
            Followers
          </button>
          <button
            className="text-[#303933]"
            onClick={() => setIsOpenFollwerList(true)}
          >
            <span className="mx-1 font-semibold">12</span> Following
          </button>
        </div>
      </div>

      <div className="my-5 flex justify-between font-medium">
        <div className="flex gap-4 text-[#303933]">
          <Link href="/">5 posts</Link>
          <Link href="/">8 Liked post</Link>
        </div>
        <button
          className="rounded-full bg-[#303933] px-4 py-1 text-white"
          onClick={() => setIsOpen(true)}
        >
          + Add
        </button>
      </div>
      <BookContainer />
    </main>
  );
}

export default UserPage;
