import "./About.css";

export const About = () => {
  return (
    <div className="about container">
      <h2>Hi, I'm Amlan 👋</h2>
      <p>
        As a full stack developer I build and deploy web applications using the
        MERN stack (MongoDB, Express, React, and Node.js). I also have
        experience using AWS EC2, for hosting web applications and other skills
        such as Redux,TypeScript, C++, EJS, and Git.
      </p>
      <h2>Education 🎓</h2>
      <p>
        I have done my Bachelor of Technology degree in Computer Science and
        Engineering from NERIST, where I have achieved a high CGPA of 8.31.
        <img src="/about/college.jpg" alt="My college" />
      </p>
      <h2>Collaborative Project 🔗</h2>
      <p>
        A collaborative project between NERIST and Arunchal Pradesh Police
        Department to develop a proof of concept to help the Superintendent of
        Police to track the ongoing progress of the FIR's registered.
        <img src="/about/collab.jpg" alt="Collab Project" />
      </p>
    </div>
  );
};
