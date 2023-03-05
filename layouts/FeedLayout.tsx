import Sidebar from "@/components/Sidebar";
import Creators from "@/components/feeds/Creators";
import EarCandy from "@/components/feeds/Menu/EarCandy";
import type { TMenuItem } from "@/types/TMenuItem";
import type { TUser } from "@/types/TUser";
import cooking_img from "public/assets/images/cooking_book_img.png";
import headphone_img from "public/assets/images/headphone_img.png";
import reading_img from "public/assets/images/reading_img.png";
import unicorn_img from "public/assets/images/unicorn_img.png";
import type { ComponentProps, FC } from "react";
import SafeLayout from "./SafeLayout";

type FeedLayoutProps = ComponentProps<"section"> & {
  menu: TMenuItem[];
  creatorList: TUser[];
};

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

const FeedLayout: FC<FeedLayoutProps> = ({
  className,
  menu,
  creatorList,
  children,
  ...props
}) => {
  return (
    <section className="h-[calc(100vh - 112px)]" {...props}>
      {/* <div className="mx-auto max-w-7xl"></div> */}
      <SafeLayout className="flex items-start justify-between">
        {/* menu */}
        <div
          className="flex w-80 flex-col justify-between py-8 lg:col-span-4"
          style={{ height: "calc(100vh - 112px)" }}
        >
          {/* <Menu menuItemList={menu} /> */}
          <div className="">
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
          <EarCandy />
        </div>
        {/* body */}
        <div className="w-[45em] ">{children}</div>
        {/* <div className="flex h-full flex-shrink-0 lg:col-span-full lg:col-start-5"> */}
        {/* explore */}
        {/* user suggestion */}
        {/* </div> */}
        <div className="hidden w-64 p-4 pt-8 lg:block">
          <Creators />
        </div>
      </SafeLayout>
    </section>
  );
};

export default FeedLayout;
