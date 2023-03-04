import type { ComponentProps, FC } from "react";

type ClockIconProps = ComponentProps<"svg">;
const ClockIcon: FC<ClockIconProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.167 6.667h1.666v5H9.167v-5Zm.833 10a5.829 5.829 0 0 1-5.833-5.834A5.83 5.83 0 0 1 10 5a5.829 5.829 0 0 1 5.833 5.833 5.08 5.08 0 0 1 1.667.292v-.292a7.47 7.47 0 0 0-1.642-4.675l1.184-1.183A12.03 12.03 0 0 0 15.867 3.8L14.683 5A7.386 7.386 0 0 0 10 3.333a7.5 7.5 0 0 0 0 15c.492 0 .967-.05 1.425-.141a4.886 4.886 0 0 1-.525-1.6c-.3.041-.592.075-.9.075ZM12.5.833h-5V2.5h5V.833Zm1.25 12.917v4.167h4.167V13.75H13.75Z" />
    </svg>
  );
};

export default ClockIcon;
