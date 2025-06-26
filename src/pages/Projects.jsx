import React from "react";

const projects = [
  {
    name: "Ritsu AI (Upcoming)",
    description: "A personal AI assistant that helps you manage tasks, coding, and your schedule.",
  },
  {
    name: "Vidload Pro App",
    description: "A video downloader app that allows users to download videos from various platforms.",
  },
  {
    name: "Upcoming Project",
    description: "A new project that is currently in development. Details will be shared soon.",
  },
];

export default function Projects() {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <strong className="text-xl block mb-1">{project.name}</strong>
            <p className="text-gray-700">{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
