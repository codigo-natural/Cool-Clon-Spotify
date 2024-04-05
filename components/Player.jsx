import { useSession } from "next-auth/react"
import useSpotify from "../hooks/useSpotify"
import { useRecoilState } from "recoil"
import { currentTrackIdState } from "../atoms/songAtom"
import { useState } from "react"
import useSongInfo from "../hooks/useSongInfo"

export const Player = () => {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [currentTrackId, setCurrentIdTrack] = useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlaying)
  const [volume, setVolume] = useState(50)

  const songInfo = useSongInfo()

  return (
    <div>
      {/* left */}
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}
