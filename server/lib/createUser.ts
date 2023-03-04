import type { UserProfile } from "@auth0/nextjs-auth0/client";
import type { TUser } from "types/TUser";
import { v4 as uuidv4 } from "uuid";
import supabase from "../supabase";

export default async function createUser(user: UserProfile) {
  if (!user) return;

  const userId = uuidv4();

  const userPayload: TUser = {
    username: user.nickname as string,
    full_name: user.name as string,
    email: user.email as string,
    user_image: user.picture as string,
    id: userId,
    bio: "",
  };

  const { data, error } = await supabase
    .from("users")
    .insert([{ ...userPayload }]);

  if (!error) return userPayload;
  else console.log("error inserting", error);
}
