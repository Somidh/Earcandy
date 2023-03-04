import BookCard from "@/components/BookCard";
import supabase from "@/server/supabase";
import useStore from "@/store/store";
import { useEffect, useState } from "react";

const UserLikesPage = () => {
  const [myLikedPosts, setMyLikedPosts] = useState<any>([]);
  const { userProfile } = useStore((state: any) => {
    return {
      userProfile: state.userProfile,
    };
  });

  const getMyLikedPosts = async () => {
    const { data, error } = await supabase
      .from("likes")
      .select("posts(*)")
      .eq("liked_by", userProfile.id);

    if (data) setMyLikedPosts(data);
    else console.log(error, "error in my likedposts");
  };

  useEffect(() => {
    getMyLikedPosts();
  }, []);

  return (
    <div className="fle-col gap-10">
      <p className="font-noto text-lg text-skin-base">Liked Posts</p>
      <div className="flex flex-wrap gap-5">
        {myLikedPosts?.map((post: any, i: number) => (
          <BookCard key={i} post={post} />
        ))}
      </div>
      ;
    </div>
  );
};

export default UserLikesPage;
