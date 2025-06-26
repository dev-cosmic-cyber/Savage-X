import React from "react";

export default function Upcoming() {
  const upcomingItems = [
    {
      title: "Ritsu AI Assistant",
      description:
        "A smart AI assistant designed to help you manage tasks, code efficiently, and organize your schedule.",
      eta: "Coming Q4 2025",
    },
    {
      title: "Next-Gen Gaming Platform",
      description:
        "An innovative multiplayer platform focused on immersive gaming experiences with community features.",
      eta: "Launching Soon",
    },
    {
      title: "Mobile App Suite",
      description:
        "A collection of productivity and entertainment apps optimized for Android and iOS devices.",
      eta: "In Development",
    },
  ];

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Projects & Features</h1>
      <ul className="space-y-6">
        {upcomingItems.map((item, index) => (
          <li
            key={index}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-1">{item.description}</p>
            <p className="text-sm text-gray-500 italic">{item.eta}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
