import FollowerUserCard from "./FollowerUserCard";

type Props = {
  myFollowers: any;
};

const FollowersContainer = ({ myFollowers }: Props) => {
  console.log(myFollowers, "myfollowers");

  return (
    <div className="flex h-[25rem] flex-col gap-8 overflow-y-scroll">
      {myFollowers.map((follower: any, i: number) => (
        <FollowerUserCard key={i} follower={follower} />
      ))}
    </div>
  );
};

export default FollowersContainer;
