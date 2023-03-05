import { open_sans } from "@/public/assets/fonts/font";
import supabase from "@/server/supabase";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

type CreatorsProps = {
  // creatorList: TUser[];
};

const Creators: FC<CreatorsProps> = ({}) => {
  const [creatorList, setCreatorList] = useState<any>([]);

  const getCreators = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("username, id, user_image");

    if (data) {
      console.log(data);
      setCreatorList(data);
    }

    if (error) console.log(error, "error in getCreators");
  };

  useEffect(() => {
    getCreators();
  }, []);

  return (
    <div className="">
      <h2
        className={`mb-4 px-2 font-noto text-2xl font-semibold text-[#27312B]`}
      >
        Authors
      </h2>
      <div className="flex flex-col gap-2">
        {creatorList?.map((creator: any) => (
          <>
            <Creator
              username={creator?.username}
              id={creator?.id}
              user_image={creator?.user_image}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Creators;

function Creator({ username, id, user_image }: any) {
  return (
    <div className="min-w-[16rem]">
      <Link
        href={`/user/${id}`}
        className="rounded-card-accent flex items-center gap-x-4"
      >
        {/* profile */}
        <img
          src={user_image}
          alt="user image"
          className="h-10 w-10 rounded-full"
        />
        {/* user */}
        <h3 className={`font-semibold text-[#27312B]  ${open_sans.className}`}>
          {username}
        </h3>
      </Link>
    </div>
  );
}
