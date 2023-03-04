import { open_sans } from "@/public/assets/fonts/font";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { TUser } from "@/types/TUser";
import useStore from "@/store/store";

const NavbarButton: FC = () => {

    const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
        router.push("/api/auth/logout");
  }
  const { userProfile } = useStore((state) => {
    return {
      userProfile: state.userProfile,
    };
  });
  const user = true;

  return (
    <div>
      {user ? (
        // <Link href={`/user/${userProfile.id}}`}>
          <button onClick={handleClick} className="flex items-center gap-5">
            <img
              className="h-10 w-10 rounded-full"
              src={userProfile.user_image ? userProfile.user_image : ""}
              alt=""
            />
            <span
              id="basic-button"
              className={`rounded-md bg-btn px-8 py-2 font-bold uppercase text-[#F4F1E7] ${open_sans.className}`}
            >
              Somidh roy
            </span>
          </button>
        // </Link>
      ) : (
        <Link href={"/login"}>
          <button
            className={`rounded-md bg-btn px-8 py-2 font-bold uppercase text-[#F4F1E7] ${open_sans.className}`}
          >
            Login
          </button>
        </Link>
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className={` mt-4  ${open_sans.className}`}
      >
        <MenuItem onClick={handleClose}>
          <Link
            href={`/user/${userProfile.id}}`}
            className={` flex items-center gap-2 font-semibold ${open_sans.className}`}
          >
            <FaUserCircle />
            My account
          </Link>{" "}
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className={` flex items-center gap-2 font-semibold ${open_sans.className}`}
        >
          <button
          onClick={handleSignOut}
            type="button"
            className="flex h-full w-full items-center gap-2 border-none outline-none"
          >
            <FiLogOut />
            Logout
          </button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavbarButton;
