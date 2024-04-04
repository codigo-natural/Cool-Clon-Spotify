import { atom } from "recoil";

export const playlistState = atom({
  key: "playlistAtomState",
  dafault: null,
});

export const playlistIdState = atom({
  key: "playlistIdState",
  default: "5h7royKqQxP8iu2HuHYZUr", // playlist default Para programar calmadito 😌
});
