/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { FC, ReactElement } from "react";
import { Children, useState } from "react";
import Tab from "./Tab";

type TabsProps = {
  children?: ReactElement[];
};

const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const arrayChildren = Children.toArray(children) as ReactElement[];
  const activeTabContent = arrayChildren[activeTabIndex]?.props?.children;
  return (
    <>
      <ul className="flex min-w-full flex-none justify-evenly space-x-6 overflow-auto border-b-2 border-b-slate-300 pb-px ">
        {arrayChildren.map((child: ReactElement, i: number) => (
          <li
            key={i}
            onClick={() => setActiveTabIndex(i)}
            className="z-10 cursor-pointer"
          >
            <Tab
              title={child?.props?.title ?? "Tab Title"}
              isActive={i === activeTabIndex}
            />
          </li>
        ))}
      </ul>
      {activeTabContent}
    </>
  );
};

export default Tabs;
