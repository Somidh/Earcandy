import type { FC } from "react";
import Navbar from "../components/Navbar";
// import Sidebar from "./components/Sidebar";
import Sidebar from "@/components/Sidebar";
import { noto_serif } from "@/public/assets/fonts/font";
import Image from "next/image";
import cooking_img from "public/assets/images/cooking_book_img.png";
import headphone_img from "public/assets/images/headphone_img.png";
import reading_img from "public/assets/images/reading_img.png";
import star from "public/assets/images/star.png";
import unicorn_img from "public/assets/images/unicorn_img.png";
import { HiChevronDown } from "react-icons/hi";
import arrow from "/public/assets/images/arrow.png";
import box from "/public/assets/images/box.png";
import circle from "/public/assets/images/circle.png";
import smallstar from "/public/assets/images/small-star.png";

const Home: FC = () => {
  const booksCategories = [
    {
      name: "Audio books",
      count: "320 book",
      img: headphone_img,
      bgColor: "#8A84E2",
    },
    {
      name: "Children books",
      count: "300 book",
      img: reading_img,
      bgColor: "#f0b67f",
    },
    {
      name: "Fantasy books ",
      count: "450 book",
      img: unicorn_img,
      bgColor: "#87bba2",
    },
    {
      name: "Cooking books",
      count: "80 book",
      img: cooking_img,
      bgColor: "#acdde7",
    },
  ];

  return (
    <div style={{ height: "calc(100vh - 128px)" }}>

      <div className="relative mb-20  w-full text-center">
        <Image
          src={arrow}
          alt="arrow_img"
          className="absolute top-1/2 left-36 w-40 -translate-y-1/2"
        />
        <Image
          src={circle}
          alt="circle_img"
          className="absolute right-24 bottom-0 "
        />
        <Image
          src={star}
          alt="star_img"
          className="absolute bottom-0 left-[26em] w-8"
        />
        <Image src={star} alt="star_img" className="absolute top-0 right-80" />
        <h1 className={`text-[65px] font-bold ${noto_serif.className}`}>
          Your favorite <br /> storybook
        </h1>
      </div>

      <div className="relative flex items-start justify-between gap-20">
        <Image
          src={smallstar}
          alt="star_img"
          className="absolute -top-5 left-[3.3em]"
        />
        <Image
          src={box}
          alt="box_image"
          className="absolute -bottom-10 left-44"
        />
        <div className="flex flex-col items-start gap-7">
          <div className="flex cursor-pointer items-center gap-3">
            <h1 className={`text-3xl font-bold ${noto_serif.className}`}>
              Genre
            </h1>
            <HiChevronDown className="text-3xl" />
          </div>
          <div className="flex h-96 w-80 flex-col gap-5">
            {booksCategories.map((category, idx) => {
              const { name, count, img, bgColor } = category;
              return (
                <Sidebar
                  key={idx}
                  name={name}
                  count={count}
                  img={img.src}
                  bgColor={bgColor}
                />
              );
            })}
          </div>
        </div>

        <div className="  h-80 w-80 rounded-[40px] border-2 border-[#95BDA4] p-2">
          <div className="h-full w-full rounded-[40px] bg-[#95BDA4]/40"></div>
        </div>

        <div className="flex flex-col items-start gap-7">
          <div className="flex cursor-pointer items-center gap-3">
            <h1 className={`text-3xl font-bold ${noto_serif.className}`}>
              Trending
            </h1>
            <HiChevronDown className="text-3xl" />
          </div>
          <div className="flex h-96 w-80 flex-col gap-5">
            {booksCategories.map((category, idx) => {
              const { name, count, img, bgColor } = category;

              return (
                <Sidebar
                  key={idx}
                  name={name}
                  count={count}
                  img={img.src}
                  bgColor={bgColor}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
