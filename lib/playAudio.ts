import type { TCard } from "@/types/TCard";

export default function playAudio({
  audioLink,
}: {
  audioLink: TCard["audioLink"];
}) {
  const audio = new Audio(audioLink);
  audio.play();
}
