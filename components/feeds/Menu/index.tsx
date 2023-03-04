import type { TMenuItem } from "@/types/TMenuItem";
import type { FC } from "react";
import MenuItem from "./MenuItem";

type MenuProps = {
  menuItemList: TMenuItem[];
};

const Menu: FC<MenuProps> = ({ menuItemList }) => {
  return (
    <div className="rounded-card flex flex-col gap-1">
      {menuItemList.map((item, i) => (
        <MenuItem key={item.title + `${i}`} {...item} />
      ))}
    </div>
  );
};

export default Menu;
