import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import { playfair_display, noto_serif } from "@/public/assets/fonts/font";

const Navbar: FC = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  const navList = [
    {
      url: "/",
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
    <div className="flex items-center justify-between py-10">
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
    
      <button 
         onClick={handleLogin}
         className={`text-[18px] text-white bg-btn rounded-full py-[11px] px-16 font-bold ${noto_serif.className}`}>
         login
      </button>
    </div>
  );
};

export default Navbar;
