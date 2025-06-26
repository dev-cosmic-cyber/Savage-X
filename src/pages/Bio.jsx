import React from "react";

export default function Bio() {
  return (
    <section>
          <section style={{ textAlign: "center" }}>
      <img
        src="/profile.png"
        alt="Savage"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.4)",
          marginBottom: "20px",
        }}
      />
      <h1 style={{ fontSize: "2.5em", margin: "10px 0" }}>Savage</h1>
      <p style={{ fontSize: "1.2em", color: "#555" }}>
        Developer | Player | UltraElite Team Member
      </p>
    </section>
    <section style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ fontSize: "1.8em", marginBottom: "10px" }}>About Me</h2>
      <p>
        I am a dedicated developer and player, passionate about creating innovative solutions and excelling in competitive gaming. My journey in the tech world has been fueled by a love for coding and a desire to
        push the limits of what is possible. I thrive in collaborative environments and enjoy sharing knowledge with others. Whether I'm coding a new feature or strategizing in a game, I always aim for excellence
        and continuous improvement.
      </p>
    </section>
      <h1>Bio</h1>
      <p>
        <strong>Name:</strong> Savage<br />
        <strong>Age:</strong> 20<br />
        <strong>Gender:</strong> Male<br />
        <strong>Location:</strong> Dhaka, Bangladesh<br />
        <strong>Hobbies:</strong> Coding, Gaming, Hiking<br />
        <strong>Favorite Game:</strong> MineCraft<br />
        <strong>Favorite Tool:</strong> Visual Studio Code<br />
        <strong>Team:</strong> UltraElite<br />
        <strong>Profession:</strong> Developer, Player<br />
      </p>
      <p>
        Hi! I'm Savage, a passionate developer and player, always striving to push the boundaries in both code and play. I love to create, collaborate, and compete. Welcome to my world!
      </p>
    </section>
  );
}