import React from "react";

export default function Web() {
  return (
    <section className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">My Web</h1>
      <p className="mb-4 text-gray-700">
        Check out my profile and projects:
      </p>

      <ul className="space-y-4 text-left text-blue-600">
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/dev-cosmic-cyber"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            UltraEliteSavage
          </a>
        </li>
        <li>
          AI Project - Ritsu:{" "}
          <a
            href="UpComing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            AI: Ritsu
          </a>
        </li>
        <li>
          Earn money by sharing your WiFi:{" "}
          <a
            href="https://r.honeygain.me/ADNEB4AF6D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Honeygain
          </a>
        </li>
        <li>
          Earn money by completeing tasks:{" "}
          <a
            href=" https://www.jumptask.io/r/dipyxakygize"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            JumpTask
          </a>
        </li>
      </ul>
    </section>
  );
}
