import type { TUser } from "@/types/TUser";
import Link from "next/link";
import type { FC } from "react";

type CreatorsProps = {
  creatorList: TUser[];
};

const Creators: FC<CreatorsProps> = ({ creatorList }) => {
  return (
    <>
      <h2 className="mb-4 mt-6 px-2 font-noto text-2xl font-semibold">
        Authors
      </h2>
      <div className="flex flex-col gap-2">
        {creatorList.map((creator) => (
          <>
            <Creator {...creator} />
          </>
        ))}
      </div>
    </>
  );
};

export default Creators;

function Creator({ username, id }: TUser) {
  return (
    <Link
      href={`/users/${id}`}
      className="rounded-card-accent flex items-center gap-x-4"
    >
      {/* profile */}
      <div className="h-10 w-10 rounded-full bg-slate-800"></div>
      {/* user */}
      <h3 className="font-medium">{username}</h3>
    </Link>
  );
}
