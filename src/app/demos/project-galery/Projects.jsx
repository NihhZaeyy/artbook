"use client";
import React from "react";
import { useState } from "react";
import Project from "@/app/components/project-galery/project/Index";
import Modal from "@/app/components/project-galery/modal/Index";

function Projects() {
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
    <>
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
    </>
  );
}

export default Projects;
