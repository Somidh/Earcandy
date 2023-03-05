import supabase from "@/server/supabase";
import useStore from "@/store/store";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsMusicNote } from "react-icons/bs";
import Audio from "./Audio";
import ModalImage from "./ModalImage";

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
    image: "",
  });

  const [img_url, setEventImageUrl] = useState("");

  const [audioUrl, setAudioUrl] = useState("");
  const handleFormData = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const { userProfile } = useStore((state: any) => {
    return {
      userProfile: state.userProfile,
    };
  });

  const createPost = async (e: any) => {
    e.preventDefault();

    const { data, error } = await supabase.from("posts").insert([
      {
        title: formData.title,
        genre: formData.genre,
        part: formData.part,
        description: formData.description,
        posted_by: userProfile?.id,
        audio: audioUrl,
        cover: img_url,
      },
    ]);
    if (data) {
      console.log(data, "success");
    } else console.log(error, "error some");
    setIsOpen(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      formData.title &&
      formData.genre &&
      formData.part &&
      formData.description &&
      audioUrl
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
              name="title"
              placeholder="Title"
              id=""
              onChange={(e) => handleFormData(e)}
            />
            <div className="flex w-full justify-between ">
              <input
                className="w-[60%] rounded-sm border-none bg-[#C6DBCE] p-2"
                type="text"
                name="genre"
                placeholder="Genre"
                id=""
                onChange={(e) => handleFormData(e)}
              />
              <input
                className="w-[37%] rounded-sm border-none bg-[#C6DBCE] p-2"
                type="text"
                name="description"
                placeholder="Description"
                id=""
                onChange={(e) => handleFormData(e)}
              />
            </div>
            <input
              className="w-[37%] rounded-sm border-none bg-[#C6DBCE] p-2"
              type="text"
              name="part"
              placeholder="Part"
              id=""
              onChange={(e) => handleFormData(e)}
            />
            <div className="flex h-[2.5rem] cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-[#8B9A91]">
              <label className="flex h-full w-full items-center justify-center text-[#303933]">
                <BsMusicNote />
                <span className="">Add Audio</span>
                <Audio
                  url={audioUrl}
                  onUpload={(url) => {
                    setAudioUrl(url);
                  }}
                />
              </label>
            </div>
            <ModalImage
              url={img_url}
              onUpload={(url) => {
                setEventImageUrl(url);
              }}
            />
            <button
              type="submit"
              className="w-full rounded-sm border-none bg-[#C6DBCE] p-2"
            >
              Submit
            </button>
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
