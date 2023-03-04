import { create } from "zustand";

type User = {
  userId: string;
  username: string;
  email: string;
  password: string;
};

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
  setUserProfile: ({ username, email }: User) => void;
};

const useStore = create<StoreValues>((set, get) => ({
  userId: "",
  email: "",
  password: "",
  username: "",
  userProfile: { userId: "", username: "", email: "", password: "" },

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

  setUserProfile: ({ username, email, userId }: User) => {
    set({
      userProfile: { username, email, userId, password: "" },
    });
  },

  setUserId: (id: string) => {
    set({
      userId: id,
    });
  },
}));

export default useStore;
