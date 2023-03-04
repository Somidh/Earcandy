import { playfair_display } from "@/public/assets/fonts/font";
import Image from "next/image";
import { FC, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

type SidebarProps = {
  name: string;
  count: string;
  img: string;
  bgColor: string;
};

const Sidebar: FC<SidebarProps> = ({ name, count, img, bgColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover:bg-[#95BDA4]/40 hover:shadow-xl flex items-center justify-between px-5 py-2 rounded-xl cursor-pointer transition duration-500 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2">
        <div style={{backgroundColor: bgColor}} className={` w-14 h-14 flex items-center justify-center rounded-[10px] shadow-2xl`}>
          <Image
            width={40}
            height={40}
            src={img}
            alt="type_img"
          />
        </div>
        <div className={`text-base  ${playfair_display.className}`}>
          <h1 className="font-bold">{name}</h1>
          <p className="text-slate-600">{count}</p>
        </div>
      </div>
      {isHovered && (
        <div className="text-2xl text-white bg-black px-[7px] py-[6px] rounded-lg">
          <AiOutlineRight />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
