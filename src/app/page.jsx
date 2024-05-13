import Navbar from "./components/navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" overflow-hidden bg-black flex flex-col flex-grow w-screen h-screen text-white">
      <Navbar />
      <div className="flex flex-col justify-center items-center py-[200px] px-8">
        <h1 className="font-bold text-6xl">Exploring Art Deeper 🎨🧑‍🎨</h1>
        <div className="mt-20 flex gap-12">
          <Link href="/demos/distorted-glass">
            <button className="text-xl border-2 border-white rounded-xl px-6 py-2 hover:bg-white hover:text-black duration-300">
              Distorted Glass
            </button>
          </Link>
          <Link href="/demos/project-galery">
            <button className="text-xl border-2 border-white rounded-xl px-6 py-2 hover:bg-white hover:text-black duration-300">
              Project Galery
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
