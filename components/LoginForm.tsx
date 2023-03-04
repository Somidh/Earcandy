import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import google_img from "public/assets/images/google_img.png";
import form_img from "public/assets/images/form_img.jpg";
import { noto_serif, open_sans } from "@/public/assets/fonts/font";
import useStore from "@/store/store";

type LoginFormProps = {};

const LoginForm: FC<LoginFormProps> = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const { setEmail, setPassword} = useStore(
    (state: any) => ({
      setEmail: state.setEmail,
      setPassword: state.setPassword,
    })
  );

  return (
    <div className="flex min-h-screen w-full flex-wrap content-center justify-center bg-gray-200 py-10">
      <div className="flex shadow-md">
        <div
          className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
          style={{ width: "34rem", height: "34rem" }}
        >
          <div className="w-72">
            <h1 className={`${noto_serif.className} text-4xl font-semibold `}>
              Welcome back!
            </h1>
            <small
              className={`  ${open_sans.className} text-xm text-[#1C1C1C]`}
            >
              Please enter your details
            </small>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
              <div className="mb-3 flex flex-col gap-2">
                <label
                  className={`  ${open_sans.className}  text-xm block font-semibold`}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`${open_sans.className}  block w-full rounded-md border border-gray-300 py-2 px-1.5 text-gray-500 focus:outline-none focus:border-none `}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label
                  className={`${open_sans.className}  text-xm mb-1 block font-semibold`}
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className={`${open_sans.className}  block w-full rounded-md border border-gray-300 py-2  px-1.5 text-gray-500 focus:outline-none focus:border-none `}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-3 flex flex-wrap content-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="mr-1 checked:bg-purple-700"
                />{" "}
                <label
                  htmlFor="remember"
                  className={` ${open_sans.className} mr-auto text-xs font-semibold`}
                >
                  Remember for 30 days
                </label>
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className={`${open_sans.className}  mb-1.5 block w-full rounded-md bg-btn px-2 py-1.5 text-center text-lg font-bold uppercase text-white`}
                >
                  Sign In
                </button>
                <button className="flex w-full flex-wrap justify-center rounded-md border border-gray-300 px-2 py-1.5 hover:border-gray-500 text-btn">
                  <Image
                    className="mr-2 w-5"
                    src={google_img}
                    alt="google_img"
                  />
                  Sign in with Google
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-2 text-center">
              <span
                className={`${open_sans.className}  text-xs font-semibold text-gray-400`}
              >
                {`Don't have an account?`}
              </span>

              <Link href="/signup">
                <button
                  className={`${noto_serif.className}   text-base font-semibold text-btn`}
                >
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap content-center justify-center rounded-r-md"
          style={{ width: "24rem", height: "34rem" }}
        >
          <Image
            className="h-full w-full rounded-r-md bg-cover bg-center bg-no-repeat"
            src={form_img}
            alt="form_img"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
