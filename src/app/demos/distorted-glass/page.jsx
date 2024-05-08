import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/app/components/distorted-glass/Scene"), {
  ssr: false,
});

const page = () => {
  return (
    <main className="relative h-screen">
      <Scene />
    </main>
  );
};

export default page;
