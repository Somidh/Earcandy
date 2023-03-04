import type { ComponentProps, FC } from "react";

type StarIconProps = ComponentProps<"svg">;
const StarIcon: FC<StarIconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="currentColor"
      viewBox="0 0 42 42"
    >
      <path d="M19.649 1.686a1.438 1.438 0 0 1 2.702 0l1.375 3.755A21.54 21.54 0 0 0 36.56 18.275l3.752 1.374a1.437 1.437 0 0 1 0 2.702l-3.752 1.375A21.54 21.54 0 0 0 23.726 36.56l-1.376 3.75a1.437 1.437 0 0 1-2.702 0l-1.374-3.752A21.54 21.54 0 0 0 5.44 23.727L1.686 22.35a1.438 1.438 0 0 1 0-2.702l3.755-1.375A21.54 21.54 0 0 0 18.275 5.441l1.374-3.755Z" />{" "}
    </svg>
  );
};

export default StarIcon;
