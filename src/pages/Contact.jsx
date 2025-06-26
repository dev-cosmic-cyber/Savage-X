import React from "react";

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700 mb-6">
        Want to connect or collaborate? Feel free to reach out for inquiries, collaborations, or just to say hi!
        I'm always open to connecting with fellow developers, gamers, and enthusiasts. Let's create something amazing together!
      </p>

      <ul className="text-left text-gray-800 space-y-3">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:gammercosmic@gmail.com"
            className="text-blue-500 hover:underline"
          >
            gammercosmic@gmail.com
          </a>
        </li>
        <li>
          <strong>Discord:</strong>{" "}
          <a
            href="https://discord.gg/RjtAgTp5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Our Group
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/dev-cosmic-cyber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            dev-cosmic-cyber
          </a>
        </li>
        <li>
          <strong>Twitter:</strong>{" "}
          <a
            href="https://x.com/@CosmicGammer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Savage X
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/savage-x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            savage-x
          </a>
        </li>
        <li>
          <strong>Facebook:</strong>{" "}
          <a
            href="https://facebook.com/Savage810"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Savage
          </a>
        </li>
      </ul>
    </section>
  );
}
