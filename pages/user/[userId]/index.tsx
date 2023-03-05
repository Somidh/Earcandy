import AddBookModal from "@/components/AddBookModal";
import BookContainer from "@/components/BookContainer";
import FollowersModal from "@/components/FollowersModal";
import UserProfile from "@/components/UserProfile";
import getUserById from "@/server/lib/getUserById";
import supabase from "@/server/supabase";
import useStore from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {};

function UserPage({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFollwerList, setIsOpenFollwerList] = useState<boolean>(false);
  const [userById, setUserById] = useState<any>();
  const router = useRouter();
  const { userId } = router.query;
  const [followed, setFollowed] = useState<boolean>(false);
  const [myFollowing, setMyFollowing] = useState<any>([]);
  const [myFollowers, setMyFollowers] = useState<any>([]);
  const [myPosts, setMyPosts] = useState<any>([]);
  const [isOwnProfile, setIsOwnProfile] = useState(false);

  const { userProfile } = useStore((state: any) => {
    return {
      userProfile: state.userProfile,
    };
  });

  console.log(myPosts);

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

  const getMyPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("posted_by", userId);

    setMyPosts(data);
    console.log(data, "my posts");

    if (error) console.log(error, "error from getMyposts");
  };

  useEffect(() => {
    if (userProfile.id) {
      getFollowing();
      getFollowers();
      checkFollowed();
      getMyPosts();
    }
    if (!userId) return;
    (async () => {
      setUserById(await getUserById(userId));
    })();
  }, [userProfile.id]);

  useEffect(() => {
    const { userId } = router.query;
    if (userId === userProfile.id) setIsOwnProfile(true);
  }, [userProfile.id]);

  const handleFollow = async () => {
    if (followed) return;
    const { data, error } = await supabase
      .from("follow")
      .insert([{ user_id: userId, followed_by: userProfile.id }]);

    if (error) console.log(error, "ahdnelfollwo error");
    setFollowed(true);
  };

  return (
    // remove margin top later
    <main
      style={{ height: "calc(100vh - 160px)" }}
      className="mx-auto mt-[3rem] max-w-6xl"
    >
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
            src={userById && userById[0].user_image}
            alt=""
          />
          <UserProfile
            handleFollow={handleFollow}
            userProfile={userProfile}
            userById={userById}
            followed={followed}
          />
        </div>
        <div className="flex gap-4">
          <button
            className="text-[#303933]"
            onClick={() => setIsOpenFollwerList(true)}
          >
            <span className="mx-1 font-semibold">{myFollowers?.length}</span>
            Followers
          </button>
          <button
            className="text-[#303933]"
            onClick={() => setIsOpenFollwerList(true)}
          >
            <span className="mx-1 font-semibold">{myFollowing?.length}</span>
            Following
          </button>
        </div>
      </div>

      <div className="my-5 flex justify-between font-medium">
        <div className="flex gap-4 text-[#303933]">
          <Link href="/">5 posts</Link>
          <Link href={`/user/${userProfile.id}/likes`}>8 Liked post</Link>
        </div>
        {isOwnProfile && (
          <button
            className="rounded-full bg-[#303933] px-4 py-1 text-white"
            onClick={() => setIsOpen(true)}
          >
            + Add
          </button>
        )}
      </div>
      <BookContainer myPosts={myPosts} />
    </main>
  );
}

export default UserPage;
