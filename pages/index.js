import { Sidebar } from "../components/Sidebar";
import { Center } from "../components/Center";

export default function Home() {
  return (
    <div className="bg-black h-scren overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center /> 
      </main>

      <div>{/* Player */}</div>
    </div>
  );
}
