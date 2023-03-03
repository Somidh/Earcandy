import { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="flex items-center justify-between py-10">
      <h1 className="text-[32px] font-bold">Earcandy</h1>

      <ul className="flex items-center gap-16 text-xl font-bold">
        <li>Discover</li>
        <li>Trending</li>
        <li>Authors</li>
        <li>Contact</li>
      </ul>

      <button className="text-[18px] text-white bg-black rounded-full py-[11px] px-16 font-bold">
        Login
      </button>
    </div>
  );
};

export default Navbar;
