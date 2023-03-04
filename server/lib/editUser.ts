import { IUser } from "@/types/TUser";
import supabase from "../supabase";

export default async function editUser(user: IUser, userBio: string) {
  if (!user) return;

  const { data, error } = await supabase
    .from("users")
    .update({ bio: userBio })
    .eq("email", user.email);

  if (!error) return data;
  else console.log("error inserting", error);
}
