import React from "react";

const apps = [
  {
    name: "Vidload Pro (for PC)",
    url: "https://mega.nz/file/NNRymLZR#etr0cgMySbO-X3VHdJyHb-AiYBZd3YeHW9k35LBGWlo",
  },
  // Add more apps here
];

export default function AppStore() {
  return (
    <section className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My App Store</h1>
      <ul className="space-y-2">
        {apps.map((app, index) => (
          <li key={index}>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {app.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
