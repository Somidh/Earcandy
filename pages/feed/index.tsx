import type { FC } from "react";

import Card from "@/components/feeds/Card";
import Tabs from "@/components/utils/Tabs";
import Tab from "@/components/utils/Tabs/Tab";
import FeedLayout from "@/layouts/FeedLayout";
import type { TCard } from "@/types/TCard";
import type { TMenuItem } from "@/types/TMenuItem";
import type { TUser } from "@/types/TUser";
import type { GetStaticProps } from "next";

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
                <h1 className="title">Trending</h1>
                {/* slider */}
                <div className="">
                  {trendingContents.map((card, i) => (
                    <Card key={card.user + `${i}`} {...card} />
                  ))}
                </div>
              </div>
              {/* will fix explore scrolling */}
              <div className="h-fit flex-auto">
                <div className="mb-8 h-[calc(100vh-21rem)] space-y-4 py-4">
                  <h1 className="title px-4">Explore</h1>
                  <div className="flex max-h-full flex-col items-center gap-4 overflow-auto px-4">
                    {exploreContents.map((card, i) => (
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
            <div className="mt-4 h-[calc(100vh-4.4rem)] overflow-auto">
              <div className="flex max-h-full flex-col items-center gap-4 overflow-auto px-4">
                {followingContents.map((card, i) => (
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
      exploreContents: [
        {
          audioLink:
            "https://pvvbzesrxmiuksjjhqac.supabase.co/storage/v1/object/public/audio/file_example_MP3_1MG.mp3",
          duration: "12hours and 15mins",
          genre: "fantacy",
          title: "Mc Stantd sala",
          user: "Mc=> Madarc*od",
          contentId: "abcdefgh",
        },
        {
          audioLink:
            "https://pvvbzesrxmiuksjjhqac.supabase.co/storage/v1/object/public/audio/Baby%20Shark%20(Remix)(audiosong.in).mp3",
          duration: "12hours and 15mins",
          genre: "fantacy",
          title: "Mc Stantd sala",
          user: "Mc=> Madarc*od",
          contentId: "abcdefgh",
        },
      ],
      trendingContents: [
        {
          audioLink:
            "https://pvvbzesrxmiuksjjhqac.supabase.co/storage/v1/object/public/audio/file_example_MP3_1MG.mp3",
          duration: "12hours and 15mins",
          genre: "fantacy",
          title: "Mc Stantd sala",
          user: "Mc=> Madarc*od",
          contentId: "abcdefgh",
        },
      ],
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
