type Props = {
  following: any;
};

const FollowingUserCard = ({ following }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <img
        className="h-10 w-10 rounded-lg"
        src={following?.users?.user_image}
        alt="following user image"
      />
      <div>
        <div className="flex items-center gap-6 font-semibold text-[#303933]">
          <p>{following?.users?.full_name}</p>
          <button className="rounded-full bg-[#303933] px-2 py-[.1rem] text-sm text-white">
            Follow
          </button>
        </div>
        <p className="text-sm text-[#303933]/80">{following?.users?.bio}</p>
      </div>
    </div>
  );
};

export default FollowingUserCard;
