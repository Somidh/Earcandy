import type { FC } from "react";
import { useEffect } from "react";

import Card from "@/components/feeds/Card";
import Tabs from "@/components/utils/Tabs";
import Tab from "@/components/utils/Tabs/Tab";
import FeedLayout from "@/layouts/FeedLayout";
import getExplorableContent from "@/lib/getExplorableContents";
import { noto_serif } from "@/public/assets/fonts/font";
import supabase from "@/server/supabase";
import useStore from "@/store/store";
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
  const { userProfile } = useStore((state) => {
    return {
      userProfile: state.userProfile,
    };
  });

  const tData: TCard[] = [
    {
      duration: "17mins",
      genre: "fantacy",
      title: "Percy Jackson",
      user: "Aadarsh Thakur",
      contentId: "99",
      image:
        "https://pvvbzesrxmiuksjjhqac.supabase.co/storage/v1/object/public/images/91RQ5d-eIqL.jpg",
      audioLink:
        "Percy_Jackson_l_Book_1_Chapter_1_I_(getmp3%20(mp3cut.net).mp3",
    },
  ];

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
                  {tData.map((card, i) => (
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
                  <div
                    style={{ height: "calc(100vh - 490px)" }}
                    className="flex flex-col items-center gap-4 overflow-y-scroll px-4 "
                  >
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
            <div className="mt-4  overflow-y-scroll">
              <div
                style={{ height: "calc(100vh - 20rem)" }}
                className="flex flex-col items-center gap-4 overflow-scroll px-4"
              >
                {exploreContents.map((card, i) => (
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
