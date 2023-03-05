import { FC, useEffect } from "react";

import Card from "@/components/feeds/Card";
import Tabs from "@/components/utils/Tabs";
import Tab from "@/components/utils/Tabs/Tab";
import FeedLayout from "@/layouts/FeedLayout";
import getExplorableContent from "@/lib/getExplorableContents";
import { noto_serif } from "@/public/assets/fonts/font";
import type { TCard } from "@/types/TCard";
import type { TMenuItem } from "@/types/TMenuItem";
import type { TUser } from "@/types/TUser";
import type { GetStaticProps } from "next";
import supabase from "@/server/supabase";
import useStore from "@/store/store";

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

  const { userProfile } = useStore((state) => {
    return {
      userProfile: state.userProfile,
    };
  });

  const getFollowingPosts = async () => {
    const { data, error } = await supabase
      .from("follow")
      .select("users(id), posts(*)")
      .eq("posts.posted_by", "users.id");

    if (data) {
      console.log(data, "my following posts data");
    }

    if (error) console.log(error, "error in get my follwing posts");
  };

  useEffect(() => {
    if (userProfile.id) {
      getFollowingPosts();
    }
  }, []);

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
                <h1 className={`title ${noto_serif.className}`}>Trending</h1>
                {/* slider */}
                <div className="">
                  {/* trendingContents */}
                  {trendingContents.map((card, i) => (
                    <Card key={card.user + `${i}`} {...card} />
                  ))}
                </div>
              </div>
              {/* will fix explore scrolling */}
              <div className="h-fit flex-auto">
                <div className="mb-8 h-[calc(100vh-21rem)] space-y-4 py-4">
                  <h1 className={`title px-4 ${noto_serif.className}`}>
                    Explore
                  </h1>
                  <div className="flex max-h-full flex-col items-center gap-4 overflow-auto px-4 ">
                    {/* exploreContents */}

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
          </Tab>
        </Tabs>
      </FeedLayout>
    </main>
  );
};

export default Explore;

export const getStaticProps: GetStaticProps<ExploreProps> = async () => {
  const exploreContents = await getExplorableContent();
  return {
    props: {
      exploreContents,
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

