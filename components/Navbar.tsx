import { noto_serif, playfair_display } from "@/public/assets/fonts/font";
import useStore from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import NavbarButton from "./NavbarButton";

const Navbar: FC = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  const { userProfile } = useStore((state) => {
    return {
      userProfile: state.userProfile,
    };
  });

  const navList = [
    {
      url: "/feed",
      name: "Discover",
    },
    {
      url: "/",
      name: "Trending",
    },
    {
      url: "/",
      name: "Authors",
    },
    {
      url: "/",
      name: "Contact",
    },
  ];

  return (
    <div className="flex items-center justify-between py-8 ">
      <Link
        href={"/"}
        className={`text-[32px] font-bold ${playfair_display.className}`}
      >
        Earcandy
      </Link>

      <ul className="flex items-center gap-20 ">
        {navList.map((item, idx) => (
          <Link
            key={idx}
            href={item.url}
            className={`text-xl font-bold ${noto_serif.className}`}
          >
            {item.name}
          </Link>
        ))}
      </ul>

      {<NavbarButton />}

      {/* 
      {userProfile.id ? (
        <Link href={`/user/${userProfile.id}`}>
          <img
            className="h-10 w-10 rounded-full"
            src={userProfile.user_image ? userProfile.user_image : ""}
            alt=""
          />
        </Link>
        
      ) : (
        <button
          onClick={handleLogin}
          className={`rounded-full bg-btn py-[11px] px-16 text-[18px] font-bold text-white ${noto_serif.className}`}
        >
          login
        </button>
      )} */}
    </div>
  );
};

export default Navbar;
