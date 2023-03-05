/* eslint-disable react-hooks/exhaustive-deps */
import addToFavourites from "@/lib/addToFavourites";
import { open_sans } from "@/public/assets/fonts/font";
import useStore from "@/store/store";
import type { TCard } from "@/types/TCard";
import {
  EllipsisVerticalIcon,
  HeartIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/20/solid";
import type { FC } from "react";
import { useState } from "react";
import ClockIcon from "../icons/ClockIcon";

type CardProps = TCard;
const Card: FC<CardProps> = ({ duration, genre, title, user, audioLink }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

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
      setIsPlaying(true);
      audioService.isPlaying = true;
      audioService.play();
    }
  }

  function pause() {
    if (audioService.isPlaying) {
      setIsPlaying(false);
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
          onClick={() => {
            addToFavourites({ contentId: "", likedBy: user });
            setIsLiked((prev) => !prev);
          }}
          className="rounded-full bg-btn p-2.5 text-white outline-none"
        >
          {isLiked ? (
            <HeartIcon className="h-7 w-7" fill="#2D97FA" />
          ) : (
            <HeartIcon className="h-7 w-7" />
          )}
        </button>
        {/* playAudio */}
        <button
          onClick={() => {
            audioService.isPlaying ? pause() : play();
          }}
          className="rounded-full bg-btn p-3 text-white outline-none"
        >
          {isPlaying ? (
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
          <div className="text-xss capitalize text-[#000000]/60">{genre}</div>
          {/* title */}
          <div
            className={`text-2xl font-semibold text-[#000000]/70  ${open_sans.className}`}
          >
            {title}
          </div>
        </div>
        {/* user */}
        <div
          className={`text-sm capitalize text-[#000000]/70 ${open_sans.className} `}
        >
          By {user}
        </div>
        {/* duration */}
        <div
          className={`flex items-center gap-1 text-xs capitalize text-[#000000]/70  ${open_sans.className} `}
        >
          <ClockIcon className=" h-5 w-5" />
          {duration}
        </div>
      </div>
    </div>
  );
};

export default Card;
