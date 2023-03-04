import editUser from "@/server/lib/editUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiCheck } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

type Props = {
  userProfile: any;
  userById: any;
};

const UserProfile = ({ userProfile, userById }: Props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [userId, setUserId] = useState<any>();
  const [isOwnProfile, setIsOwnProfile] = useState(false);
  const [userBio, setUserBio] = useState<string>(
    userById && userById[0].bio ? userById[0].bio : "Edit Your Bio"
  );

  console.log(userById);

  const editProfile = async (e: any) => {
    e.preventDefault();

    await editUser(userProfile, userBio);

    setShowEditForm(false);
  };

  const router = useRouter();

  useEffect(() => {
    const { userId } = router.query;
    setUserId(userId);

    if (userId === userProfile.id) setIsOwnProfile(true);
  }, [userProfile]);

  return (
    <div>
      <div className="flex items-center gap-6 font-semibold text-[#303933]">
        <p>{userById && userById[0].full_name}</p>
        {!isOwnProfile && (
          <button className="rounded-full bg-[#303933] px-2 py-[.1rem] text-sm text-white">
            Follow
          </button>
        )}
      </div>
      {isOwnProfile && (
        <div className="flex items-center gap-2">
          {showEditForm ? (
            <form action="" onSubmit={(e) => editProfile(e)}>
              <input
                type="text"
                value={userBio}
                onChange={(e) => setUserBio(e.target.value)}
                className="border-none text-sm text-[#303933]/80 outline-0"
              />
              <button type="submit" className="text-lg">
                <BiCheck />
              </button>
              <button
                className="text-lg text-red-500"
                onClick={() => setShowEditForm(false)}
              >
                <RxCross2 />
              </button>
            </form>
          ) : (
            <>
              <p className="text-sm text-[#303933]/80">{userProfile.bio}</p>
              <button onClick={() => setShowEditForm(true)}>
                <FiEdit2 />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
