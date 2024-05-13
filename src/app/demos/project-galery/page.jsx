"use client";

import { useState } from "react";
import Project from "@/app/components/project-galery/project";
import Modal from "@/app/components/project-galery/modal";

export default function page() {
  const projects = [
    {
      title: "Old Portfolio",
      src: "galery1.png",
      color: "#222222",
    },
    {
      title: "Distorted Glass",
      src: "galery2.png",
      color: "#808080",
    },
    {
      title: "Old Portfolio",
      src: "galery1.png",
      color: "#222222",
    },
    {
      title: "Distorted Glass",
      src: "galery2.png",
      color: "#808080",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="w-4/5 flex flex-col justify-center">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
