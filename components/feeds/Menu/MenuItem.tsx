import type { TMenuItem } from "@/types/TMenuItem";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import type { FC } from "react";

type MenuItemProps = TMenuItem;

const MenuItem: FC<MenuItemProps> = ({ icon, title, totalBooks }) => {
  function handleMenuItemClick() {
    console.log("logged on menu");
  }

  return (
    <button
      onClick={handleMenuItemClick}
      className="rounded-card group flex items-center justify-between gap-x-4 hover:bg-accent"
    >
      <div className="flex items-center gap-4">
        {/* icon */}
        <div className="h-12 w-12 rounded-2xl bg-slate-500 shadow-xl shadow-slate-800/10">
          {/* todo render icon */}
        </div>
        {/* info */}
        <div className="space-y-1 text-start text-skin-base">
          <h2 className="font-noto font-semibold">{title}</h2>
          <div className="text-xs font-medium text-skin-base/50">
            {totalBooks} books
          </div>
        </div>
      </div>
      {/* action */}
      <div className="hidden rounded-lg bg-slate-800 p-1.5 text-white group-hover:block">
        <ChevronRightIcon className="h-5 w-5" />
      </div>
    </button>
  );
};

export default MenuItem;
