import type { TCard } from "@/types/TCard";

export default function playAudio({
  contentId,
}: {
  contentId: TCard["contentId"];
}) {
  console.log("Playing Audio", contentId);
}
