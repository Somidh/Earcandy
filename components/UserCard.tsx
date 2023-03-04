type Props = {};

const UserCard = (props: Props) => {
  return (
    <div className="flex items-center gap-4">
      <img
        className="h-10 w-10 rounded-lg"
        src="https://randomuser.me/api/portraits/thumb/women/75.jpg"
        alt=""
      />
      <div>
        <div className="flex items-center gap-6 font-semibold text-[#303933]">
          <p>Crazy girl</p>
          <button className="rounded-full bg-[#303933] px-2 py-[.1rem] text-sm text-white">
            Follow
          </button>
        </div>
        <p className="text-sm text-[#303933]/80">
          20, Frontend Developer | Open Source
        </p>
      </div>
    </div>
  );
};

export default UserCard;
