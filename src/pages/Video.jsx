import React from "react";

export default function Video() {
  return (
    <section className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Video</h1>
      <p className="text-gray-700 mb-6">
        Check out my latest gameplay, music, and development videos on my channels:
      </p>
      <ul className="space-y-4 text-lg">
        <li>
          <a
            href="https://www.youtube.com/@EVG_Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:underline"
          >
            🎵 My Music Channel
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@omnigammer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:underline"
          >
            🎮 My Gaming Channel
          </a>
        </li>
      </ul>
    </section>
  );
}
