import { Sidebar } from "../components/Sidebar";
import { Center } from "../components/Center";
import { getSession } from "next-auth/react";

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

export async function getServerSideProps() {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
