import supabase from "@/server/supabase";
import type { TCard } from "@/types/TCard";

export default async function getExplorableContent(): Promise<TCard[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("id,title,description,duration,audio,genre,cover,users(full_name)")
    .limit(10);
  if (error) {
    console.log(error);
    return [];
  }

  const audioBaseUrl = process.env.NEXT_PUBLIC_AUDIO_BASE_URL;
  if (data) {
    return data.reduce<TCard[]>((acc, curr) => {
      const card: TCard = {
        duration: String(curr.duration),
        genre: curr.genre,
        title: curr.title,
        user: (curr.users as { full_name: unknown }).full_name as string,
        contentId: curr.id,
        audioLink: `${audioBaseUrl}/${curr.audio}`,
        image: `https://pvvbzesrxmiuksjjhqac.supabase.co/storage/v1/object/public/images/${curr.cover}`,
      };
      acc.push(card);
      return acc;
    }, []);
  }
  return data;
}
