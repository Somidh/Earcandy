import AddBookModal from "@/components/AddBookModal";
import BookContainer from "@/components/BookContainer";
import FollowersModal from "@/components/FollowersModal";
import supabase from "@/server/supabase";
import useStore from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {};

function UserPage({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFollwerList, setIsOpenFollwerList] = useState<boolean>(false);
  const [followed, setFollowed] = useState<boolean>(false);
  const [myFollowing, setMyFollowing] = useState<any>([]);
  const [myFollowers, setMyFollowers] = useState<any>([]);

  const { query } = useRouter();
  const { userId } = query;

  const { userProfile } = useStore((state: any) => {
    return {
      userProfile: state.userProfile,
    };
  });

  const checkFollowed = async () => {
    const { data, error } = await supabase
      .from("follow")
      .select("*")
      .match({ user_id: userId, followed_by: userProfile.id });

    if (data) setFollowed(true);
    else console.log(error, "erorjeojo");
  };

  const getFollowing = async () => {
    const { data, error } = await supabase
      .from("follow")
      .select("users(*)")
      .eq("followed_by", userProfile.id);

    setMyFollowing(data);

    if (error) console.log(error, "error from getfollwoing");
  };

  const getFollowers = async () => {
    const { data, error } = await supabase
      .from("follow")
      .select("users(*)")
      .eq("user_id", userProfile.id);

    setMyFollowers(data);

    if (error) console.log(error, "error from getfollwoing");
  };

  useEffect(() => {
    if (userProfile.id) {
      getFollowing();
      getFollowers();
      checkFollowed();
    }
  }, [userProfile.id]);

  const handleFollow = async () => {
    if (followed) return;
    const { data, error } = await supabase
      .from("follow")
      .insert([{ user_id: userId, followed_by: userProfile.id }]);

    if (error) console.log(error, "ahdnelfollwo error");
    else setFollowed((prev) => !prev);
  };

  return (
    // remove margin top later
    <main className="mx-auto mt-[3rem] max-w-6xl">
      <AddBookModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <FollowersModal
        isOpenFollowerlist={isOpenFollwerList}
        setIsOpenFollowerlist={setIsOpenFollwerList}
        myFollowing={myFollowing}
        myFollowers={myFollowers}
      />
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <img
            className="h-10 w-10 rounded-lg"
            src="https://randomuser.me/api/portraits/thumb/women/75.jpg"
            alt=""
          />
          <div>
            <div className="flex items-center gap-6 font-semibold text-[#303933]">
              <p>Crazy girl</p>
              <button
                onClick={handleFollow}
                className="rounded-full bg-[#303933] px-2 py-[.1rem] text-sm text-white"
              >
                {followed ? "following" : "follow"}
              </button>
            </div>
            <p className="text-sm text-[#303933]/80">
              20, Frontend Developer | Open Source
            </p>
          </div>
        </div>
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
