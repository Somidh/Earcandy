import supabase from "../supabase";

export default async function getUserById(userId: any) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId);

  // console.log(data);

  if (!error) return data;
  else console.log("error inserting", error);
}
