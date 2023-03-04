import supabase from "@/server/supabase";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Audio from "./Audio";

type Props = {
  isOpen: any;
  setIsOpen: any;
};
function AddBookModal({ isOpen, setIsOpen }: Props) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "all",
    audio: "",
    part: "",
  });
  const [audioUrl, setAudioUrl] = useState("");
  const handleFormData = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // const { userProfile, userId } = useStore((state: any) => ({
  //   userProfile: state.userProfile,
  //   userId: state.userId,
  // }));

  const createPost = async (e: any) => {
    e.preventDefault();

    console.log("myyaiejl", {
      title: formData.title,
      genre: formData.genre,
      part: formData.part,
      description: formData.description,
      // posted_by: userId,
      audio: audioUrl,
    });

    const { data, error } = await supabase.from("posts").insert([
      {
        title: formData.title,
        genre: formData.genre,
        part: formData.part,
        description: formData.description,
        // posted_by: userId,
        audio: audioUrl,
      },
    ]);
    if (data) {
      console.log(data, "success");
    } else console.log(error, "error some");
    router.push("/account");
    setIsOpen(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      formData.title &&
      formData.genre &&
      formData.part &&
      formData.description &&
      formData.audio
    ) {
      createPost(e);
    } else {
      console.log(formData);
      alert("fill all input fields");
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative w-full max-w-[22rem] rounded bg-white py-6 px-4">
          <Dialog.Title className="mb-7 font-bold text-[#303933]">
            Add Book
          </Dialog.Title>
          {/* <Dialog.Description>Some text</Dialog.Description> */}

          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className="w-full rounded-sm border-none bg-[#C6DBCE] p-2"
              type="text"
              name=""
              id=""
              onChange={(e) => handleFormData(e)}
            />
            <div className="flex w-full justify-between ">
              <input
                className="w-[60%] rounded-sm border-none bg-[#C6DBCE] p-2"
                type="text"
                name=""
                id=""
                onChange={(e) => handleFormData(e)}
              />
              <input
                className="w-[37%] rounded-sm border-none bg-[#C6DBCE] p-2"
                type="text"
                name=""
                id=""
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <input
              className="w-[37%] rounded-sm border-none bg-[#C6DBCE] p-2"
              type="text"
              name=""
              id=""
              onChange={(e) => handleFormData(e)}
            />
            <div className="flex h-[8rem] cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-[#8B9A91]">
              <label className="flex flex-col w-full h-full items-center justify-center text-[#303933]">
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="">Add Audio</span>
                <Audio
                  url={audioUrl}
                  onUpload={(url) => {
                    setAudioUrl(url);
                  }}
                />
              </label>
            </div>
            <input
              className="w-full rounded-sm border-none bg-[#C6DBCE] p-2"
              type="text"
              name=""
              id=""
            />
          </form>

          <button
            type="submit"
            className="absolute top-5 right-5"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
export default AddBookModal;
