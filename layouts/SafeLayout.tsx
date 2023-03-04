import clsx from "clsx";
import type { ComponentProps, FC } from "react";

type SafeLayoutProps = ComponentProps<"div">;

const SafeLayout: FC<SafeLayoutProps> = ({ className, ...props }) => {
  return (
    <section className="">
      <div className={clsx(`mx-auto max-w-7xl`, className)} {...props} />
    </section>
  );
};

export default SafeLayout;
