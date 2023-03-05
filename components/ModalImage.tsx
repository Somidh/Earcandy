import supabase from "@/server/supabase";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

type ModalImageProps = {
  url: string;
  onUpload: (value: string) => void;
};

const ModalImage: FC<ModalImageProps> = ({ url, onUpload }) => {
  const [eventimageUrl, setEventImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
    console.log(url, "rurl");
  }, [url]);

  async function downloadImage(path: any) {
    try {
      const { data, error } = await supabase.storage
        .from("images")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setEventImageUrl(url);
    } catch (error: any) {
      console.log("Error downloading image: ", error.message);
    }
  }

  async function uploadEventImage(event: any) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, file);

      if (uploadError) {
        console.log(uploadError);
      }
      onUpload(filePath);
    } catch (error: any) {
      alert(error?.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      {eventimageUrl ? (
        <Image
          src={eventimageUrl}
          alt="Product Image"
          className="rounded border-none object-cover shadow "
          width="300"
          height="300"
        />
      ) : uploading ? (
        "Uploading ..."
      ) : (
        <div className="flex h-[8rem] cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-[#8B9A91]">
          <label className="flex h-full w-full flex-col items-center justify-center text-[#303933]">
            <svg
              className="h-8 w-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="">Add Cover</span>
            <input
              type="file"
              name="image"
              id="image"
              className="hidden"
              onChange={uploadEventImage}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default ModalImage;
