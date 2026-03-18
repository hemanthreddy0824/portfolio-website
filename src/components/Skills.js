import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Languages</h3>
          <p>Java, Python, C</p>
        </div>

        <div className="skill-card">
          <h3>Web</h3>
          <p>React, Node.js, JavaScript</p>
        </div>

        <div className="skill-card">
          <h3>Cloud & DevOps</h3>
          <p>AWS, Docker, GitHub Actions</p>
        </div>

        <div className="skill-card">
          <h3>Databases</h3>
          <p>MySQL, PostgreSQL, MongoDB</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;