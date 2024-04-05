import { atom } from "recoil";

const currentTrackIdState = atom({
  key: "currentTrackIdState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});

export { currentTrackIdState, isPlayingState };
