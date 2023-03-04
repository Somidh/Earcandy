import clsx from "clsx";
import type { FC, ReactNode } from "react";

type TabProps = {
  title: string;
  isActive?: boolean;
  children?: ReactNode;
};

const Tab: FC<TabProps> = ({ title, children, isActive }) => {
  return (
    <>
      <h2
        className={clsx(
          "-mb-px flex max-w-max whitespace-nowrap border-b-4 pt-3 pb-2.5 text-xl font-semibold leading-6",
          isActive
            ? "border-slate-800 text-slate-800"
            : "border-transparent text-slate-600 hover:text-skin-base"
        )}
      >
        {title}
      </h2>
      {children ? <div>{children}</div> : null}
    </>
  );
};

export default Tab;
