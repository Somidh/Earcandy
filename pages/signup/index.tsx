import SignupForm from "@/components/SignupForm";
import Image from "next/image";
import form_img from "public/assets/images/form_img.jpg";

const Signup = () => {
  return (
    <div className="flex min-h-screen w-full flex-wrap content-center justify-center bg-gray-200 py-10">
      <div className="flex items-center justify-center shadow-md">
        <SignupForm />

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

export default Signup;
