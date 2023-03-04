import type { TUser } from "@/types/TUser";
import { create } from "zustand";

type User = TUser;

type StoreValues = {
  userId: string;
  email: string;
  password: string;
  username: string;
  userProfile: User;
  setUserId: (id: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUsername: (username: string) => void;
  setUserProfile: ({
    username,
    email,
    id,
    full_name,
    user_image,
    bio,
  }: TUser) => void;
};

const useStore = create<StoreValues>((set, get) => ({
  userId: "",
  email: "",
  password: "",
  username: "",
  userProfile: {
    id: "",
    username: "",
    email: "",
    full_name: "",
    user_image: "",
    bio: "",
  },

  setEmail: (email: string) => {
    set({
      email: email,
    });
  },
  setPassword: (password: string) => {
    set({
      password: password,
    });
  },

  setUsername: (name: string) => {
    set({
      username: name,
    });
  },

  setUserProfile: ({
    username,
    email,
    id,
    full_name,
    user_image,
    bio,
  }: User) => {
    set({
      userProfile: { username, email, id, full_name, user_image, bio },
    });
  },

  setUserId: (id: string) => {
    set({
      userId: id,
    });
  },
}));

export default useStore;
