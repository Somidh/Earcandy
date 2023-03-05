import { playfair_display } from "@/public/assets/fonts/font";
import type { FC } from "react";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

type EarCandyProps = {};

const EarCandy: FC<EarCandyProps> = () => {
  return (
    <div
      className={`rounded-card-accent flex w-72 items-center justify-between  ${playfair_display.className}`}
    >
      <Link href={'/'} className={` text-2xl font-bold`}>Earcandy</Link>

      <Link href={"https://github.com/Somidh/Earcandy"} target="_blank">
        <BsGithub className="text-2xl text-btn" />
      </Link>
    </div>
  );
};

export default EarCandy;
