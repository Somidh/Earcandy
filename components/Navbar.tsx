import { useRouter } from "next/router";
import type { FC } from "react";

type NavbarProps = {};

const Navbar: FC<NavbarProps> = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/api/auth/login");
  };

  return (
    <div className="bg-red-500 p-4 px-12">
      <button onClick={handleLogin} className="bg-blue-400 p-2">
        Login
      </button>
    </div>
  );
};

export default Navbar;
