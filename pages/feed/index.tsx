import type { FC } from "react";

import Card from "@/components/feeds/Card";
import Tabs from "@/components/utils/Tabs";
import Tab from "@/components/utils/Tabs/Tab";
import FeedLayout from "@/layouts/FeedLayout";
import type { TCard } from "@/types/TCard";
import type { TMenuItem } from "@/types/TMenuItem";
import type { TUser } from "@/types/TUser";
import type { GetStaticProps } from "next";
import { noto_serif, playfair_display } from "@/public/assets/fonts/font";

type ExploreProps = {
  exploreContents: TCard[];
  trendingContents: TCard[];
  followingContents: TCard[];
  menu: TMenuItem[];
  creatorsList: Partial<TUser>[];
};

const Explore: FC<ExploreProps> = ({
  exploreContents,
  trendingContents,
  followingContents,
  menu,
  creatorsList,
}) => {
  const tContent = [
    {
      duration: "12hours and 15mins",
      genre: "fantasy",
      title: "Mc Stantd sala",
      user: "Mc Aadarsh",
      contentId: "abcdefgh",
    },
  ]
  
  const eContent = [
    {
      duration: "12hours and 15mins",
      genre: "fantasy",
      title: "Mc Stantd sala",
      user: "Mc Aadarsh",
      contentId: "abcdefgh",
    },
    {
      duration: "12hours and 15mins",
      genre: "fantasy",
      title: "Mc Stantd sala",
      user: "Mc Aadarsh",
      contentId: "abcdefgh",
    },
    {
      duration: "12hours and 15mins",
      genre: "fantasy",
      title: "Mc Stantd sala",
      user: "Mc Aadarsh",
      contentId: "abcdefgh",
    },
    {
      duration: "12hours and 15mins",
      genre: "fantasy",
      title: "Mc Stantd sala",
      user: "Mc Aadarsh",
      contentId: "abcdefgh",
    },
    {
      duration: "12hours and 15mins",
      genre: "fantasy",
      title: "Mc Stantd sala",
      user: "Mc Aadarsh",
      contentId: "abcdefgh",
    },
  ];

  return (
    <main>
      <FeedLayout
        menu={menu}
        creatorList={creatorsList as TUser[]}
        className="min-h-screen"
      >
        <Tabs>
          <Tab title="For You">
            <div className="flex-auto">
              <div className="space-y-4 p-4">
                <h1 className={`title ${noto_serif.className}`}>
                  Trending
                </h1>
                {/* slider */}
                <div className="">
                  {/* trendingContents */}
                  {tContent.map((card, i) => (
                    <Card key={card.user + `${i}`} {...card} />
                  ))}
                </div>
              </div>
              {/* will fix explore scrolling */}
              <div className="h-fit flex-auto">
                <div className=" h-full space-y-4 py-4">
                  <h1 className={`title px-4 ${noto_serif.className}`}>
                    Explore
                  </h1>
                  <div style={{height: "calc(100vh - 490px)"}} className="flex flex-col items-center gap-4 overflow-y-scroll px-4 ">
                    {/* exploreContents */}

                    {eContent.map((card, i) => (
                      <div
                        key={card.user + `${i}`}
                        className="w-full flex-shrink-0 "
                      >
                        <Card {...card} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab title="Following">
            <div  className="mt-4  overflow-y-scroll">
              <div style={{height: "calc(100vh - 20rem)"}} className="flex flex-col items-center gap-4 overflow-scroll px-4">
                {eContent.map((card, i) => (
                  <>
                    <div
                      key={card.user + `${i}`}
                      className="w-full flex-shrink-0 "
                    >
                      <Card {...card} />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </Tab>
        </Tabs>
      </FeedLayout>
    </main>
  );
};

export default Explore;

export const getStaticProps: GetStaticProps<ExploreProps> = () => {
  return {
    props: {
      exploreContents: [],
      trendingContents: [],
      followingContents: [],
      menu: [
        {
          icon: "",
          title: "Audio Book",
          totalBooks: 320,
        },
        {
          icon: "",
          title: "Audio Book",
          totalBooks: 320,
        },
        {
          icon: "",
          title: "Audio Book",
          totalBooks: 320,
        },
        {
          icon: "",
          title: "Audio Book",
          totalBooks: 320,
        },
        {
          icon: "",
          title: "Audio Book",
          totalBooks: 320,
        },
      ],
      creatorsList: [
        {
          username: "Aaadarsh805",
        },
        {
          username: "RoySomidth",
        },
        {
          username: "ManishBeast",
        },
      ],
    },
  };
};
