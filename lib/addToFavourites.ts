import type { TCard } from "@/types/TCard";

export default function addToFavourites({
  contentId,
  likedBy,
}: {
  contentId: TCard["contentId"];
  likedBy: TCard["user"];
}) {
  console.log(contentId + " Added to favourites of " + likedBy);
}
