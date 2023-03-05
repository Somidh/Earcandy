/* eslint-disable react-hooks/exhaustive-deps */
import addToFavourites from "@/lib/addToFavourites";
import useStore from "@/store/store";
import playAudio from "@/lib/playAudio";
import { open_sans } from "@/public/assets/fonts/font";
import type { TCard } from "@/types/TCard";
import {
  EllipsisVerticalIcon,
  HeartIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/20/solid";
import type { FC } from "react";
import ClockIcon from "../icons/ClockIcon";

type CardProps = TCard;
const Card: FC<CardProps> = ({ duration, genre, title, user, audioLink }) => {
  const { audioService } = useStore((state) => {
    return {
      audioService: state.audioService,
    };
  });
  function play() {
    if (audioService.currentAudio !== audioLink) {
      audioService.setAudio = audioLink;
      audioService.isPlaying = false;
    }
    if (!audioService.isPlaying) {
      audioService.isPlaying = true;
      audioService.play();
    }
  }

  function pause() {
    if (audioService.isPlaying) {
      audioService.isPlaying = false;
      audioService.pause();
    }
  }

  return (
    <div className="relative flex w-full max-w-2xl gap-2 overflow-hidden rounded-xl bg-accent">
      {/* 3-dot */}
      <div className="absolute right-2 top-4">
        <EllipsisVerticalIcon className="h-6 w-6" />
      </div>
      {/* action buttons */}
      <div className="absolute right-4 bottom-3 flex items-center gap-2">
        {/* todo: add funcnalities */}
        {/* love */}
        <button
          onClick={() => addToFavourites({ contentId: "", likedBy: user })}
          className="rounded-full bg-btn p-2.5 text-white outline-none"
        >
          <HeartIcon className="h-7 w-7" />
        </button>
        {/* playAudio */}
        <button
          onClick={() => {
            audioService.isPlaying ? pause() : play();
          }}
          className="rounded-full bg-btn p-3 text-white outline-none"
        >
          {audioService.isPlaying ? (
            <PauseIcon className="h-6 w-6 " />
          ) : (
            <PlayIcon className="h-6 w-6 translate-x-[2px]" />
          )}
        </button>
      </div>

      {/* image */}
      <div className="min-h-full w-32 bg-slate-600 "></div>
      {/* info */}
      <div className="max-w-sm space-y-2 p-4">
        <div className="-space-y-1">
          {/* genre */}
          <div className="text-xss text-[#000000]/60 capitalize">{genre}</div>
          {/* title */}
          <div className={`text-2xl text-[#000000]/70 font-semibold  ${open_sans.className}`}>{title}</div>
        </div>
        {/* user */}
        <div className={`text-sm text-[#000000]/70 capitalize ${open_sans.className} `}>By {user}</div>
        {/* duration */}
        <div className={`flex items-center gap-1 text-xs text-[#000000]/70 capitalize  ${open_sans.className} `}>
          <ClockIcon className=" h-5 w-5" />
          {duration}
        </div>
      </div>
    </div>
  );
};

export default Card;
