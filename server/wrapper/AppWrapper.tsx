import createUser from "@/server/lib/createUser";
import useStore from "@/store/store";
import { IUser } from "@/types/TUser";
import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import { FC, ReactNode, useEffect } from "react";
import supabase from "../supabase";

type TAppWrapper = {
  children: ReactNode;
};

const AppWrapper: FC<TAppWrapper> = ({ children }) => {
  const { user, isLoading } = useUser();
  const { setUserProfile } = useStore((state) => {
    return {
      setUserProfile: state.setUserProfile,
    };
  });

  const handleUserExists = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", user?.email);
    if (error) console.log("user doesnt exist");
    if (data?.[0]?.email) {
      console.log("user already exits");
      console.log(data?.[0]);
      setUserProfile(data?.[0] as IUser);
      return;
    } else {
      const newUser = await createUser(user as UserProfile);
      console.log(newUser, "newuser");
      setUserProfile(newUser as IUser);
    }
  };

  useEffect(() => {
    if (user?.email) handleUserExists();
  }, [user?.email]);
  return <>{children}</>;
};

export default AppWrapper;
