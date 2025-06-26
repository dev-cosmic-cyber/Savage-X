import React from "react";

export default function Music() {
  return (
    <section className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">My Music</h1>
      <p className="text-gray-700 mb-6">
        Listen to my original tracks and favorite playlists across your favorite platforms.
      </p>

      <ul className="space-y-4 text-lg">
        <li>
          <a
            href="https://soundcloud.com/gammercosmic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline"
          >
            🎵 SoundCloud
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCaEqsq4iMA1EZVeRPl2sn-g"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:underline"
          >
            📺 YouTube Channel
          </a>
        </li>
      </ul>
    </section>
  );
}
