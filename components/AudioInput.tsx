"use client";

import supabase from "@/server/supabase";
import { FC, useEffect, useState } from "react";

type AudioProps = {
  url: string;
  onUpload: (value: string) => void;
};

const AudioInput: FC<AudioProps> = ({ url, onUpload }) => {
  const [audioUrl, setAudioUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadAudio(url);
    console.log(url, "url");
  }, [url]);

  async function downloadAudio(path: any) {
    try {
      const { data, error } = await supabase.storage
        .from("audio")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAudioUrl(url);
    } catch (error: any) {
      console.log("Error downloading audio: ", error.message);
    }
  }

  async function uploadAudio(event: any) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an audio to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("audio")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
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
      {audioUrl ? (
        <p>audio</p>
      ) : uploading ? (
        "Uploading ..."
      ) : (
        <input
          type="file"
          name="audio"
          id="audio"
          className="hidden"
          onChange={uploadAudio}
        />
      )}
    </div>
  );
};

export default AudioInput;
