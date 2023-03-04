import UserCard from "./FollowerUserCard";
import FollowingUserCard from "./FollowingUserCard";

type Props = {
  myFollowing: any;
};

const FollowingContainer = ({ myFollowing }: Props) => {
  console.log(myFollowing, "myfollowing");

  return (
    <div className="flex h-[25rem] flex-col gap-8 overflow-y-scroll">
      {myFollowing.map((following: any, i: number) => (
        <FollowingUserCard key={i} following={following} />
      ))}
    </div>
  );
};

export default FollowingContainer;
