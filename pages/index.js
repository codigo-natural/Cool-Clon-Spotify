import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <h1>This is a Cool Spotify Clone</h1>
    
      <main>
        <Sidebar />
        {/* Center  */}
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}
