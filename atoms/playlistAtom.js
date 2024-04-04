import { atom } from "recoil";

const playlistState = atom({
  key: "playlistState",
  default: null,
});

const playlistIdState = atom({
  key: "playlistIdState",
  default: "5h7royKqQxP8iu2HuHYZUr", // playlist default Para programar calmadito 😌
});

export { playlistState, playlistIdState };