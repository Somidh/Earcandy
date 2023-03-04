import Navbar from "@/components/Navbar";
import Creators from "@/components/feeds/Creators";
import Menu from "@/components/feeds/Menu";
import EarCandy from "@/components/feeds/Menu/EarCandy";
import type { TMenuItem } from "@/types/TMenuItem";
import type { TUser } from "@/types/TUser";
import clsx from "clsx";
import type { ComponentProps, FC } from "react";
import SafeLayout from "./SafeLayout";

type FeedLayoutProps = ComponentProps<"section"> & {
  menu: TMenuItem[];
  creatorList: TUser[];
};

const FeedLayout: FC<FeedLayoutProps> = ({
  className,
  menu,
  creatorList,
  children,
  ...props
}) => {
  return (
    <section className={clsx("h-full ", className)} {...props}>
      <div className="mx-auto max-w-7xl">
        <Navbar />
      </div>
      <SafeLayout className="grid grid-cols-1 gap-2 lg:grid-cols-16">
        {/* menu */}
        <div className="flex h-screen w-80 flex-col justify-between px-2 pb-4 lg:col-span-4">
          <Menu menuItemList={menu} />
          <EarCandy />
        </div>
        {/* body */}
        <div className="flex h-full flex-shrink-0 lg:col-span-full lg:col-start-5">
          {/* explore */}
          <div className="flex-auto">{children}</div>
          {/* user suggestion */}
          <div className="mt-12 hidden w-64 p-4 lg:block">
            <Creators creatorList={creatorList} />
          </div>
        </div>
      </SafeLayout>
    </section>
  );
};

export default FeedLayout;
