import createUser from "@/server/lib/createUser";
import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import { FC, ReactNode, useEffect } from "react";
import supabase from "../supabase";

type TAppWrapper = {
  children: ReactNode;
};

const AppWrapper: FC<TAppWrapper> = ({ children }) => {
  const { user, isLoading } = useUser();

  const handleUserExists = async () => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", user?.email);
    if (error) console.log("user doesnt exist");
    if (data?.[0]?.email) {
      console.log("user already exits");
      console.log(data?.[0]);
      return;
    } else {
      const newUser = await createUser(user as UserProfile);
      console.log(newUser, "newuser");
    }
  };

  useEffect(() => {
    if (user?.email) handleUserExists();
  }, [user?.email]);
  return <>{children}</>;
};

export default AppWrapper;
