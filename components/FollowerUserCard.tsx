type Props = {
  follower: any;
};

const FollowerUserCard = ({ follower }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <img
        className="h-10 w-10 rounded-lg"
        src={follower?.users.user_image}
        alt="follower user image"
      />
      <div>
        <div className="flex items-center gap-6 font-semibold text-[#303933]">
          <p>{follower?.users?.full_name}</p>
          <button className="rounded-full bg-[#303933] px-2 py-[.1rem] text-sm text-white">
            Follow
          </button>
        </div>
        <p className="text-sm text-[#303933]/80">{follower?.users?.bio}</p>
      </div>
    </div>
  );
};

export default FollowerUserCard;
